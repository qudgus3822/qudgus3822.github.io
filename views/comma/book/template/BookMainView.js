import { useEffect, useState } from 'react';
import { MainLayout } from '../../../../components/layouts';
import { useMainBookList, useMyInfo } from 'net/hooks';
import { FirstMonthFree, MobileWelcome } from '../../../home/components';

import {
    MainBibleBanners,
    MainEventBanner,
    MainRecommendedClasses,
    MainRecommendedReviews,
    MostReadBooks,
    RecommendedAudioBooks
} from '../../../home/organisms';
import { RecommendedChannels } from '../../../../organisms/sections';

// 추가 & 수정된 파일들
// 파일명에 커서 올리면 파일 설명을 볼 수 있습니다._박여울
import { MainIcons, MainSlider, TodayRecommendedBooks } from '../../../home/components';
import { MustReadBook } from '../organisms/MustReadBook';
import { NewBook } from '../organisms/NewBook';
import { PopularBook } from '../organisms/PopularBook';
import PopularField from '../organisms/PopularField';
import CommaCounselingFieldList from 'components/comma/CommaCounselingFieldList';


export default function BookMainView() {

    const [monthFree, setMonthFree] = useState('none');


    const responseUser = useMyInfo();

    useEffect(() => {
        if (responseUser?.data?.membership?.freeSubscriptionUseYN !== 'Y' && responseUser?.data?.membership?.subscriptionYN === 'N') {
            setMonthFree('block');
        }
    }, [responseUser.data]);

    const [viewInisis, setViewInisis] = useState('flex');
    const test = () => {
        console.log(Array.from(document.querySelectorAll('img')).filter(x => x.src.includes('https://dplusmediacdn-ms-file.azureedge.net')));
    }

    return (
        <MainLayout>
            {/* 메인 슬라이드 */}
            <MainSlider />

            <MustReadBook />
            <NewBook />
            <PopularBook />
            <PopularField></PopularField>
            <MainBibleBanners />
            <MainRecommendedReviews></MainRecommendedReviews>
            <CommaCounselingFieldList></CommaCounselingFieldList>
        </MainLayout>
    )
}