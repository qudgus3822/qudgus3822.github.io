import React from 'react';
import styled from 'styled-components';
import { SwrContainer } from 'components/containers';
import { useCommaMainTopInfo } from 'net/hooks/commaMain';
import { CommaMainMenuButton } from '../components/CommaMainMenuButton';
import { CommaMainTopInfoComponent } from '../components/CommaMainTopInfoComponent';




export const CommaMainTopInfo = ({ }) => {
  
  const { data, error } = useCommaMainTopInfo();
  return (
    <SwrContainer data={data} error={error}>
      {data && <CommaMainTopInfoComponent data={data} />}
    </SwrContainer>
  );
};
