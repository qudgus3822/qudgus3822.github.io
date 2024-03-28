import CommaSelectBox from "components/comma/CommaSelectBox";
import styled, { css } from "styled-components";
import React, { useEffect, useState } from 'react';
import { MediumDisplay2 } from "components/texts";
import { BookListSection } from "components/sections";
import { useCommaAPI } from "net/hooks/comma";
import router, { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";
import { HybridLink } from "components/HybridLink";
import { MainLayout } from "components/layouts";
const BookItemComponent = styled.div``;

const BookItem = ({ data }) => {
  const router = useRouter();

  const Inappmode = router.asPath.includes('Inappmode');

  const BookRequest = () => {
    showTrueFalseAlert('출간을 요청할까요?', () => {
      useFetchPost("/api/library/book-request", {
        ProductCode: data?.productCode,
        MemberNo: cookie.get('user'),
      }).then(response => {
        if (response == 10001) {
          toast.info('출간을 요청했어요.');
        } else if (response == 999) {
          toast.info("이미 출간을 요청했어요.");
        } else {
          toast.info("출간 요청을 실패했어요. 다시 시도해 주세요.");
        }
      })
        .then(error => { });
    });
  }

  const onClickChannel = (url) => {
    if (cookie.get('in-app-mode') === 'true' || Inappmode) {
      OpenDetail(url);
    } else {
      router.push(url);
    }
  }

  return (
    <BookItemComponent>
      {data.type == "005" ? (
        <>
          <ImageContainer
            onClick={BookRequest}
          >
            <BookImage
              className="pc_only"
              showRequestPublication
              hasPdf={data.type?.ebook}
              hasAudiobook={data.type?.audio}
              width={175}
              alt={data.title}
              src={data.image}
              type={data.type}
              labelSize="small"
            />
            <BookImage
              className="mb_only"
              showRequestPublication
              hasPdf={data.bookType?.ebook}
              hasAudiobook={data.bookType?.audio}
              alt={data.title}
              src={data.image}
              width={100}
              height={143}
              type={data.type}
              labelSize="small"
            />
          </ImageContainer>
          <LabelList>
            {data.type == "001" && (
              <li>
                <BookLabel type="ebook" />
              </li>
            )}
            {data.type == "002" && (
              <li>
                <BookLabel type="ebook" />
              </li>
            )}
            {data.type == "003" && (
              <li>
                <BookLabel type="audiobook" />
              </li>
            )}
            {data.type == "005" && (
              <li>
                <BookLabel type="paper" />
              </li>
            )}
          </LabelList>
          <Title>{data.name}</Title>
          <Author>
            <span>{data.author}</span>&nbsp;<i>지음</i>
          </Author>
          {data.page && data.page != "0" ? <Page>{data.page}p</Page> : <Page>&nbsp;</Page>}
        </>
      ) : data?.type == "Channel" ? (
        <div onClick={() => onClickChannel(`/lounge/product-detail?id=${data.id}`)}>
          <a>
            <BookImage
              className="pc_only"
              hasPdf={data.type?.ebook}
              hasAudiobook={data.bookType?.audio}
              width={175}
              alt={data.title}
              src={data.image}
              type={data.type}

              labelSize="small"
            />
            <BookImage
              className="mb_only"
              hasPdf={data.bookType?.ebook}
              hasAudiobook={data.bookType?.audio}
              width={100}
              height={143}
              alt={data.title}
              src={data.image}
              type={data.type}

              labelSize="small"
            />
            <LabelList />
            <Title>{data.name}</Title>
            <Author>
              {data.author ? (
                <>
                  <span>{data.author}</span>&nbsp;<i>지음</i>
                </>
              ) : (
                <span>{"쉬는시간 편집부"}</span>
              )}
            </Author>
            {data.page && data.page != "0" ? <Page>{data.page}p</Page> : <Page>&nbsp;</Page>}
          </a>
        </div>
      ) : (
        <HybridLink href={`/store/product-detail?id=${data.id}`} >
          <a>
            <BookImage
              className="pc_only"
              hasPdf={data.type?.ebook}
              hasAudiobook={data.bookType?.audio}
              width={175}
              alt={data.title}
              src={data.image}
              type={data.type}

              labelSize="small"
            />
            <BookImage
              className="mb_only"
              hasPdf={data.bookType?.ebook}
              hasAudiobook={data.bookType?.audio}
              width={100}
              height={143}
              alt={data.title}
              src={data.image}
              type={data.type}

              labelSize="small"
            />
            <LabelList>
              {data.type == "001" && (
                <li>
                  <BookLabel type="ebook" />
                </li>
              )}
              {data.type == "002" && (
                <li>
                  <BookLabel type="ebook" />
                </li>
              )}
              {data.type == "003" && (
                <li>
                  <BookLabel type="audiobook" />
                </li>
              )}
              {data.type == "004" && (
                <li>
                  <BookLabel type="file" />
                </li>
              )}
              {data.type == "005" && (
                <li>
                  <BookLabel type="paper" />
                </li>
              )}
            </LabelList>
            <Title>{data.name}</Title>
            <Author>
              {data.author ? (
                <>
                  <span>{data.author}</span>&nbsp;<i>지음</i>
                </>
              ) : (
                <span>{"쉬는시간 편집부"}</span>
              )}
            </Author>
            {data.page && data.page != "0" ? <Page>{data.page}p</Page> : <Page>&nbsp;</Page>}
          </a>
        </HybridLink>
      )}
    </BookItemComponent>
  );
};


const Headline = styled(MediumDisplay2)`
  margin-top: 22px;
  ${({ theme }) =>
    theme.media.under_tablet(`
    margin-top:20px;
  `)}
`;
// Headline과 셀렉트박스의 배치를 위해
const HeadlineWrap = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 10;

  ${({ theme }) =>
    theme.media.under_tablet(`
    flex-direction: column;
  `)}
`;

const BookItemList = styled.ul`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: space-between;
  margin-top: 46px;
  align-items: end;
  ${({ theme, isTablet }) => !isTablet ?
    theme.media.under_tablet(`
    grid-gap: 30px 10px;
    grid-template-columns: repeat(auto-fill, 100px);
    justify-content: space-around;
    margin-top: 20px;
  `) : theme.media.under_tablet(`
    grid-gap: 30px 10px;
    grid-template-columns: repeat(5, 100px);
    justify-content: space-around;
    margin-top: 20px;
  `)}
`;

export default function BookFieldMainView() {

  const { data, error } = useCommaAPI('/api/books/books-main-subjects');
  const categoryData = useCommaAPI("/api/comma-book-category/category-list");

  const [currentCategory, setCurrentCategory] = useState(0);
  const router = useRouter();
  const initCategory = router.query.category;
  useEffect(() => {
    let categoryIndex = 1;
    if (categoryData && categoryData.data && categoryData.data.length > 0) {
      for (let categoryItem of categoryData.data) {
        if (categoryItem.title == initCategory) {
          setCurrentCategory(categoryIndex);
          setCurrentCategory2(categoryIndex % 2);
          break;
        }
        categoryIndex++;
      }
    }

  }, [router.query]);


  const selectChangeHandler = (e) => {
    // e.target
    setCurrentCategory(Number(e.target.getAttribute("value")));
    setCurrentCategory2(Number(e.target.getAttribute("value")) % 2);
  }
  return (
    <MainLayout>
      {(data) && (
        <>
          {(data[0].subjects?.length > 0) ? (
            <>
              <HeadlineWrap>
                <Headline>카테고리명</Headline>
                <CommaSelectBox data={categoryData?.data} initOption={categoryData && categoryData.data && categoryData.data.length > 0 && categoryData.data[currentCategory].title} selectChangeHandler={selectChangeHandler}></CommaSelectBox>
              </HeadlineWrap>
              <BookItemList>
                {
                  data[0].subjects.map(x => (
                    <li key={x.id}>{BookItem({ data: x })}</li>
                  ))
                }
              </BookItemList >
            </>) : (
            <div height={200} mbAlign="center" mbHeight="100vh">
              등록된 콘텐츠맵이 없습니다.
            </div>
          )
          }
        </>
      )}

    </MainLayout>
  )
}