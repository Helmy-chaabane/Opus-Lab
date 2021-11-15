import "./app.scss";

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

function App() {
  return (
    <main className="main">
      <ul className="main__list">
        {peaple.map((person: string) => (
          <li className="main__list__item">
            <p>{person}</p>
            <span>Present</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
