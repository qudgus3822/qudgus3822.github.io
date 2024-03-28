import { Container, SwrContainer } from "components/containers"
import { useCommaAPI } from "net/hooks/comma";
import styled from "styled-components";

import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconButton } from 'components/buttons';
import { MainLayout } from 'components/layouts';
import { List, ListItem } from 'components/list';
import { Heading, RegularText } from 'components/texts';
import { COLOR } from 'constants/COLOR';
import { MB_FONT_SIZE } from 'constants/FONT_SIZE';
import { media } from 'constants/media';
import { useNotifications } from 'net/hooks';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie/lib';
import { useEffect } from 'react';
import { showAlert } from 'utilities/showAlert';
import { getUTC } from 'helpers/common';
import { OpenBrowser, OpenDetailFullURL } from 'helpers/InvokeCSharp';
import { NoNotification } from "../../views/notifications/organisms";
import { CommaMainLayout } from "components/layouts/CommaMainLayout";
const Title = styled.h2`
  max-width: 692px;
  width: 100%;
  margin: 0 auto;

  font-size: 24px;
  font-weight: 700;
  margin-top: 40px;
  padding-bottom: 28px;
`;
const ClickDiv = styled.div`
  width: inherit;
  
  ${({ target }) => target == "Y" && `cursor: pointer;`}
`;
const ListWrap = styled(List)`

  max-width: 692px;
  width: 100%;
  margin: 0 auto;

${media.under_tablet(`
  padding: 0 20px;
`)}
`;
const Notification = styled(ListItem)`
  padding: 20px;
  border-bottom: none;
  border-radius: 10px;
  background: #FAFAFA;
  margin-top: 8px;

  :first-of-type {
    margin-top: 0px;
  }

  &.read {
    background: #fff;
    color: ${COLOR.LIGHTGRAY};
  }

  ${media.under_tablet(`
    align-items: center;

    :first-of-type {
      margin-top: 16px;
    }

  `)}
`;
const NotificationTitle = styled(Heading)`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 6px;

  ${media.under_tablet(`
    font-size: ${MB_FONT_SIZE.BODY}px;
  `)}
`;

const NotificationMessage = styled(Heading)`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 6px;
  line-height: 1.7;

  ${media.under_tablet(`
    font-size: ${MB_FONT_SIZE.BODY}px;
  `)}
`;

const Timestamp = styled(RegularText)`
  font-size: 14px;
  color: #999;
  ${media.under_tablet(`
    font-size: 13px;
    color: ${COLOR.LIGHTGRAY_D1};

    &.read {
      color: ${COLOR.LIGHTGRAY};
    }
  `)}
`;

export default function ConfirmApplicantMainView() {
    const cookie = new Cookies();
    const userNo = !!cookie.get('user') ? parseInt(cookie.get('user')) : 0;

    const UTC = getUTC();

    const { data, error, mutate } = useCommaAPI(`/api/comma-member/applicant?id=${userNo}&UTC=${UTC}`);

    const onClickAccept = (id) => {

    }
    const onClickDeny = (id) => {

    }
    return (
        <SwrContainer data={data} error={error}>
            {data && (
                <>
                    {data.length > 0 ? (
                        <CommaMainLayout>
                            <Container mbFull>
                                <Title>알림</Title>
                                <ListWrap borderColor='transparent'>
                                    {data.map(({ id, name, timestamp, birth }) => (
                                        <Notification key={id}>
                                            <ClickDiv onClick={() => onClickNoti(id, notiTypeKind)} target={true != "" ? "Y" : "N"}>
                                                <div>
                                                    <NotificationTitle>{name}</NotificationTitle>
                                                    {/* {birth && (
                                                        <NotificationMessage>{birth}</NotificationMessage>
                                                    )} */}
                                                    <Timestamp>
                                                        {timestamp}
                                                    </Timestamp>
                                                </div>
                                            </ClickDiv>
                                            <IconButton
                                                alt=""
                                                size={10}
                                                marginLeft={30}
                                                src="/images/checkbox-2.svg"
                                                onClick={() => onClickAccept(id)}
                                            />
                                            <IconButton
                                                alt=""
                                                size={10}
                                                marginLeft={30}
                                                src="/images/btn-close-4.svg"
                                                onClick={() => onClickDeny(id)}
                                            />
                                        </Notification>
                                    ))}
                                </ListWrap>
                            </Container>
                        </CommaMainLayout>
                    ) : (
                        <NoNotification />
                    )}
                </>
            )}
        </SwrContainer>
    )
}