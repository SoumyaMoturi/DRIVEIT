import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ANT_THEME_CONFIG, COMPONENT_THEME } from "./Constants/constants";
import routes from "./routes/routes";
import Layout from "./layout";

function App() {
  return (
    <div className="drive-it-application">
      <ConfigProvider
        theme={{
          token: ANT_THEME_CONFIG,
          components: COMPONENT_THEME,
        }}
      >
        <Layout />
        <BrowserRouter>
          <Routes>
            {routes.map((item: any, i) => (
              <Route path={item.path} element={<item.component />} key={i} />
            ))}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </div>
  );
}

export default App;
