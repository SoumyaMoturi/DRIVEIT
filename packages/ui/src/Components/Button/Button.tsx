import React from "react";
import { Button as AntButton } from "antd";
import "./Button.scss";

const Button = ({
  btnOnClick = () => {},
  btnIcon = null,
  btnTitle = "",
  showBtn = true,
  disabled = false,
  loading = false,
  classNames = "medium",
}) => {
  return (
    <AntButton
      onClick={btnOnClick}
      // shape={btnShape}
      className={classNames}
      type="primary"
      hidden={!showBtn}
      disabled={disabled}
      loading={loading}
    >
      <>
        <span> {btnIcon && <>{btnIcon}&nbsp;&nbsp;</>}</span>
        <span>{btnTitle}</span>
      </>
    </AntButton>
  );
};
export default Button;
