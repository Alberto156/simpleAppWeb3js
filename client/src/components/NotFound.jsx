import image404 from "../assets/404.png";
import { Image } from "react-bootstrap";

const NotFound = () => {
  return (
    <Image src={image404} style={{ height: "100vh", width: "100vw" }} fluid />
  );
};

export default NotFound;
