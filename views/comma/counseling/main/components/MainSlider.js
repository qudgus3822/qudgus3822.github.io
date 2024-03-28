import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

// [23.07.05] 2차 swr hook test_박여울
import { useBannerList } from 'net/hooksOptionSetting';
// 원본
// import { useBannerList } from 'net/hooks';
import { HybridLink } from 'components/HybridLink';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie/lib';
import { detectTablet } from 'helpers/common';
import { OpenBrowser } from 'helpers/InvokeCSharp';
import { Container, SwrContainer } from 'components/containers';

SwiperCore.use([Autoplay, Navigation, Pagination]);


/**
 * @author yeowool <ywpark@duranno.com>
 * @file 23.05.02 메인개편 이후 사용중인 MainSlider
 */


export const MainSlider = () => {
  const cookies = new Cookies();
  const router = useRouter();

  // 슬라이드 내비게이션
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const Inappmode = router.asPath.includes('Inappmode');
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    setIsTablet(detectTablet());
  }, []);

  let BannerNo = '';
  let Apptype = '';
  if (Inappmode === false || isTablet) {
    BannerNo = '1';
    // 수경님 : 개편 테스트용 베너 적용 _김용환
    // BannerNo = '43';
    Apptype = '002';
  } else {
    BannerNo = '21';
    // 수경님 : 개편 테스트용 베너 적용 _김용환
    // BannerNo = '44';
    Apptype = '001';
  }


  // 슬라이더 아이템이 없으면 에러나는 버그의 존재를 확인 _김용환 23.05.01
  const { data, error } = useBannerList(BannerNo, Apptype, '001', '001', '10');

  const outLinkMove = (url) => {
  };

  // 메인베너 클릭 수 집계를 위한 클릭이벤트_박여울
  const onClickBanner = (imageNo) => {
    const userNo = cookies.get('user');
    
  };

  return (
    <Section>
      {/* SwrContainer 데이터 에러 확인용 추가 _박여울 */}
      <SwrContainer data={data} error={error}>
        <SwiperContainer>
          {data && (
            <Swiper
              autoplay
              loop
              pagination={{
                type: 'fraction',
                el: '.custom',
                renderBullet: function (index, className) {
                  return '<span className="' + className + '">' + (index + 1) + '</span>';
                },
              }}
              // 네비게이션 버튼 옵션 비활성화 (= 커스텀버튼이 존재하므로) _박여울
              // navigation={{
              //   prevEl: prevRef.current ? prevRef.current : undefined,
              //   nextEl: nextRef.current ? nextRef.current : undefined,
              // }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.update();
              }}
              effect="slide"
              slidesPerView="auto"
              spaceBetween={0}
              speed={1000}
              centeredSlides="true"
            >
              {data.map((banner, index) => (
                <SwiperSlide 
                key={index.toString()}
                 // 메인베너 클릭 수 집계 기능 추가_박여울
                onClick={() => onClickBanner(banner.imageNo)}
                >
                  {banner?.bannerActionKindCode == '002' && banner?.linkMoveKindCode == '001' ? (
                    
                      <SlideLink>
                        {!banner.image ? (
                          <Img className="pc_only" src={banner.image} alt={banner.title} />
                        ) : (
                          <>
                            <Img className="pc_only" src={banner.image} alt={banner.title} />
                            <Img className="mb_only" src={banner.image} alt={banner.title} />
                          </>
                        )}
                      </SlideLink>
                    
                  ) : banner.bannerActionKindCode == '002' && banner.linkMoveKindCode == '002' ? (
                    <div onClick={() => outLinkMove(banner?.link)}>
                      <SlideLink>
                        {banner.image ? (
                          <Img src={banner.image} alt={banner.title} />
                        ) : (
                          <>
                            <Img className="pc_only" src={banner.image} alt={banner.title} />
                            <Img className="mb_only" src={banner.image} alt={banner.title} />
                          </>
                        )}
                      </SlideLink>
                    </div>
                  ) : (
                    <SlideLink>
                      {banner.image ? (
                        <Img src={banner.image} alt={banner.title} />
                      ) : (
                        <>
                          <Img className="pc_only" src={banner.image} alt={banner.title} />
                          <Img className="mb_only" src={banner.image} alt={banner.title} />
                        </>
                      )}
                    </SlideLink>
                  )}
                </SwiperSlide>
              ))}

              {/* 페이지 카운팅 */}
              <PageContainer>
                <div className="swiper-pagination custom"></div>
              </PageContainer>

              {/* 좌우 네비게이션 */}
              {/* 버튼 두 개의 요소로 분리(한 컨테이너 안에 있을 시 가운데 클릭안됨)_박여울 */}
              <SwiperNaviWrapL className="pc_only">
                <PrevBtn ref={prevRef}>
                  <img src="/images/main/arrow_prev.png" height="64" width="44" />
                </PrevBtn>
              </SwiperNaviWrapL>
              <SwiperNaviWrapR className="pc_only">
                <NextBtn ref={nextRef}>
                  <img src="/images/main/arrow_next.png" height="64" width="44" />
                </NextBtn>
              </SwiperNaviWrapR>
            </Swiper>
          )}
        </SwiperContainer>
      </SwrContainer>
    </Section>
  );
};



const Section = styled.section`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  margin-top: -10px;

  .swiper-container {
    // 데이터 요소 나열 시 가운데 공백발생으로 높이 조절함_박여울
    /* height: 330px; */
    height: 280px;

    ${({ theme }) =>
      theme.media.under_tablet(`
      height: fit-content;
  `)}
  }
  .swiper-slide {
    opacity: 0.6;
    max-width: 1120px;
    width: 100%;

    padding: 0 10px;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide.swiper-slide-active {
    opacity: 1;
    transition: 2.5s;
  }
  .swiper-slide.swiper-slide-next {
    opacity: 0.6;
  }
  .swiper-slide.swiper-slide-prev {
    opacity: 0.6;
  }

  ${({ theme }) =>
    theme.media.under_tablet(`
    .swiper-slide {
      padding: 0;
    }
  `)}
`;

const SwiperContainer = styled.div``;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;

  ${({ theme }) =>
    theme.media.under_tablet(`
    border-radius: 0px;
  `)}
`;
const SlideLink = styled.a`
  display: block;
`;

const SwiperNaviWrapL = styled(Container)`
  display: block;
  position: relative;
  left: -480px;
  top: -140px;
  transform: translate(-50%, -50%);
  z-index: 10;
  height: 64px;
  width: 60px;
  box-sizing: border-box;
  cursor: pointer;

  max-width: 1120px;
  padding: 0 10px;
`;
const SwiperNaviWrapR = styled(Container)`
  display: block;
  position: relative;
  left: 540px;
  top: -204px;
  transform: translate(-50%, -50%);
  z-index: 10;
  height: 64px;
  width: 60px;
  box-sizing: border-box;
  cursor: pointer;

  max-width: 1120px;
  padding: 0 10px;
`;

const PrevBtn = styled.div`
  cursor: pointer;
`;
const NextBtn = styled.div`
  cursor: pointer;
`;

const PageContainer = styled.div`
  position: relative;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  z-index: 10;

  .swiper-pagination-fraction {
    width: 74px;
    height: 32px;
    border-radius: 16px;
    background: rgba(51, 51, 51, 0.1);

    font-size: 14px;
    font-weight: 400;
    color: #999;
    letter-spacing: -0.35px;
    line-height: 32px;

    /* left: 50px; */
    /* bottom: 48px; */
    left: 8%;
    bottom: 20px;
  }
  .swiper-pagination-current {
    font-size: 14px;
    font-weight: 700;
    color: #333;
    letter-spacing: -0.35px;
    margin-right: 2px;
  }
  .swiper-pagination-total {
    margin-left: 2px;
  }

  ${({ theme }) =>
    theme.media.under_tablet(`
    
    .swiper-pagination-fraction {
      width: 50px;
      height: 25px;

      font-size: 12px;
      letter-spacing: -.3px;
      line-height: 25px;
      // bottom: 25px;
      left: 8%;
      bottom: 16px;
    }
    .swiper-pagination-current {
      font-size: 12px;
      letter-spacing: -.3px;
      margin-right: 1px;
    }
    .swiper-pagination-total {
      margin-left: 1px;
    }
  `)}

  ${({ theme }) =>
    theme.media.mobile(`
    .swiper-pagination-fraction {
      left: 20px;
      bottom: 25px;
    }
  `)}
`;

