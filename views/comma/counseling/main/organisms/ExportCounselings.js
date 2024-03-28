import React from 'react';

import { useRecommendedReviews } from 'net/hooks';
import { SwrContainer } from 'components/containers';
import { ExportCounseling } from 'views/comma/counseling/main/components';

type ExportCounselingsProps = {};

export const ExportCounselings = ({}: ExportCounselingsProps) => {
  const { data2, error } = useRecommendedReviews();
  const data = require('/public/data/counseling/main/export.json');
  console.log(data);
  return (
    <SwrContainer data={data} error={error}>
      {(data && data?.length > 0) && <ExportCounseling data={data} />}
    </SwrContainer>
  );
};
