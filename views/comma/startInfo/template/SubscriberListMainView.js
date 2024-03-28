import router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import styled from 'styled-components';

import { Button } from 'components/buttons';
import { Icon } from 'components/images';
import { Center } from 'components/layouts';
import { COLOR } from 'constants/COLOR';
import { FONT_SIZE } from 'constants/FONT_SIZE';
import Cookies from 'universal-cookie/lib';
import { showAlert } from 'utilities/showAlert';
import { LoginSuccess } from 'helpers/InvokeCSharp';

const RestyledCenter = styled(Center)`
  align-items: stretch;
`;
const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 812px;
  padding: 45px 20px 29px;
  width: 375px;
`;
const Contents = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 21px;
  width: 100%;
`;
const FlexContainer = styled.div`
  display: flex;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
  width: 100%;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.47;
  margin-left: 17px;
`;

const CustomHeading = styled.p`
  font-size: ${FONT_SIZE.HEADING}px;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 37px;
`;
const Circle = styled.div`
  align-items: center;
  background: ${COLOR.PRIMARY};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  height: 42px;
  width: 42px;
`;
const Strong = styled.strong`
  font-weight: bold;
`;
const Text = styled.p`
  word-break: keep-all;
  word-wrap: break-word;
`;
const SmallText = styled.p`
  color: ${COLOR.LIGHTGRAY_D1};
  font-size: 13px;
  font-weight: 400;
  line-height: 1.54;
  word-break: keep-all;
  word-wrap: break-word;
`;


export default function SubscriberListMainView() {
    return (<>
        <RestyledCenter>
            <MainContainer>
                <CustomHeading>
                    더 나은 서비스를 위해
                    <br />
                    접근 권한을 허용해 주세요!
                </CustomHeading>
                <Contents>
                    <div>
                        <FlexContainer marginBottom={25}>
                            <Circle>
                                <Icon
                                    alt=""
                                    size={24}
                                    src="/images/managePermissions/ic-mo-contact.svg"
                                />
                            </Circle>
                            <TextContainer>
                                <Strong>연락처(선택)</Strong>
                                <Text>선물하기를 위한 연락처 목록</Text>
                            </TextContainer>
                        </FlexContainer>
                        <FlexContainer>
                            <Circle>
                                <Icon
                                    alt=""
                                    size={24}
                                    src="/images/managePermissions/ic-mo-pic.svg"
                                />
                            </Circle>
                            <TextContainer>
                                <Strong>사진 / 미디어 / 파일 (선택)</Strong>
                                <Text>이미지 캐시, 프로필 설정, 미디어 콘텐츠 다운로드</Text>
                            </TextContainer>
                        </FlexContainer>
                    </div>
                    <SmallText>
                        * 원할한 서비스 이용을 위해서 아래 접근권한의 허용을 권고 드립니다.
                        서비스 내 앱설정에서도 접근 권한에 대한 수정이 가능합니다.
                    </SmallText>
                </Contents>
                <Button
                    fullWidth
                    fontSize={16}
                    height={54}
                    onClick={() => LoginDuranno()} // 홈으로 이동
                >
                    시작하기
                </Button>
            </MainContainer>
        </RestyledCenter>
    </>)
}