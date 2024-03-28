import { useLibraryBookMap } from "net/hooks";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const SelectBox = styled.div`
    position: relative;
    box-sizing: border-box;
    margin-top: 22px;

    ${({ theme }) =>
    theme.media.under_tablet(`
        margin-top:20px;
  `)}

`;
const Wrap = styled.div`
    font-size: 16px;
    text-align: center;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 280px;
    height: 45px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 9px;
    background: #fff;
    cursor: pointer;

    ${({ theme }) =>
    theme.media.under_tablet(`
        width: 100%;
  `)}
`;
const Img = styled.img`
    ${(props) => (props.rotate ? "transform: rotate(180deg);":"")}
    width: 18px;
    height: 18px;
`;
const Label = styled.label`
    font-size: 16px;
    text-align: center;
`;
const SelectWrap = styled.div`
    position: absolute;
    top: 100%;
    border-radius: 4px;
    box-shadow: 0px 3px 6px 0 rgb(0 0 0 / 15%);
    margin-top: 4px;
    width: 100%;
    z-index: 1;
    box-sizing: border-box;
`;
const SelectOptions = styled.ul`
    list-style: none;
    overflow-y: auto;
    position: relative;
    max-height: ${(props) => (props.show ? "316px" : "0")};
    padding: ${(props) => (props.show ? "8px 0" : "0")};;
    border-radius: 4px;
    background: #fff;
    color: #333;
    box-sizing: border-box;

    ${({ theme }) =>
    theme.media.under_tablet(`
        width: 100%;
  `)}
    
`;
const Option = styled.li`
    font-size: 15px;
    padding: 14px 18px;
    cursor: pointer;
    &:hover {
    color: #0178D3;
    }
`;

export const Category = ({categoryName}) => {
    console.log("cate"+categoryName);
    const router = useRouter();
    // const { data, error } = useLibraryBookMap();
    const data = require('/public/data/counseling/list/list.json').Category;    
    const [showOptions, setShowOptions] = useState(false);
    const [currentValue, setCurrentValue] = useState(categoryName);
    
    const handleOptionClick = (e) => {
        // 이름 변경(어차피 페이지 이동하니깐 필요 없을 듯)
        // const { innerText } = e.target;
        // setCurrentValue(innerText);

        // 해당 링크로 이동
        //location.href = `/counseling/list?categoryno=${e.target.value}`;
    };

    return (
        <SelectBox>
        {/* <SelectBox onClick={() => setShowOptions((prev) => !prev)}> */}
            <Wrap>
                <Label>{currentValue}</Label>
                <Img rotate={showOptions} src="/images/arrow_simple_select.svg"/>
            </Wrap>
            <SelectWrap>
                <SelectOptions show={showOptions}>
                    {data?.map(item => (
                    <Option onClick={handleOptionClick} value={item.id}>{item.title}</Option>
                    ))}
                </SelectOptions>

            </SelectWrap>
        </SelectBox>
    );
}