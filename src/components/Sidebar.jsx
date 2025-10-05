import { useState } from "react";
import styled from "styled-components";

const SidebarContainer = styled.aside`
  width: 250px;
  background: linear-gradient(180deg, #0d47a1, #000);
  color: white;
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    position: fixed;
    height: 100%;
    left: ${({ open }) => (open ? "0" : "-250px")};
    transition: left 0.3s ease;
    z-index: 1000;
  }
`;

const Profile = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.button`
  background: ${({ active }) => (active ? "rgba(255,255,255,0.2)" : "transparent")};
  border: none;
  color: white;
  text-align: left;
  padding: 10px;
  margin: 2px 0;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: rgba(255,255,255,0.1);
  }
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 5px;
`;

const Hamburger = styled.button`
  display: none;
  position: fixed;
  top: 15px;
  left: 15px;
  background: #0d47a1;
  color: white;
  border: none;
  padding: 10px;
  font-size: 20px;
  z-index: 1001;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Sidebar({ selected, setSelected }) {
  const [openProjects, setOpenProjects] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const projetos = [
    "Projeto 1 - 1º semestre",
    "Projeto 2 - 2º semestre",
    "Projeto 3 - 3º semestre",
    "Projeto 4 - 4º semestre",
    "Projeto 5 - 5º semestre",
    "Projeto 6 - 6º semestre",
  ];

  return (
    <>
      <Hamburger onClick={() => setOpenMenu(!openMenu)}>☰</Hamburger>

      <SidebarContainer open={openMenu}>
        <Profile>
          <ProfileImage src="https://lh3.googleusercontent.com/pw/AP1GczPggJRWkN_r10wPS1lIbLYV9WwcpbxpUYO3biDzffCNE9ZrmqJDgsNuQMFr3QutQvZ3mgcDuiFMy40KENpZWefuGNodltg-3T8WpBn0rwTynAagD_ffLxmyLcC72XtTvUv62OQiV1FeKggWoCw2LeLo=w911-h911-s-no-gm?authuser=0" alt="Foto" />
          <h2>João Pedro de Lima e Silva</h2>
          <br />
          <h3>Analista de automação de processos</h3>
        </Profile>

        <Menu>
          <MenuItem active={selected === "Sobre"} onClick={() => setSelected("Sobre")}>
            Sobre
          </MenuItem>
          <MenuItem active={selected === "Habilidades"} onClick={() => setSelected("Habilidades")}>
            Habilidades
          </MenuItem>
          <MenuItem onClick={() => setOpenProjects(!openProjects)}>
            Projetos {openProjects ? "▲" : "▼"}
          </MenuItem>

          {openProjects && (
            <SubMenu>
              {projetos.map((proj, i) => (
                <MenuItem
                  key={i}
                  active={selected === proj}
                  onClick={() => setSelected(proj)}
                >
                  {proj}
                </MenuItem>
              ))}
            </SubMenu>
          )}
        </Menu>
      </SidebarContainer>
    </>
  );
}
