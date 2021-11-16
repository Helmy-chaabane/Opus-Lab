import { Dispatch, FC, SetStateAction } from "react";
import { statusOptions, getStatus, Status } from "./data";

interface StatusTabProps {
  setFilterBy: Dispatch<SetStateAction<Status>>;
  filterBy: Status;
}

const StatusTab: FC<StatusTabProps> = ({ setFilterBy, filterBy }) => {
  return (
    <div className="main__tabs">
      {statusOptions.map((so, index) => (
        <div
          key={index}
          onClick={() => setFilterBy(so.status)}
          className={`main__tabs__item ${
            filterBy === so.status && "main__tabs__item__active"
          }`}
        >
          {getStatus(so.status)}
        </div>
      ))}
    </div>
  );
};

export default StatusTab;
