import { Card, Col } from "antd";
import { PhoneFilled, MailFilled, EnvironmentFilled } from "@ant-design/icons";

const ContactInfo = () => (
  <Card className="contact-info" bordered={false}>
    <span className="contact-heading">
      <h4 className="title">
        Contact Information
        <span className="tagline">Say something to start a live chat!</span>
      </h4>
    </span>
    <ul className="details">
      <li>
        <PhoneFilled />
        <span className="item-content phone-number">+102 3456 789</span>
      </li>
      <li>
        <MailFilled />
        <span className="item-content mail-id">demo@gmail.com</span>
      </li>
      <li>
        <EnvironmentFilled />
        <div className="item-content address">
          123 Dartmouth Street Boston, Massachusetts 02156 United States
        </div>
      </li>
    </ul>
    <div className="circle-1"></div>

    <p className="social-media-icons"></p>
    <div className="circle-2"></div>
  </Card>
);

export default ContactInfo;
