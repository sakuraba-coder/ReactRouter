import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  // 1から100までの無意味な配列
  const arr = [...Array(100).keys()];

  // ページ遷移はuseHistoryを使う
  const history = useHistory();
  const onClickDetailA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>Page1です</h1>
      {/* pathの正確な書き方 */}
      {/* stateに値arrを設定してpathnameに渡す */}
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailA">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
