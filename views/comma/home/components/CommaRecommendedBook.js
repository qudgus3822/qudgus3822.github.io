import styled from 'styled-components';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import { useMainBookList } from 'net/hooks';
import Link from 'next/link';
import { HybridLink } from 'components/HybridLink';
import { SwrContainer } from 'components/containers';

import { Icon } from 'components/images/Icon';
import Cookies from 'universal-cookie/lib';
import { useMainRecommendedBookList } from 'net/hooks/commaMain';

SwiperCore.use([Pagination, Navigation]);

/**
 * @author yeowool
 * @file 23.05.02 메인개편 이후 사용중인 오늘의콘텐츠
 */

export const CommaRecommendedBook = () => {
  // MainBookListData에 새로 담아서 책 리스트get_박여울
  const { data: MainBookListData, error: MainBookListDataErr } = useMainRecommendedBookList();
  // const { data: MainBookListData, error: MainBookListDataErr } = useMainBookList('15', '10');

  // 슬라이드 내비게이션
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // 오늘의 콘텐츠 클릭 수 집계를 위한 클릭이벤트_박여울
  // const onClickRecommendedBooks = (displayContentNo) => {
  //   const userNo = cookies.get('user');
  //   fetch(`/api/books/display-content-click?id=${displayContentNo}&userNo=${userNo}`);
  // };


  return (
    <Section>
      {/* MainBookListData 데이터 에러체크_박여울 */}
      <SwrContainer data={MainBookListData} error={MainBookListDataErr}>
        {MainBookListData && (
          //  오늘의 콘텐츠 요소 4개 미만일 경우 하단 슬라이드 바 안보이도록 css props로 분기처리_박여울
          <Container display={MainBookListData.subjects.length > 4 ? 'flex' : 'none'}>
            <Headline>오늘 이 콘텐츠 어때요?</Headline>
            <Swiper
              // 좌우 버튼 조건부 무한루프 설정_박여울
              loop={MainBookListData.subjects.length > 4 ? true : false}
              effect="slide"
              slidesPerView={1.2}
              spaceBetween={16}
              pagination={{
                type: 'bullets',
                clickable: true,
              }}
              navigation={{
                prevEl: prevRef.current ? prevRef.current : undefined,
                nextEl: nextRef.current ? nextRef.current : undefined,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.update();
              }}
              breakpoints={{
                540: {
                  slidesPerView: 2.2,
                },
                768: {
                  slidesPerView: 2.8,
                },
                1024: {
                  slidesPerView: 3.5,
                },
                1050: {
                  slidesPerView: 4,
                },
              }}
            >
              {MainBookListData.subjects.map((bookList, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    // 오늘의 콘텐츠 클릭 수 집계 기능 추가_박여울
                    onClick={() => onClickRecommendedBooks(bookList.displayContentNo)}
                  >
                    <HybridLink href={bookList.link}>
                      <FeedLink bgColor={bookList.backColor}>
                        <FeedTitle dangerouslySetInnerHTML={{ __html: bookList.copy1 }} />
                        <FeedImg>
                          <div>
                            <img className="bookImg" src={bookList.image} />

                            {/* [23.04.26] 요청자:강병민_콘텐츠 타입에 따른 태그 이미지 추가_박여울*/}
                            <LabelContainer>
                              {bookList.type == '002' && <Label src="/images/label_pdf.svg" />}
                              {bookList.type == '003' && <Label src="/images/label_audiobook.svg" />}
                            </LabelContainer>
                          </div>

                        </FeedImg>
                        <FeedCard>
                          <p dangerouslySetInnerHTML={{ __html: bookList.copy2 }} />
                        </FeedCard>
                      </FeedLink>
                    </HybridLink>
                  </SwiperSlide>
                );
              })}

              {/* 좌우 네비게이션 */}
              {/* 버튼 두 개의 요소로 분리(한 컨테이너 안에 있을 시 가운데 클릭안됨)_박여울 */}
              {/* 오늘의 콘텐츠 요소 4개 미만일 경우 좌우 버튼 안보이도록 css props로 분기처리_박여울 */}
              <SwiperNaviWrapL className="pc_only" display={MainBookListData.subjects.length > 4 ? 'block' : 'none'}>
                <PrevBtn ref={prevRef}>
                  <img src="/images/main/arrow_prev.png" height="64" width="44" />
                </PrevBtn>
              </SwiperNaviWrapL>
              <SwiperNaviWrapR className="pc_only" display={MainBookListData.subjects.length > 4 ? 'block' : 'none'}>
                <NextBtn ref={nextRef}>
                  <img src="/images/main/arrow_next.png" height="64" width="44" />
                </NextBtn>
              </SwiperNaviWrapR>
            </Swiper>
          </Container>
        )}
      </SwrContainer>
    </Section>
  );
};


const Section = styled.section`
  margin-top: 30px;
`;
const Container = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  //버튼 두개로 나눴을 때 높이가 달라져서 height추가_박여울
  /* height: 430px; */

  position: relative;

  .swiper-container {
    margin-top: 20px;
    padding-bottom: 20px;
    // Swiper 버튼 위치변경으로 인한 css꼬임 수정_박여울
    height: 100%;
  }

  //swiper-slide의 css스타일 FeedLink 태그로 이동_박여울
  .swiper-slide {
    border-radius: 12px;
    cursor: pointer;
  }
  .swiper-pagination-progressbar {
    top: unset;
    bottom: 0;
    background: #ddd;
  }
  .swiper-pagination-progressbar-fill {
    background: #333;
  }

  .swiper-pagination-bullets {
    // 요소가 4개 미만일 경우 스와이퍼 하단 바 제거_박여울
    display: ${(props) => props.display};
    width: 100%;
    bottom: 0;
  }
  .swiper-pagination-bullet {
    margin: 0 !important;

    flex: 1 0 0;
    height: 5px;
    border-radius: unset;
    background: #ddd;
  }
  .swiper-pagination-bullet-active {
    background: #333;
  }

  ${({ theme }) =>
    theme.media.under_tablet(`
    max-width: 100%;
    padding: 0 0 0 20px;


    .swiper-container {
      padding-right: 20px;
    }

    .swiper-pagination-progressbar {
      width: calc(100% - 20px);
    }

    .swiper-pagination-bullets {
    // 요소가 4개 미만일 경우 스와이퍼 하단 바 제거_박여울
      display: ${(props) => props.display};
      width: calc(100% - 20px);
    }
  `)}

  ${({ theme }) =>
    theme.media.mobile(`
    .swiper-container {
      margin-top: 16px;
    }
    .swiper-slide {
     // 모바일 스타일 조정을 위해 height요소 삭제_박여울
     //  height: 338px;
    }
  `)}
// 기존 스와이퍼 버튼 스타일 안보이도록 설정_박여울
.swiper-button-next::after,
.swiper-button-prev::after {
    display: none;
  }
`;

// 좌우버튼으로 박스 나눔_박여울
const SwiperNaviWrapL = styled(Container)`
  // 요소가 개 미만일 경우 좌우 버튼 제거_박여울
  display: ${(props) => props.display};
  /* position: relative; */
  /* left: -510px; */
  /* top: -48%;
  /* left: 10px; */

  /* /* transform: translate(-50%, -50%); */
  transform: translateY(-50%);
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  height: 64px;
  width: 60px;
  box-sizing: border-box;
  cursor: pointer;

  max-width: 1120px;
  padding: 0 10px;
`;
const SwiperNaviWrapR = styled(Container)`
  // 요소가 4개 미만일 경우 좌우 버튼 제거_박여울
  display: ${(props) => props.display};
  /* position: relative; */
  /* left: 540px; */
  /* /* top: -270px; */

  /* transform: translate(-50%, -50%); */
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  height: 64px;
  width: 60px;
  box-sizing: border-box;
  cursor: pointer;

  max-width: 1120px;
  padding: 0 10px;
`;

const PrevBtn = styled.div`
  width: 40px;
  /* height: 40px; */
  /* border-radius: 50%; */
  position: absolute;
  /* left: 0px; */
  left: -10px;
  cursor: pointer;
  /* box-shadow: 0 3px 6px #00000029; */

  img {
    width: 100%;
    height: 100%;
    /* opacity: 0.7; */
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 0 6px 6px 0;
  }
`;
const NextBtn = styled.div`
  width: 40px;
  /* height: 40px; */
  /* border-radius: 50%; */
  position: absolute;
  /* right: 0px; */
  right: -10px;
  cursor: pointer;
  /* box-shadow: 0 3px 6px #00000029; */

  img {
    width: 100%;
    height: 100%;
    /* opacity: 0.7; */
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 6px 0 0 6px;
  }
`;

const Headline = styled.h2`
  font-size: 25px;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: -0.55px;

  ${({ theme }) =>
    theme.media.under_tablet(`
    font-size: 20px;
  `)}
`;
const FeedTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.45px;

  margin: 24px;
  margin-bottom: 20px;
  min-height: 56px;
  position: relative;
  z-index: 10;
  /* overflow: hidden; */
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  max-height: 2.7em;

  ${({ theme }) =>
    theme.media.mobile(`
    // font-size: 16px;
    // line-height: 24px;
    letter-spacing: -.4px;
    margin: 20px 0 20px 20px;
  `)}
`;
const FeedImg = styled.div`
  height: 220px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-shrink: 0;

  > div {
    position: relative;
  }

  .bookImg {
    height: 233px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  }

  ${({ theme }) =>
    theme.media.mobile(`
    height: 180px;

    .bookImg {
     // 모바일 화면 조정을 위해 height 값 조정
     // height: 180px;
     height: 250px;
    }
  `)}
`;
const FeedCard = styled.div`
  width: 100%;
  height: 93px;
  /* background: rgba(255, 255, 255, 0.3); */
  background: rgba(239, 239, 239, 0.3);
  backdrop-filter: blur(10px);
  filter: brightness(100%);
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 0 0 12px 12px;
  padding: 24px;
  box-sizing: border-box;
  text-align: center;

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  ${({ theme }) =>
    theme.media.mobile(`
    height: 80px;
    padding: 16px 20px;

    p {
      font-size: 15px;
    }
  `)}
`;
// 스타일 적용을 위해 태그 생성하여 배경색 props전달_박여울
const FeedLink = styled.div`
  height: 419px;
  box-sizing: border-box;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-flow: column;
  // [23.04.26] 요청자:정옥희_기본 배경색 수정_박여울
  background: ${(props) => props.bgColor || '#dddddd'};
`;



const LabelContainer = styled.div`
  position: absolute;
  z-index: 4;
  top: 16px;
  /* right: -4px; */
  right: -8px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${({ theme }) =>
    theme.media.under_tablet(`
    top: 16px; 
  `)}
`;
const Label = styled(Icon)`
  width: 60px;
  /* width: 72px; */

  ${({ theme }) =>
    theme.media.under_tablet(`
    // width: 40px;
  `)}
`;
