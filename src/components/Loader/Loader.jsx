import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader({ loader }) {
  return (
    <ThreeDots
      visible={loader}
      height="20"
      width="60"
      color="#007BFF"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
    />
  );
}


