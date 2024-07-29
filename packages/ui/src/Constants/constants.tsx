import D_LOGO from "../assets/icons/D.png";
import RIVEIT_LOGO from "../assets/icons/RIVEIT.png";

export const ANT_THEME_CONFIG: any = {
  colorPrimary: "#FFD700",
  colorTextSecondary: "#FFFFFF",
  colorText: "#081630",
  colorTextHover: "#FFD700",
  colorMenuItem: "#FFFFFF",
};

export const COMPONENT_THEME = {
  Menu: {
    colorBgContainer: "#081630",
    innerHeight: "18",
    algorithm: true,
  },
};

export const MenuItems = [
  {
    label: (
      <div
        className="logo"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "18px",
        }}
      >
        <img className="D" alt="D" src={D_LOGO} />
        <img className="RIVEIT" alt="RIVEIT" src={RIVEIT_LOGO} />
      </div>
    ),
    key: "logo",
    path: "/",
  },
  { label: "Self Drives", key: "selfDrives", path: "/self-drives" },
  { label: "Cabs", key: "cabs", path: "/cabs" },
  { label: "Luxury Cars", key: "luxuryCars", path: "/luxury-cars" },
  { label: "Buses", key: "buses", path: "/buses" },
  { label: "Contact Us", key: "contact", path: "/contact" },
  { label: "About Us", key: "about", path: "/about" },
];
