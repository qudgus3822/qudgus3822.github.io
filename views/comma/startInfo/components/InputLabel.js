import React from 'react';
import styled from 'styled-components';

const Component = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 13px;

  ${({ theme }) =>
        theme.media.under_tablet(`
      font-size: 15px;
      margin-bottom: 10px;
  `)}
`;

export const InputLabel = ({ ...props }) => (
    <Component>{props.children}</Component>
);
