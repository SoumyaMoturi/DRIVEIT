import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import "./ImageHeader.scss";

const ImageHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1>What Is Carlio And How Valid Is It?</h1>
      <p>
        The meaning of production in Carlio is the creation, development, and
        the path to progress, and the starting point to achieve the goals that
        we all have the Petroforce brand, with over 20 years of experience in
        the oil and petrochemical industry.
      </p>
      <div className="buttons">
        <Button
          btnOnClick={() => console.log("buy now")}
          btnTitle="Buy Products"
          showBtn={false}
          classNames="custom-ant-primary-btn"
        />
        <Button
          btnOnClick={() => {
            navigate("/contact");
          }}
          btnTitle="Contact Us"
          showBtn={false}
          classNames="custom-ant-secondary-naked-btn"
        />
      </div>
    </header>
  );
};

export default ImageHeader;
