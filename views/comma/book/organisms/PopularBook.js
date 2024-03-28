import { useCommaAPIGet } from "net/hooks/comma";
import { BookListSection } from "components/sections";
export const PopularBook = () => {

  const { data, error } = useCommaAPIGet('/api/Main/GetDisplayContent/55');
  return (
    <>
      {data && (
        <BookListSection
          marginTop="30"
          mbMarginTop="30"
          title="우리 학교에서 많이 본 도서"
          dataLink="/store/product-detail"
          data={data}
          MoveMainTabPage={'{"func": "MoveMainTabPage","params": [{"Menu": "' + "Store" + '","Index": "' + "3" + '"}]}'}></BookListSection>)
      }
    </>
  );
};