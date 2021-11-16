import { FC } from "react";
import { Person, Status, statusOptions, getStatus } from "./data";

interface PersonListProps {
  persons: Person[];
  filterBy: Status;
}

const PersonList: FC<PersonListProps> = ({ persons, filterBy }) => {
  const filterByStatus: () => Person[] = () => {
    return filterBy ? persons.filter((p) => p.status === filterBy) : persons;
  };

  return (
    <ul className="main__list">
      {filterByStatus().map((person: Person, index: number) => (
        <li key={index} className="main__list__item">
          <p>{person.name}</p>
          <span
            style={{
              backgroundColor: statusOptions.find(
                (st) => st.status === person.status
              )?.backgoundColor,
            }}
          >
            {getStatus(person.status)}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
