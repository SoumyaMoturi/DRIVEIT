import "./CompanyOverview.scss";
import CompanyOverviewImg from "../../assets/icons/company-overview.png";
import { Button } from "antd";
import AboutIcon from "../../assets/icons/aboutIcon.png";
const CompanyOverview = () => {
  return (
    <div className="company-overview ">
      <section className="company-overview-image">
        <img src={CompanyOverviewImg} alt="image" />
      </section>
      <section className="company-overview-text">
        <div className="small-text">
          <div>
            <img src={AboutIcon} />
          </div>
          <p className=""> About Us</p>
        </div>
        <h2>Our Company Overview</h2>
        <p className="description-text">
          Carlio brand is one of the most reliable motor oil manufacturers,
          which is engaged in the production of high quality products with a
          history of more than decades in the industry. In order to get more
          information about other aspects and products of the Carlio brand, you
          can use the following buttons:
        </p>
        <div className="buttons">
          <Button className="company custom-ant-tertiary-btn">Company</Button>
          <Button className="products custom-ant-tertiary-btn">Products</Button>
          <Button className="our-team custom-ant-tertiary-btn">Our Team</Button>
        </div>
        <p className="description-text">
          To improve the performance of the Carlio industries, we use the latest
          technology to produce the highest quality engine oil and the best user
          experience. Our team is dedicated to ensuring that you get the best
          performance and protection for your vehicle.
        </p>
        <Button className="learn-more">Learn More</Button>
      </section>
    </div>
  );
};

export default CompanyOverview;
