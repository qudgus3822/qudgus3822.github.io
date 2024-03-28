import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/containers';
import { Display2 } from 'components/texts';
import { ReviewList } from 'components/lists';
import { CommaMainMenuButton } from './CommaMainMenuButton';

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


const CommaMainMenu = ({ data, marginTop = 80 }) => {
  return (
    <Component marginTop={marginTop}>
      <Container mbFull>
        <ListContainer>
          <MainButtonList data={data || []} />
        </ListContainer>
      </Container>
    </Component>
  );
};
export default CommaMainMenu;
