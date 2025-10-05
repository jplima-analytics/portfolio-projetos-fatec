import React from "react";
import Sobre from "../pages/Sobre";
import Habilidades from "../pages/Habilidades";
import Projeto1 from "../pages/Projeto1";
import Projeto2 from "../pages/Projeto2";
import Projeto3 from "../pages/Projeto3";
import Projeto4 from "../pages/Projeto4";
import Projeto5 from "../pages/Projeto5";
import Projeto6 from "../pages/Projeto6";

const Content = ({ selected }) => {
  return (
    <div style={{ flex: 1, overflowY: "auto" }}>
      {selected === "Sobre" && <Sobre />}
      {selected === "Habilidades" && <Habilidades />}
      {selected === "Projeto 1 - 1º semestre" && <Projeto1 />}
      {selected === "Projeto 2 - 2º semestre" && <Projeto2 />}
      {selected === "Projeto 3 - 3º semestre" && <Projeto3 />}
      {selected === "Projeto 4 - 4º semestre" && <Projeto4 />}
      {selected === "Projeto 5 - 5º semestre" && <Projeto5 />}
      {selected === "Projeto 6 - 6º semestre" && <Projeto6 />}
    </div>
  );
};

export default Content;
