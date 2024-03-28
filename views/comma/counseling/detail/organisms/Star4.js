import React from 'react';
import styled from 'styled-components';

import activeHttpBasicAuth from 'helpers/activeHttpBasicAuth';
import useUser from 'hooks/useUser';

type Star4Props = {};

export const Star4= ({}: Star4Props) => {
  //useUser();

  
  return (
    <StarRateWrap>      
      <span className='star_icon'>
        <svg xmlns='http://www.w3.org/2000/svg'  height='20' viewBox='0 0 14 13'>
            <path
                id='star'
                d='M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z'
                transform='translate(-2 -2)'
                fill='skyblue'
            />
        </svg>
      </span>
      <span className='star_icon'>
        <svg xmlns='http://www.w3.org/2000/svg'  height='20' viewBox='0 0 14 13'>
            <path
                id='star'
                d='M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z'
                transform='translate(-2 -2)'
                fill='skyblue'
            />
        </svg>
      </span>
      <span className='star_icon'>
        <svg xmlns='http://www.w3.org/2000/svg'  height='20' viewBox='0 0 14 13'>
            <path
                id='star'
                d='M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z'
                transform='translate(-2 -2)'
                fill='skyblue'
            />
        </svg>
      </span>
      <span className='star_icon'>
        <svg xmlns='http://www.w3.org/2000/svg'  height='20' viewBox='0 0 14 13'>
            <path
                id='star'
                d='M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z'
                transform='translate(-2 -2)'
                fill='skyblue'
            />
        </svg>
      </span>
      <span className='star_icon'>
        <svg xmlns='http://www.w3.org/2000/svg'  height='20' viewBox='0 0 14 13'>
            <path
                id='star'
                d='M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z'
                transform='translate(-2 -2)'
                fill='lightgray'
            />
        </svg>
      </span>
    </StarRateWrap>
  );
}


const StarRateWrap = styled.div`
        display: flex;
        align-items: center;
        width: 100%;
        margin: 10px 0 0 15px;
        .star_icon {
          display: inline-flex;
          margin-right: 5px;
        }
      
`
