import React from 'react';

import { Banners2Col } from './Banners2Col';
import { SwrContainer } from 'components/containers';
// [23.07.05] 2차 swr hook test_박여울
import { useBannerList } from 'net/hooksOptionSetting';
// 원본코드
// import { useBannerList } from 'net/hooks';
import { useRouter } from 'next/router';

export const Banners = ({ }) => {
  const router = useRouter();

  const Inappmode = router.asPath.includes('Inappmode');

  let BannerNo = "";
  let Apptype = "";
  if (Inappmode == false) {
    BannerNo = "9";
    Apptype = "002";
  } else {
    BannerNo = "38";
    Apptype = "001";
  }

  const { data, error } = useBannerList(BannerNo, Apptype, '004', '002', '2');

  return (
    <SwrContainer data={data} error={error}>
      {data && <Banners2Col data={data} />}
    </SwrContainer>
  );
};
