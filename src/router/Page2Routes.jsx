import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    // urlの後ろ(/page2/~)の数値をidに格納
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
