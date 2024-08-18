import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";

type LoaderProps = {
  loader: boolean;
}

export default function Loader({ loader }: LoaderProps) {
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


