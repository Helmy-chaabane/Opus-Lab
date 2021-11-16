import { FC } from "react";
import { statusOptions, getStatus, AddPerson, Status } from "./data";

interface StatusOptionsProps {
  addPerson: AddPerson;
}

const StatusOptions: FC<StatusOptionsProps> = ({ addPerson }) => {
  return (
    <div className="main__statusOptions">
      {statusOptions
        .filter((st) => st.status !== Status.ALL)
        .map((st, index: number) => (
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
