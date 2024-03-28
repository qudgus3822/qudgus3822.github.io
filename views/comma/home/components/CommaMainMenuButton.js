import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/containers';
import { MainButtonList } from 'views/comma/home/organisms/MainButtonList';

const Component = styled.section`
  margin-top: ${({ marginTop }) => marginTop}px;
  ${({ theme }) =>
    theme.media.under_tablet(`
      margin-top: 40px;
    `)}
`;
const ListContainer = styled.div`
  display: flex;
  margin: 20px 0 0;
  overflow: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
`;



export const CommaMainMenuButton = ({ data, marginTop = 80 }) => {
  return (
    <Component marginTop={marginTop}>
      <Container>
      </Container>
      <Container mbFull>
        <ListContainer>
          <MainButtonList data={data || []} />
        </ListContainer>
      </Container>
    </Component>
  );
};
