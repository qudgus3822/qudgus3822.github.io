import React from 'react';

import { SwrContainer } from 'components/containers';
import { useCommaMainButtonMenuList } from 'net/hooks/commaMain';
import { CommaMainMenuButton } from '../components/CommaMainMenuButton';

export const CommaMainButtonMenuList = ({}) => {
  const { data, error } = useCommaMainButtonMenuList();
  return (
    <SwrContainer data={data} error={error}>
      {(data && data?.length > 0) && <CommaMainMenuButton data={data} />}
    </SwrContainer>
  );
};
