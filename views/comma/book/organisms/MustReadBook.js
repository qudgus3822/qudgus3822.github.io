import { useCommaAPI, useCommaAPIGet } from "net/hooks/comma";
import { BookListSection } from "components/sections";
export const MustReadBook = () => {

  const { data, error } = useCommaAPIGet('/api/Main/GetDisplayContent/54');
  return (
    <>
      {data && (
        <BookListSection
          marginTop="30"
          mbMarginTop="30"
          title="필독 도서"
          dataLink="/store/product-detail"
          data={data}
          MoveMainTabPage={'{"func": "MoveMainTabPage","params": [{"Menu": "' + "Store" + '","Index": "' + "3" + '"}]}'}></BookListSection>)
      }
    </>
  );
};