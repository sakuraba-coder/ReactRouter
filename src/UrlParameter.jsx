import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  // /:idで指定されている値を取得する
  const { id } = useParams();
  // 様々なパラメータ情報を取得する
  const { search } = useLocation();
  // クエリパラメータを簡単に扱える
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameterです</h1>
      <p>パラメータは {id} です</p>
      {/* クエリパラメータの取得 
      ~?name=hogehogeからhogehogeを取得する */}
      <p>パラメータは {query.get("name")} です</p>
    </div>
  );
};
