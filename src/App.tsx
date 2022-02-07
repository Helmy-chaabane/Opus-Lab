import { useContext, useState } from "react";
import { PersonContext } from "./context/PersonContext";
import { people, AddPerson, Person, Status } from "./data";
import StatusOptions from "./StatusOptions";
import StatusTab from "./StatusTabs";
import PersonList from "./PersonList";
import Accordion from "./components/accordion/Accordion";
import "./app.scss";
import Model from "./components/model/model";

// import useCostumHookFun from "./hooks/CostumHookFun";

function App() {
  const [show, setShow] = useState<boolean>(false);
  // const { persons, setPersons } = useContext(PersonContext);
  // const [filterBy, setFilterBy] = useState<Status>(Status.ALL);
  //const [data, setData] = useCostumHookFun("/data.json");

  // const addPerson: AddPerson = (status) => {
  //   if (people.length) {
  //     setPersons([...persons, { name: people[0], status }]);
  //     people.shift();
  //   }
  // };

  // const filterByStatus: () => Person[] = () => {
  //   return filterBy ? persons.filter((p) => p.status === filterBy) : persons;
  // };

  return (
    <main className="main">
      {/* {  <h1>OPUS LAB TEST TECH</h1>
      <div className="main__current">
        <span>{people.length} remaining</span>
        <h2>{people[0] || "No more ppl"}</h2>
      </div>
      <StatusOptions addPerson={addPerson} />
      <StatusTab setFilterBy={setFilterBy} filterBy={filterBy} />
      <PersonList filtredPerson={filterByStatus()} />} */}

      {/* <Accordion /> */}
      <button onClick={() => setShow(!show)}>show</button>
      <Model show={show} setShow={setShow} />
    </main>
  );
}

export default App;
