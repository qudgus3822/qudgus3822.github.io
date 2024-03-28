import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/containers';
import { ExportCounselingRowList } from 'organisms/lists';

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

type ExportCounselingrops = {
  data: any,

  marginTop?: number,
};

export const ExportCounseling = ({ data, marginTop = 80 }: ExportCounselingProps) => {
  return (
    <Component marginTop={marginTop}>
      <Container>
        {/* <Display2WithLink href={`${titleLink}`}>{"전문상담"}</Display2WithLink> */}
      </Container>
      <Container mbFull>
        <ListContainer>
          <ExportCounselingRowList data={data || []} />
        </ListContainer>
      </Container>
    </Component>
  );
};
