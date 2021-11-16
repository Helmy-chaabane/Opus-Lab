import { FC } from "react";
import { statusOptions, getStatus, Person } from "./data";

interface PersonListProps {
  filtredPerson: Person[];
}

const PersonList: FC<PersonListProps> = ({ filtredPerson }) => {
  return (
    <ul className="main__list">
      {filtredPerson.map((person: Person, index: number) => (
        <li key={index} className="main__list__item ">
          <p>{person.name}</p>
          <span
            style={{
              backgroundColor: statusOptions.find(
                (so) => so.status === person.status
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
