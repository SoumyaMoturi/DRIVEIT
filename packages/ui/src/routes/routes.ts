import Signup from "../Pages/auth/signup";
import ContactPage from "../Pages/ContactPage";
import MainPage from "../Pages/MainPage/Main/Main";

export interface IRoute {
  path: string | string[] | undefined;
  component: React.ComponentClass<any, any> | React.FunctionComponent<any>;
}

const routes: IRoute[] = [
  { path: "/", component: MainPage },
  { path: "/signup", component: Signup },
  { path: "/contact", component: ContactPage },
];

export default routes;
