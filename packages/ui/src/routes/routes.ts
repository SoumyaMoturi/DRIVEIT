import { Layout } from "antd";

export interface IRoute {
  path: string | string[];
  component: React.ComponentClass<any, any> | React.FunctionComponent<any>;
}

const routes: IRoute[] = [{ path: "/", component: Layout }];

export default routes;
