import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { IconButton } from 'components/buttons';
import { BookImage } from 'components/book';
import {
    Container as ContainerBase,
    SwrContainer,
} from 'components/containers';
import { BookLabel } from 'components/labels';
import { MainLayout } from 'components/layouts';
import { MediumDisplay2, LightGray13, Title } from 'components/texts';
import { getEllipsis } from 'utilities/getStyles';
import { showAlert, showTrueFalseAlert } from 'utilities/showAlert';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { HybridLink } from 'components/HybridLink';
import { Center } from 'components/layouts';
import InfiniteScroll from "react-infinite-scroll-component";
import Cookie from 'universal-cookie/lib';
import useFetchPost from 'net/useFetchPost';
import { detectTablet } from 'helpers/common';
import { OpenDetail } from 'helpers/InvokeCSharp';
import CommaSelectBox from 'components/comma/CommaSelectBox';
import { useCommaAPI, useCommaAPIGet, useFetch } from 'net/hooks/comma';


export default function CommaCategory() {
    const router = useRouter();

    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [dataSet, setdataSet] = useState(false);
    const [startNo, setStartNo] = useState(0);
    const [nowPaging, setNowPaging] = useState(0);
    const [isTablet, setIsTablet] = useState(false);

    // const { bookmapno, name } = router.query;
    // const PublishNo = 0  //  홍성사로 하게 되면. . 10003   이값만 있으면 출판사 전체를..  필수 
    // const BrandNo = 0  // 1015   해당 브랜드로만 추출이 필요할 경우 5-> 쉬는시간 도서 6->쉬는시간 출판사 중 별도브랜드

    const categoryData = useCommaAPIGet("/api/Main/GetContentCateGory");
    const [currentCategory, setCurrentCategory] = useState(0);
    const initCategory = router.query.category;

    useEffect(() => {
        setCurrentCategory(Number(initCategory));
    }, [initCategory]);

    useEffect(() => {
        setData([]);
        iniData();
    }, [currentCategory])

    // 데이터 받아오기
    const onSearchData = () => {
        useFetch(`/api/Main/GetContentCateGoryContents/${currentCategory}`)
            .then(indata => {
                if (data?.length == 0) {
                    setData(indata);
                }
                else {
                    let tempData = [...data];
                    for (let i = 0; i < indata?.length; i++) {
                        tempData?.push(indata[i]);
                    }
                    setData(tempData);
                }
                setNowPaging(nowPaging + 1);
                setdataSet(true);
            })
            .then((error) => {
                setError(error);
            });
    }

    const iniData = () => {
        useFetch(`/api/Main/GetContentCateGoryContents/${currentCategory}`)
            .then(indata => {
                setData(indata);
                setNowPaging(0);
                setdataSet(true);
            })
            .then((error) => {
                setError(error);
            });
    }

    // 무한스크롤 다음 데이터 받기
    const update = () => {
        onSearchData();
    }

    useEffect(() => {
        setIsTablet(detectTablet());
        setNowPaging(0);
        iniData();
    }, []);

    const selectChangeHandler = (e) => {
        setCurrentCategory(Number(e.target.getAttribute("value")));
        // setdataSet(false);
        // setData([]);
        // onSearchData();
    }

    return (
        <Container>
            <BackButtonWrap className={'pc_only'}>
                <IconButton size={24} src="/images/btn-back-1.svg" onClick={() => { location.href = "/store/map" }} />
            </BackButtonWrap>
            <SwrContainer data={dataSet} error={error}>
                {(data) && (
                    <>
                        <HeadlineWrap>
                            <Headline>{categoryData.data?.find((item) => item.id == currentCategory)?.title}</Headline>
                            <CommaSelectBox dataSet={dataSet} data={categoryData?.data} currentOption={categoryData && categoryData.data && categoryData.data.length > 0 && categoryData.data?.find((item) => item.id == currentCategory)?.title} selectChangeHandler={selectChangeHandler}></CommaSelectBox>
                        </HeadlineWrap>
                        {(data?.length > 0) ? (
                            <InfiniteScroll
                                style={{ overflow: 'initial' }}
                                dataLength={data?.length != undefined ? data?.length : 0}
                                next={update}
                                hasMore={true}
                                loader={<h3></h3>}
                                endMessage={<h4></h4>}
                                scrollThreshold={0.6}
                            >
                                <BookItemList isTablet={isTablet}>
                                    {data.map((x, index) => (
                                        <li key={index}>{BookItem({ data: x })}</li>
                                    ))}
                                </BookItemList>
                            </InfiniteScroll>
                        ) : (
                            <Center height={200} mbAlign="center" mbHeight="100vh">
                                등록된 콘텐츠맵이 없습니다.
                            </Center>
                        )}
                    </>
                )}
            </SwrContainer>
        </Container>
    );
}
const Container = styled(ContainerBase)`
  padding-top: 0px;
  padding-bottom: 120px;
  ${({ theme }) =>
        theme.media.under_tablet(`
    padding-top: 0px;
    padding-bottom: 100px;
  `)}
`;
const Headline = styled(MediumDisplay2)`
  margin-top: 2px;
  ${({ theme }) =>
        theme.media.under_tablet(`
    margin-top:2px;
  `)}
`;
const LabelList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  > li {
    margin-right: 5px;
    margin-bottom: 5px;
  }
  ${({ theme }) =>
        theme.media.under_tablet(`
    margin-top: 12px;
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
const BookItemComponent = styled.div``;
const Author = styled(LightGray13)`
  display: flex;
  align-items: center;
  margin-top: 4px;
  font-weight: 500;
  > span {
    ${getEllipsis(1, 1.2)}
  }
  > i {
    line-height: 1.2;
    white-space: nowrap;
  }
  ${({ theme }) =>
        theme.media.under_tablet(`
    font-weight: 400;
    font-size:11px;
  `)}
`;
const Page = styled(LightGray13)`
  margin-top: 5px;
  font-weight: 400;
  ${({ theme }) =>
        theme.media.under_tablet(`
    font-size: 11px;
  `)}
`;
const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const BackButtonWrap = styled.div`
`;

const BookItem = ({ data }) => {
    const cookie = new Cookie();
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
        <>
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
        </>
    );
};

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