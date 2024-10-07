import "./App.css";
import Title from "./Title.jsx";
import Entry from "./Entry.jsx";
import Info from "./Info.jsx";
import { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("ditto");
  const [data, setData] = useState({});
  // use square brackets for constant variable
  useEffect(() => {
    const pokemon = encodeURIComponent(name.toLowerCase());
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(`${e}`));
  }, [name]);

  return (
    <div className="App">
      <Title name="Poke Finder" />
      <Entry action={setName} />
      <Info name={name} data={data} />
    </div>
  );
}
