import { useContextQ } from 'context-q';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Button, TextButton } from 'components/buttons';
import { Input } from 'components/input';
import { Center } from 'components/layouts';
import { media } from 'constants/media';
import { MB_FONT_SIZE } from 'constants/FONT_SIZE';
import { InputLabel } from '../components/InputLabel';
import axios from 'axios';
import { showAlert } from 'utilities/showAlert';
import Cookies from 'universal-cookie';
import useFetchPost from 'net/useFetchPost';


const MainContainer = styled.main`
  border: solid 1px rgba(0, 0, 0, 0.12);
  height: 828px;
  padding: 101px 70px 248px;
  position: relative;
  width: 540px;

  ${media.under_tablet(`
    border: none;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 25px 35px 20px;
    width: 375px;
  `)}
`;
const FormContainer = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;
const InputsContainer = styled.div`
  margin-bottom: 48px;

  ${media.under_tablet(`
    flex: 1;
    margin-bottom: 59px;
  `)}
`;
const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;

  ${media.under_tablet(`
    margin-bottom: 25px;
  `)}
`;

const InputRelative = styled.div`
  position: relative;
  width: 100%;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 39px;

  ${media.under_tablet(`
    margin-bottom: 34px;
    font-size: ${MB_FONT_SIZE.DISPLAY2}px;
  `)}
`;

const RestyledTextButton = styled(TextButton)`
  right: 20px;
  position: absolute;
  text-decoration: underline;
  top: 19px;

  ${({ theme }) =>
        theme.media.under_tablet(`
      font-size: 11px;
  `)}
`;

const InputInfo = styled(Input)`
  &:-webkit-autofill{
    -webkit-text-fill-color: #333;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #EEEEEE inset !important;
  }
`;

export default function SignUp() {
    const cookies = new Cookies();
    const router = useRouter();
    const context = useContextQ();
    const qs = require('qs');

    const [phoneReplaceYN, setPhoneReplaceYN] = useState(false);
    const [emailReplaceYN, setEmailReplaceYN] = useState(false);
    const [nameReplaceYN, setNameReplaceYN] = useState(false);

    const [userNickName, setUserNickName] = useState();
    const [nickNameCheck, setNickNameCheck] = useState(false);

    let sessionStorageEmail = '';
    let email = '';
    let SNSIdx = '';
    let SNSType = '';
    let DeviceID = '';
    let DeviceOS = '';
    let AppType = '';
    let AuthType = '';
    let nickname = '';
    let mobile = '';
    let name = '';
    let CI = '';
    let DI = '';
    let Terms_agreePushNotification = '';
    let MemberRegPathKindCode = '';

    if (typeof sessionStorage !== 'undefined') {
        sessionStorageEmail = sessionStorage.getItem('durannoEmail') || sessionStorage.getItem('emailAdress');
        SNSIdx = sessionStorage.getItem('SNSIdx');
        SNSType = sessionStorage.getItem('SNSType');
        DeviceID = sessionStorage.getItem('DeviceID');
        DeviceOS = sessionStorage.getItem('DeviceOS');
        AppType = sessionStorage.getItem('AppType');
        AuthType = sessionStorage.getItem('AuthType');
        name = sessionStorage.getItem('Name');
        mobile = sessionStorage.getItem('PhoneNo');
        CI = sessionStorage.getItem('CI');
        DI = sessionStorage.getItem('DI');
        Terms_agreePushNotification = sessionStorage.getItem('terms_agreePushNotification');
        MemberRegPathKindCode = sessionStorage.getItem('memberRegPathKindCode');
    }

    const [emailSession, setEmailSession] = useState(sessionStorageEmail || '');

    const [authType2, setAuthType2] = useState(AuthType || '');

    const [values, setValues] = useState({
        email: sessionStorageEmail,
        nickname: nickname,
        mobile: mobile,
        name: name,
    });

    // 회원가입 버튼 동작
    const handleSubmit = event => {
        event.preventDefault();

        if (authType2 == '001' || !sessionStorageEmail) {
            if ((authType2 == '001' && !emailReplaceYN)) {
                showAlert({ text: '이메일 중복 확인을 해 주세요.' });
                return;
            }
        }
        if (!nickNameCheck) {
            showAlert({ text: '닉네임 중복 확인을 해 주세요.' });
            return;
        }

        accountSignUp();
    };

    // 변경 시 값 저장
    const handleChange = prop => {
        return event => {
            setValues({
                ...values,
                prop: event.target.value,
            });
        };
    };

    // 메인 페이지 이동
    function formsubmit(resIdx, userIdxNo, Token) {
        const form = document.createElement('form');
        form.setAttribute('hidden', true);
        form.setAttribute('method', 'post');
        form.setAttribute('action', process.env.DURANNO_LOGIN_API_URL);

        const hiddenField = document.createElement('input');
        hiddenField.setAttribute('name', 'mbr_num');
        hiddenField.setAttribute('value', resIdx);
        form.appendChild(hiddenField);

        const hiddenField2 = document.createElement('input');
        hiddenField2.setAttribute('name', 'prepage');
        if (sessionStorage.getItem('prepage')) {
            hiddenField2.setAttribute('value', sessionStorage.getItem('prepage'));
            sessionStorage.removeItem('prepage');
        } else {
            hiddenField2.setAttribute('value', `${process.env.FRONT_URL}/mypage/setting-interests`);
        }
        form.appendChild(hiddenField2);

        const hiddenField3 = document.createElement('input');
        hiddenField3.setAttribute('name', 'Token');
        hiddenField3.setAttribute('value', Token);
        form.appendChild(hiddenField3);

        const hiddenField4 = document.createElement('input');
        hiddenField4.setAttribute('name', 'idx');
        hiddenField4.setAttribute('value', userIdxNo);
        form.appendChild(hiddenField4);

        document.body.appendChild(form);

        form.submit();
    }

    // 회원가입
    function accountSignUp() {
        // 빈값 허용 X
        const mobilePhone = (document.getElementById('mobilePhone').value || document.getElementById('mbMobilePhone').value).replace(/-/g, '');
        const userName = document.getElementById('userName').value || document.getElementById('mbUserName').value;
        const userNickName = document.getElementById('userNickName').value || document.getElementById('mbUserNickName').value;

        sessionStorage.setItem('userName', userName);
        sessionStorage.setItem('userNickName', userNickName);

        // 해외 사용자의 경우
        if (sessionStorageEmail || AuthType === '002') {
            email = sessionStorageEmail;
        }

        if (CI == null || DI == null) {
            CI = '0';
            DI = '0';
        }
        const paramArray = {
            "NickName": userNickName,
            "UserName": userName,
            "AuthType": AuthType,
            "Email": email,
            "Phone": mobilePhone,
            "SNSIdx": SNSIdx,
            "SNSType": SNSType,
            "DeviceID": DeviceID,
            "DeviceOS": DeviceOS,
            "AppType": AppType,
            "CI": CI,
            "DI": DI,
            "Terms_agreePushNotification": Terms_agreePushNotification,
            "MemberRegPathKindCode": MemberRegPathKindCode
        };

        axios.post('/api/Account/sign-up2', paramArray).then((result) => {
            if (Number(result.data.result) > 0) {
                if (cookies.get('Token') !== undefined || cookies.get('user') !== undefined) {
                    cookies.remove('Token', { path: '/' });
                    cookies.remove('user', { path: '/' });
                }
                cookies.set('user', result.data.userNo, { path: '/' });
                cookies.set('Token', result.data.token, { path: '/' });

                router.push(`${process.env.FRONT_URL}/login-success`);
            }
        }).catch((error) => { });
    }

    // 이메일 체크
    const emailAuth = () => {
        if (!emailSession) {
            showAlert({ text: '이메일 주소를 확인해 주세요.' });
            return;
        }


    };

    // 닉네임 체크
    const getNickNameCheck = () => {
        if (!userNickName) {
            showAlert({ text: '닉네임을 입력해 주세요.' });
            return;
        }

        if (userNickName?.length < 2 || userNickName?.length > 8) {
            showAlert({ text: '닉네임은 2~8자 사이로 설정해 주세요.' });
            return;
        }


    };

    useEffect(() => {
        if (sessionStorageEmail) {
            setEmailReplaceYN(false);
        }

        if (name) {
            setNameReplaceYN(false);
        }

        if (mobile) {
            setPhoneReplaceYN(false);
        }
    }, []);

    return (
        <Center>
            <MainContainer>
                <Title>
                    서비스 이용을 위해
                    <br />
                    기본 정보를 알려주세요.
                </Title>

                <FormContainer onSubmit={handleSubmit}>
                    <InputsContainer>
                        <InputBlock>
                            <InputLabel>휴대폰 번호</InputLabel>
                            <InputInfo
                                className="pc_only"
                                id="mobilePhone"
                                placeholder="휴대폰 번호를 입력해 주세요."
                                maxLength="20"
                                disabled={phoneReplaceYN}
                                defaultValue={values.mobile || ''}
                                onChange={() => handleChange('mobile')}
                            />
                            <InputInfo
                                className="mb_only"
                                id="mbMobilePhone"
                                disabled={phoneReplaceYN}
                                height={50}
                                maxLength="20"
                                placeholder="휴대폰 번호를 입력해 주세요."
                                defaultValue={values.mobile || ''}
                                onChange={() => handleChange('mobile')}
                            />
                        </InputBlock>


                        <InputBlock>
                            <InputLabel>닉네임</InputLabel>
                            <InputRelative>
                                <InputInfo
                                    className="pc_only"
                                    id="userNickName"
                                    placeholder="닉네임을 입력해 주세요."
                                    defaultValue={values.nickname || ''}
                                    maxLength={8}
                                    onChange={(e) => {
                                        handleChange('nickname');
                                        setNickNameCheck(false);
                                        setUserNickName(e.target.value);
                                    }}
                                />
                                <InputInfo
                                    className="mb_only"
                                    id="mbUserNickName"
                                    height={50}
                                    placeholder="닉네임을 입력해 주세요."
                                    defaultValue={values.nickname || ''}
                                    maxLength={8}
                                    onChange={(e) => {
                                        handleChange('nickname');
                                        setNickNameCheck(false);
                                        setUserNickName(e.target.value);
                                    }}
                                />
                                <RestyledTextButton mbFontSize={11} type="button" onClick={getNickNameCheck}>
                                    중복체크
                                </RestyledTextButton>
                            </InputRelative>
                        </InputBlock>
                        <InputBlock>
                            <InputLabel>이름</InputLabel>
                            <InputInfo
                                id="userName"
                                className="pc_only"
                                placeholder="이름을 입력해 주세요."
                                maxLength="10"
                                disabled={nameReplaceYN}
                                defaultValue={values.name || ''}
                                onChange={() => handleChange('name')}
                            />
                            <InputInfo
                                id="mbUserName"
                                className="mb_only"
                                height={50}
                                disabled={nameReplaceYN}
                                placeholder="이름을 입력해 주세요."
                                maxLength="10"
                                defaultValue={values.name || ''}
                                onChange={() => handleChange('name')}
                            />
                        </InputBlock>

                        <InputBlock>
                            <InputLabel>이메일</InputLabel>
                            <InputRelative>
                                <InputInfo
                                    className="pc_only"
                                    id="email"
                                    placeholder="이메일을 입력해 주세요."
                                    type="email"
                                    maxLength={50}
                                    defaultValue={sessionStorageEmail || ''}
                                    onChange={(e) => {
                                        handleChange('email');
                                        setEmailReplaceYN(false);
                                        setEmailSession(e.target.value);
                                    }}
                                />
                                <InputInfo
                                    className="mb_only"
                                    height={50}
                                    id="mbEmail"
                                    placeholder="이메일을 입력해 주세요."
                                    type="email"
                                    maxLength={50}
                                    defaultValue={sessionStorageEmail || ''}
                                    onChange={(e) => {
                                        handleChange('email');
                                        setEmailReplaceYN(false);
                                        setEmailSession(e.target.value);
                                    }}
                                />
                                <RestyledTextButton mbFontSize={11} type="button" onClick={emailAuth}>
                                    중복 확인
                                </RestyledTextButton>
                            </InputRelative>
                        </InputBlock>


                        <InputBlock>
                            <InputLabel>학교</InputLabel>
                            <InputRelative>
                                <InputInfo
                                    className="pc_only"
                                    id="email"
                                    placeholder=""
                                    type="email"
                                    maxLength={50}
                                    defaultValue={sessionStorageEmail || ''}
                                    onChange={(e) => {

                                    }}
                                />
                                <InputInfo
                                    className="mb_only"
                                    height={50}
                                    id="mbEmail"
                                    placeholder=""
                                    type="email"
                                    maxLength={50}
                                    defaultValue={sessionStorageEmail || ''}
                                    onChange={(e) => {

                                    }}
                                />
                                <RestyledTextButton mbFontSize={11} type="button" onClick={null}>
                                    찾기
                                </RestyledTextButton>
                            </InputRelative>
                        </InputBlock>
                    </InputsContainer>
                    <Button
                        className="pc_only"
                        fullWidth
                        borderRadius={10}
                        height={54}
                        type="submit"
                    >
                        다음
                    </Button>
                    <Button
                        className="mb_only"
                        fullWidth
                        borderRadius={10}
                        height={50}
                        type="submit"
                    >
                        다음
                    </Button>
                </FormContainer>
            </MainContainer>
        </Center>
    );
}
