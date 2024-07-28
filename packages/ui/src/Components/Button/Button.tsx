import React from "react";
import { Button as AntButton } from "antd";
import "./Button.scss";

type ButtonProps = {
  id?: any;
  btnTitle?: string;
  btnIcon?: JSX.Element | null;
  btnOnClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  showBtn: boolean;
  classNames?: string;
};

const Button = ({
  btnOnClick = () => {},
  btnIcon = null,
  btnTitle = "",
  showBtn = true,
  disabled = false,
  loading = false,
  classNames = "medium",
}: ButtonProps) => {
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
        <span className="btn-icon">
          {btnIcon && <>{btnIcon}&nbsp;&nbsp;</>}
        </span>
        <span className="btn-title">{btnTitle}</span>
      </>
    </AntButton>
  );
};
export default Button;
