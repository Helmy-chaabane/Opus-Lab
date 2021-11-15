import { Status, AddPerson } from "./App";
import { FC } from "react";

interface StatusOptionsProps {
  addPerson: AddPerson;
}

const StatusOptions: FC<StatusOptionsProps> = ({ addPerson }) => {
  return (
    <div className="main__statusOptions">
      <div className="main__statusOptions__option ">Present</div>
      <div className="main__statusOptions__option ">Abscent</div>
      <div className="main__statusOptions__option ">Excusé</div>
    </div>
  );
};

export default StatusOptions;
