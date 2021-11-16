import { AddPerson, statusOptions, getStatus } from "./data";
import { FC } from "react";

interface StatusOptionsProps {
  addPerson: AddPerson;
}

const StatusOptions: FC<StatusOptionsProps> = ({ addPerson }) => {
  return (
    <div className="main__statusOptions">
      {statusOptions.map((st, index: number) => (
        <div
          key={index}
          className="main__statusOptions__option"
          style={{ backgroundColor: st.backgoundColor }}
          onClick={() => addPerson(st.status)}
        >
          {getStatus(st.status)}
        </div>
      ))}
    </div>
  );
};

export default StatusOptions;
