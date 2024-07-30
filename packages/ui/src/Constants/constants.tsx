import { CarCardProps } from "../Pages/CarListing";
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

export const carsData: CarCardProps[] = [
  {
    model: "Jaguar XE | P250",
    reviews: "4.8",
    passengers: "4",
    price: "₹1,800",
    image:
      "https://wallup.net/wp-content/uploads/2019/09/841798-lamborghini-aventador-super-veloce-cars-supercars-red.jpg",
    rating: "4.8",
    fuel: "Petrol",
    ac: "Air Conditioning",
    doors: "2 doors",
  },
  {
    model: "Audi R8",
    reviews: "4.6",
    passengers: "2",
    price: "₹2,100",
    image:
      "https://www.pixelstalk.net/wp-content/uploads/2016/06/Cool-Car-Wallpapers-HD.jpg",
    rating: "4.8",
    fuel: "Petrol",
    ac: "Air Conditioning",
    doors: "2 doors",
  },
  {
    model: "Audi R8",
    reviews: "4.6",
    passengers: "2",
    price: "₹2,100",
    image:
      "https://2.bp.blogspot.com/-T_u7AixkhT8/TuXA0QKoMpI/AAAAAAAAFas/BDrVxQK_BLs/s1920/Audi-cars-wallpaper.JPG",
    rating: "4.8",
    fuel: "Petrol",
    ac: "Air Conditioning",
    doors: "2 doors",
  },
  {
    model: "Audi R8",
    reviews: "4.6",
    passengers: "2",
    price: "₹2,100",
    image: "https://wallpapercave.com/wp/wp8030431.jpg",
    rating: "4.8",
    fuel: "Petrol",
    ac: "Air Conditioning",
    doors: "2 doors",
  },
  {
    model: "Audi R8",
    reviews: "4.6",
    passengers: "2",
    price: "₹2,100",
    image: "https://wallpapercave.com/wp/wp8030431.jpg",
    rating: "4.8",
    fuel: "Petrol",
    ac: "Air Conditioning",
    doors: "2 doors",
  },
  {
    model: "Audi R8",
    reviews: "4.6",
    passengers: "2",
    price: "₹2,100",
    image: "https://wallpapercave.com/wp/wp8030431.jpg",
    rating: "4.8",
    fuel: "Petrol",
    ac: "Air Conditioning",
    doors: "2 doors",
  },
];
