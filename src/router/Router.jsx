import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page404 } from "../Page404";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      {/* 指定されたページ遷移はRouteタグで行う */}
      {/* 完全一致のためにexactを付与する */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          // switch文の中で、配列を呼び出しループする
          <Switch>
            {/* 
            before:
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route path={`${url}/detailA`}>
              <Page1DetailA />
            </Route>
            <Route path={`${url}/detailB`}>
              <Page1DetailB />
            </Route>
            */}
            {/* map関数でpage1Routes配列を一つ取り出し、
            route変数に渡す */}
            {/* keyはどの要素が変更、追加もしくは削除されたのかを 
            React が識別するのに役立つ */}
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />

      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      ></Route>
      {/* 一番下に書く */}
      {/* どれにも一致しないアドレスは*で表す */}
      <Route path="*">
        {/* 404ページの表示 */}
        <Page404 />
      </Route>
    </Switch>
  );
};
