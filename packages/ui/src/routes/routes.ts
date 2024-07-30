import About from "../Pages/About/About";
import Signup from "../Pages/auth/signup";
import CarList from "../Pages/CarListing";
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
  { path: "/about", component: About },
  { path: "/cars-list", component: CarList },
];

export default routes;
