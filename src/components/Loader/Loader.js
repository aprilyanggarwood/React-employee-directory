import Loader from "react-loader-spinner";
import "./Loader.css";
export default () => {
  return (
    <Loader
      id="loader"
      type="BallTriangle"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
      style={{ position: "fixed", top: "40vh", left: "45vw" }} //3 secs
    />
  );
};
