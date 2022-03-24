import { FC, Dispatch, SetStateAction, useState } from "react";
import "./model.scss";

interface ModelProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const closeAnimation = "close 0.4s forwards normal";
const openAnimation = "show 0.4s forwards normal";

const Model: FC<ModelProps> = ({ show, setShow }) => {
  const [animation, setAnimation] = useState(openAnimation);

  const closeModel = () => {
    setAnimation(closeAnimation);
    setTimeout(() => {
      setShow(!show);
      setAnimation(openAnimation);
    }, 400);
  };

  return show ? (
    <div className="model" style={{ animation }}>
      <span className="model__icon" onClick={closeModel}>
        X
      </span>

      <i
        className="icon icon-check"
        style={{
          fontSize: "30rem",
          color: "red",
          width: "2rem",
          height: "2rem",
        }}
      ></i>
    </div>
  ) : null;
};

export default Model;
