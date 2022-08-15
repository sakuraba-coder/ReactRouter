import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2です</h1>
      {/* URLパラメータ100を取得して表示 */}
      <Link to="/page2/100">URL Parameter</Link>
      <br />
      {/* クエリパラメータhogehogeを取得して表示 */}
      <Link to="/page2/100?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
