import { useState } from "react";
import { people, AddPerson, Person, Status } from "./data";
import StatusOptions from "./StatusOptions";
import StatusTab from "./StatusTabs";
import PersonList from "./PersonList";
import "./app.scss";

function App() {
  const [persons, setPersons] = useState<Person[]>([]);
  const [filterBy, setFilterBy] = useState<Status>(Status.ALL);

  const addPerson: AddPerson = (status) => {
    if (people.length) {
      setPersons([...persons, { name: people[0], status }]);
      people.shift();
    }
  };

  const filterByStatus: () => Person[] = () => {
    return filterBy ? persons.filter((p) => p.status === filterBy) : persons;
  };

  return (
    <main className="main">
      <h1>OPUS LAB TEST TECH</h1>
      <div className="main__current">
        <span>{people.length} remaining</span>
        <h2>{people[0] || "No more ppl"}</h2>
      </div>
      <StatusOptions addPerson={addPerson} />
      <StatusTab setFilterBy={setFilterBy} filterBy={filterBy} />
      <PersonList filtredPerson={filterByStatus()} />
    </main>
  );
}

export default App;
