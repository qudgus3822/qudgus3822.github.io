import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/containers';
import { Display2 } from 'components/texts';
import { ReviewList } from 'organisms/lists';
import { MainButtonList } from 'views/comma/home/organisms/MainButtonList';
import { getEllipsis, getLetterSpacing } from 'utilities/getStyles';
const Component = styled.section`
  margin-top: ${({ marginTop }) => marginTop}px;
  background-color:#E2F0D9;
  ${({ theme }) =>
    theme.media.under_tablet(`
      // margin-top: 40px;
      padding-bottom:10px;
    `)}

`;
const ListContainer = styled.div`
  display: flex;
  margin: 20px 0 0;
  overflow: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
`;
const Box = styled.div`
  flex-shrink: 0;
  display: block;
  position: relative;
  padding: 12px 35px 25px;
  width: 350px;
  border-radius: 1px;
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

const NicknameDiv = styled.div`
font-weight:1000
`;

const TitleDiv = styled.div`
font-size:12px;
background-color:;
`

export const CommaMainTopInfoComponent = ({ data, marginTop = 0 }) => {
  return (
    <Component marginTop={marginTop}>
      <Container className='container'>

        <div className="title-area">
          <h2 className="title">{ data.title}</h2>
        </div>
        <Box>
          <div>{data.user.school}</div>
          <NicknameDiv>{data.user.nickname}</NicknameDiv>
          
        </Box>
      </Container>
    </Component>
  );
};
