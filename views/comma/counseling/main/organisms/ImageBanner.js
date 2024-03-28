import React from 'react';
import styled from 'styled-components';
import Cookie from 'universal-cookie/lib';
import { HybridLink } from 'components/HybridLink';
import { OpenBrowser } from 'helpers/InvokeCSharp';

const Banner = styled.a`
  position: relative;
  display: block;
  ${({ flexWidth }) =>
    flexWidth
      ? `
    flex:1;
    flex-shrink:0;
  `
      : `
    width: 100%;
  `}

  figure {
    width: 100%;
  }
  img {
    width: 100%;
    vertical-align: top;
  }
`;

type ImageBannerDataProps = {
  image: string,
  link: string,

  description?: string,
  mbImage?: string,
  title?: string,
};
type ImageBannerProps = {
  data: ImageBannerDataProps,
  flexWidth?: boolean,
};

export const ImageBanner = ({
  data,
  flexWidth,
  ...props
}: ImageBannerProps) => {

  const cookie = new Cookie();

  // 배너 클릭 하면 배너 클릭수 증가 및 배너 클릭 이력
  const onClickBanner = imageNo => {
    
  };

  // 링크 외부 이동
  const outLinkMove = (url) => {
  };

  return (
    <>
      {data && (data?.bannerActionKindCode == "002" && data?.linkMoveKindCode == "001") ? (
        
          <Banner
            flex={flexWidth}
            {...props}
            onClick={() => onClickBanner(data.imageNo)}
          >
            <figure>
              {data?.mobileImage ? (
                <>
                  <img
                    className="pc_only"
                    src={data?.image}
                    alt={data?.title || ''}
                  />
                  <img
                    className="mb_only"
                    src={data?.mobileImage}
                    alt={data?.title || ''}
                  />
                </>
              ) : (
                <img src={data?.image} alt={data?.title || ''} />
              )}
            </figure>
            {data?.description && (
              <figcaption className="sc_only">{data?.description}</figcaption>
            )}
          </Banner>
        
      ) : (data?.bannerActionKindCode == "002" && data?.linkMoveKindCode == "002") ? (
        <div onClick={() => outLinkMove(data?.link)}>
          <Banner
            flex={flexWidth}
            {...props}
            onClick={() => onClickBanner(data.imageNo)}
          >
            <figure>
              {data?.mobileImage ? (
                <>
                  <img
                    className="pc_only"
                    src={data.image}
                    alt={data.title || ''}
                  />
                  <img
                    className="mb_only"
                    src={data.mobileImage}
                    alt={data.title || ''}
                  />
                </>
              ) : (
                <img src={data?.image} alt={data?.title || ''} />
              )}
            </figure>
            {data?.description && (
              <figcaption className="sc_only">{data?.description}</figcaption>
            )}
          </Banner>
        </div>
      ) : (
        <div>
          <Banner
            flex={flexWidth}
            {...props}
            onClick={() => onClickBanner(data.imageNo)}
          >
            <figure>
              {data?.mobileImage ? (
                <>
                  <img
                    className="pc_only"
                    src={data.image}
                    alt={data.title || ''}
                  />
                  <img
                    className="mb_only"
                    src={data.mobileImage}
                    alt={data.title || ''}
                  />
                </>
              ) : (
                <img src={data?.image} alt={data?.title || ''} />
              )}
            </figure>
            {data?.description && (
              <figcaption className="sc_only">{data?.description}</figcaption>
            )}
          </Banner>
        </div>
      )}
    </>
  );
};
