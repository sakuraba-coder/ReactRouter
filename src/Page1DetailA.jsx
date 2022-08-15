import { useHistory, useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  // useLocationのstateにより受け取る
  const { state } = useLocation();
  //ブラウザの遷移はuseHistoryを使う
  const history = useHistory();

  // ブラウザの戻る機能のようなもの
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
