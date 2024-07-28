import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ANT_THEME_CONFIG, COMPONENT_THEME } from "./Constants/constants";
import routes from "./routes/routes";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PageLayout from "./layout";

const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID || "";
const clientSecret = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET || "";

function App() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={clientId}>
        <div className="drive-it-application">
          <ConfigProvider
            theme={{
              token: ANT_THEME_CONFIG,
              components: COMPONENT_THEME,
            }}
          >
            <PageLayout />
          </ConfigProvider>
        </div>

        <Routes>
          {routes.map((item: any, i) => (
            <Route path={item.path} element={<item.component />} key={i} />
          ))}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
