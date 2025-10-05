import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Sobre from "./pages/Sobre"

function App() {
  const [selected, setSelected] = useState("Sobre");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar selected={selected} setSelected={setSelected} />
      <Content selected={selected} />
    </div>
  );
}

export default App;
