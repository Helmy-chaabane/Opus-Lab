import {
  Dispatch,
  SetStateAction,
  ReactNode,
  createContext,
  useState,
} from "react";
import { Person } from "../data";

// interface Todo {
//   userId: number;
//   title: string;
//   completed: boolean;
// }

const PersonContext = createContext<{
  persons: Person[];
  setPersons: Dispatch<SetStateAction<Person[]>>;
}>({
  persons: [],
  setPersons: () => {},
});

const PersonProvider = ({ children }: { children: ReactNode }) => {
  const [persons, setPersons] = useState<Person[]>([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/10")
  //     .then((res) => res.json())
  //     .then((todo: Person[]) => setPersons(todo));
  // }, []);

  return (
    <PersonContext.Provider value={{ persons, setPersons }}>
      {children}
    </PersonContext.Provider>
  );
};

export { PersonContext };

export default PersonProvider;
