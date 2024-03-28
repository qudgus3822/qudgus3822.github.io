import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageBanner } from './ImageBanner';
import { Container } from 'components/containers';
import { detectTablet } from 'helpers/common';

SwiperCore.use([Autoplay]);

const BannersSection = styled.div`
  margin-top: ${({ marginTop }) => marginTop}px;
  ${({ theme, mbMarginTop }) =>
    theme.media.under_tablet(`
    ${mbMarginTop ? `margin-top: ${mbMarginTop}px;` : ''}
  `)}
`;
const BannersContainer = styled(Container)`
  display: flex;

   div:last-child {
    margin-left: 25px;
  }
`;

const MbBannersContainer = styled(Container)`
  // display: flex;
  overflow: visible!important;
`;
const MbSlide = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

const Div = styled.div`
  // display: flex;
  margin: 0 -20px;
  position: relative;
  box-sizing: border-box;

  > div {
    padding: 0 20px;
  }
  > div > div > div {
    // margin-right: 10px;
  }
`;

type Banners2ColProps = {
  data: any[],

  marginTop?: number,
  mbMarginTop?: number,
};

export const Banners2Col = ({
  data,
  marginTop = 80,
  mbMarginTop = 40,
}: Banners2ColProps) => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    setIsTablet(detectTablet());
  }, []);

  return (
    <>
      {(data && data?.length > 0) && (
        <BannersSection marginTop={marginTop} mbMarginTop={mbMarginTop}>
          {data && isTablet ? (
            <BannersContainer>
              <ImageBanner flexWidth data={data[0]} />
              {data[1] && <ImageBanner flexWidth data={data[1]} />}
            </BannersContainer>
          ) : (
            <>
              <BannersContainer className="pc_only">
                <ImageBanner flexWidth data={data[0]} />
                {data[1] && <ImageBanner flexWidth data={data[1]} />}
              </BannersContainer>
              <MbBannersContainer className="mb_only">
                <Div>

                  <Swiper
                    autoplay
                    loop
                    slidesPerView={1}
                    spaceBetween={10}
                  >
                    {data?.map((x, i) => (
                      <SwiperSlide key={`${i}`}>
                        <MbSlide>
                          <ImageBanner flexWidth data={x} />
                        </MbSlide>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                </Div>
              </MbBannersContainer>
            </>
          )}
        </BannersSection>
      )}
    </>
  );
};
