import React from 'react';

import { useRecommendedReviews } from 'net/hooks';
import { SwrContainer } from 'components/containers';
import { ExportCounseling } from 'views/comma/counseling/exportcounselings/components';

type ExportCounselingsProps = {};

export const ExportCounselings = ({}: ExportCounselingsProps) => {
  const { data2, error } = useRecommendedReviews();
  const data = require('/public/data/counseling/main/export.json');
  console.log(data[0]);
  return (
    <SwrContainer data={data[0]} error={error}>
      {(data && data?.length > 0) && <ExportCounseling data={data} />}
    </SwrContainer>
    
  );
};
