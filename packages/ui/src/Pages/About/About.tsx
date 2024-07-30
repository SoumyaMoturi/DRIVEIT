import CompanyOverview from "./CompanyOverview";
import Features from "./Features";
import ImageHeader from "./ImageHeader";

const App = () => {
  return (
    <div className="about">
      <ImageHeader />
      <CompanyOverview />
      <Features />
    </div>
  );
};

export default App;
