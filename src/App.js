import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import React from "react";
import { Router } from "./router/Router";

export const App = () => {
  return (
    // ルーティングするページは全てBrowserRouterタグで囲む
    <BrowserRouter>
      {/* リンクを表すにはLinkタグ、URLはtoで指定 */}
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
};
