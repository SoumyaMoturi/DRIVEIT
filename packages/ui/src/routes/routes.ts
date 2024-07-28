import { Layout } from "antd";
import Signup from "../Pages/auth/signup";

export interface IRoute {
  path: string | string[];
  component: React.ComponentClass<any, any> | React.FunctionComponent<any>;
}

const routes: IRoute[] = [
  { path: "/", component: Layout },
  { path: "/signup", component: Signup },
];

export default routes;
