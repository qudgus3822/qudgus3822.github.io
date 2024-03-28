import { useEffect, useLayoutEffect } from "react"

export default function CommaMainAnnouncement({ data }) {

    return (
        <>
            <ul className="category-list">
                <li className="list-item">
                    공지사항 테스트입니다.
                </li>
                <li className="list-item">
                    두번째 공지사항 테스트입니다.
                </li>
            </ul>
        </>
    )

}