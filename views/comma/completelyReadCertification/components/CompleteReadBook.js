import styled from 'styled-components';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import { HybridLink } from 'components/HybridLink';
import { SwrContainer } from 'components/containers';

import { Icon } from 'components/images/Icon';
import { useMainRecommendedBookList } from 'net/hooks/commaMain';
import router, { useRouter } from 'next/router';
import { BookListSection } from 'components/sections';
import { useMainBookList } from 'net/hooks';
import { useCommaAPI, useCommaAPIGet } from 'net/hooks/comma';

SwiperCore.use([Pagination, Navigation]);

/**
 * @author yeowool
 * @file 23.05.02 메인개편 이후 사용중인 오늘의콘텐츠
 */

export const CompleteReadBook = ({ current }) => {
  const { data, error } = useCommaAPIGet(`/api/Main/GetMyBook/657/${current ? "Y" : "N"}`);

  return (
    <>
      {data && (
        <BookListSection
          marginTop={20}
          mbMarginTop={20}
          noTitle={true}
          noAuthor={true}
          dataLink="/complete-read/quiz-guide"
          titleLink="/store/books"
          data={data}
          MoveMainTabPage={'{"func": "MoveMainTabPage","params": [{"Menu": "' + "Store" + '","Index": "' + "3" + '"}]}'}></BookListSection>
      )}
    </>
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
