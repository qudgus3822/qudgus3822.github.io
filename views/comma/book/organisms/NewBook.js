import { useCommaAPIGet } from "net/hooks/comma";
import { BookListSection } from "components/sections";
export const NewBook = () => {

  const { data, error } = useCommaAPIGet('/api/Main/GetDisplayContent/56');
  return (
    <>
      {data && (
        <BookListSection
          marginTop="30"
          mbMarginTop="30"
          title="신규 도서"
          dataLink="/store/product-detail"
          data={data}
          MoveMainTabPage={'{"func": "MoveMainTabPage","params": [{"Menu": "' + "Store" + '","Index": "' + "3" + '"}]}'}></BookListSection>)
      }
    </>
  );
};