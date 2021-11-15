import { useState } from "react";
import "./app.scss";
import StatusOptions from "./StatusOptions";

const peaple = [
  "Franquelin Benjamin",
  "Dunord Caroline",
  "Reacher Jack",
  "Wilson Wade",
  "Pool Francis",
  "Cesar Alex",
  "Ten Ben",
  "Guetta David",
  "Kennedy John",
  "Robert Julia",
];

export enum Status {
  ABSCENT,
  PRENSEN,
  EXCUSE,
}
interface Person {
  name: string;
  status: Status;
}
type AddPerson = (status: Status) => void;

function App() {
  const [persons, setPersons] = useState<Person[]>([]);
  const [index, setIndex] = useState(0);

  const addPerson: AddPerson = (status) => {
    setPersons([...persons, { name: peaple[index], status }]);
    setIndex(index + 1);
  };

  return (
    <main className="main">
      <h1>OPUS LAB TEST TECH</h1>
      <StatusOptions addPerson={addPerson} />
      <ul className="main__list">
        {peaple.map((person: string) => (
          <li className="main__list__item">
            <p>{person}</p>
            <span>Absence</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
