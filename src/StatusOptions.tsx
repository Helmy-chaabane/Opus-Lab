import { FC } from "react";
import { statusOptions, getStatus, AddPerson, Status } from "./data";

interface StatusOptionsProps {
  addPerson: AddPerson;
}

const StatusOptions: FC<StatusOptionsProps> = ({ addPerson }) => {
  return (
    <div className="main__statusOptions">
      {statusOptions
        .filter((so) => so.status !== Status.ALL)
        .map((so, index: number) => (
          <div
            key={index}
            className="main__statusOptions__option"
            style={{ backgroundColor: so.backgoundColor }}
            onClick={() => addPerson(so.status)}
          >
            {getStatus(so.status)}
          </div>
        ))}
    </div>
  );
};

export default StatusOptions;
