import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { ANT_THEME_CONFIG, COMPONENT_THEME } from "./Constants/constants";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PageLayout from "./layout";

// const clientId = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID || "";
// const clientSecret = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET || "";

const clientId = "";
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
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
