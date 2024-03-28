import { useEffect, useState } from "react";
import styled from 'styled-components';
import { getEllipsis, getLetterSpacing } from 'utilities/getStyles';
import { Icon } from "components/images";
import useSWR from "swr";
import { useCommaMainButtonMenuList } from 'net/hooks/commaMain';
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

export default function CommaMainMenuBox({ no }) {
  const { data, error } = useCommaMainButtonMenuList();
  // const [item, setItem] = useState(null);
  let item;
  if (data) {
    item = data[no];
  }
  
  return (
    <>
      {item &&
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
        </Box>}

    </>
  )
}
