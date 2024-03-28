import React from 'react';
import styled from 'styled-components';

import { AvatarImage, Icon } from 'components/images';
import { getEllipsis, getLetterSpacing } from 'utilities/getStyles';
import { HybridLink2 } from 'components/HybridLink2';
import Cookies from 'universal-cookie/lib';
import { route } from 'next/dist/next-server/server/router';
import router from 'next/router';

const ListContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  ${({ theme }) => theme.media.under_tablet(`
    padding: 0 20px;
  `)}
`;
const Box = styled.div`
  flex-shrink: 0;
  display: block;
  position: relative;
  padding: 12px 35px 25px;
  width: 350px;
  border-radius: 10px;
  border: solid 1px #dddddd;
  p {
    line-height: 1.53;
    ${getEllipsis(4)};
    min-height: ${0.8}em;
  }
  & ~ &{
    margin-left: 23px;
  }

  ${({ theme }) =>
    theme.media.under_tablet(`
      width: 332px;
      padding: 24px 30px 25px;
      & ~ & {
        margin-left: 15px;
      }
  `)}
`;

const CommLayout = styled.div`
  display: flex;
  flex-flow : column;
  height: 100%;
  justify-content: space-between;

  cursor: pointer;

  &:hover {
    .contentLine {
      // text-decoration: underline;
    }
  }
  .buttonLine{
    // margin-top:12px;
    padding-top:12px;
  }
`;

const BoxHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3px;

  > dl {
    margin-left: 10px;
    > dt {
      font-size: 15px;
      font-weight: bold;
      ${getEllipsis(1)};
    }
    > dd {
      font-size: 12px;
      ${getEllipsis(1)};
      ${getLetterSpacing(12)};
    }
  }
`;
const Label = styled(Icon)`
  position: absolute;
  right: -2px;
  bottom: 16px;
`;
const ContentDiv = styled.p`
`;

export const MainButtonList = ({ data, classYN }) => {
  const cookies = new Cookies();

  const userNo = cookies.get('user');
  return (
    <ListContainer>
      {data.map?.(item => (
        <Box key={item.id}>
            <CommLayout>
              <ContentDiv
                className='contentLine'
                onClick={() => {
                  console.log('main menu clicked');
                }}
              >{item.content}</ContentDiv>
              <BoxHeader>
                <dl>
                  <dt>{item.title}</dt>
                  <dd>
                  </dd>
                </dl>
            </BoxHeader>
            <ContentDiv className='buttonLine' onClick={() => {
              router.push('/counseling');
            }}>
              {item.link.text}
            </ContentDiv>
            </CommLayout>
        </Box>
      ))}
    </ListContainer>
  );
};
