import { Dispatch, FC, SetStateAction } from "react";
import { statusOptions, getStatus, Status } from "./data";

interface StatusTabProps {
  setFilterBy: Dispatch<SetStateAction<Status>>;
  filterBy: Status;
}

const StatusTab: FC<StatusTabProps> = ({ setFilterBy, filterBy }) => {
  return (
    <div className="main__tabs">
      {statusOptions.map((st, index) => (
        <div
          key={index}
          onClick={() => setFilterBy(st.status)}
          className={`main__tabs__item ${
            filterBy === st.status && "main__tabs__item__active"
          }`}
        >
          {getStatus(st.status)}
        </div>
      ))}
    </div>
  );
};

export default StatusTab;
