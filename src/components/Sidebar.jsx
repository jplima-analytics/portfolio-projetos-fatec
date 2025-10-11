import { useState } from "react";
import styled from "styled-components";

// Componente Overlay (mantido e essencial para mobile)
const Overlay = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); 
    z-index: 999; 
    backdrop-filter: blur(2px); 
  }
`;

const SidebarContainer = styled.aside`
  width: 250px;
  background: linear-gradient(180deg, #0d47a1, #000);
  color: white;
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Garante que o menu principal seja rolável em mobile */

  @media (max-width: 768px) {
    position: fixed;
    height: 100vh;
    left: ${({ open }) => (open ? "0" : "-250px")};
    transition: left 0.3s ease;
    z-index: 1000;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  }
`;

// ************ AJUSTE 1: Responsividade do Perfil ************
const Profile = styled.div`
  text-align: center;
  margin-bottom: 30px;
  padding-top: 50px; /* Espaço para o Hamburger quando o menu abre em mobile */
  
  @media (max-width: 768px) {
    padding-top: 10px; /* Reduz o padding interno quando o menu está aberto */
  }

  h2 {
    font-size: 1.5rem;
    margin: 5px 0;
    @media (max-width: 768px) {
      font-size: 1.2rem; /* Reduz o tamanho do nome em mobile */
    }
  }

  h3 {
    font-size: 1rem;
    margin: 5px 0;
    @media (max-width: 768px) {
      font-size: 0.9rem; /* Reduz o tamanho do cargo/github em mobile */
    }
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.button`
  background: ${({ active, isSub }) => 
    active 
        ? (isSub ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.2)") 
        : "transparent"
  };
  border: none;
  color: white;
  text-align: left;
  padding: 10px;
  margin: 2px 0;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

// ************ AJUSTE 2: Estilo do SubMenu ************
const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0; /* Remove a margem esquerda para preencher a largura */
  margin-top: 5px;
  padding-left: 15px; /* Adiciona padding interno para alinhamento */
  background: rgba(0, 0, 0, 0.15); /* Fundo sutil para harmonizar */
  border-left: 2px solid #fff; /* Linha de destaque */
  border-radius: 0 0 5px 5px;
`;

// ************ AJUSTE 3: Estilo do Hamburger ************
const Hamburger = styled.button`
  display: none;
  position: fixed;
  top: 10px; /* Um pouco mais baixo */
  left: 10px; /* Mais perto da borda */
  background: transparent; /* Fundo transparente */
  color: white;
  border: 2px solid white; /* Borda branca para destacar */
  padding: 5px 10px;
  font-size: 24px;
  z-index: 1001;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    /* Move o hamburger para a esquerda se o menu estiver fechado */
    left: ${({ open }) => (open ? "260px" : "10px")}; 
    /* Esta linha é opcional, mas garante que o botão não fique colado na Sidebar */
    transition: left 0.3s ease;
  }
`;

const StyledLink = styled.a`
  display: inline-block;
  font-size: 1.1rem;
  color: #ffffff;
  padding: 0.5rem 0.2rem; /* Ajuste o padding para não ser muito grande */
  border-radius: 8px;
  transition: 0.3s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1); /* Fundo menos agressivo no hover */
    text-decoration: underline;
  }
`;

export default function Sidebar({ selected, setSelected }) {
  const [openProjects, setOpenProjects] = useState(true); // Deixei como true para mostrar o problema
  const [openMenu, setOpenMenu] = useState(false);

  const projetos = [
    "Projeto 1 - 1º semestre",
    "Projeto 2 - 2º semestre",
    "Projeto 3 - 3º semestre",
    "Projeto 4 - 4º semestre",
    "Projeto 5 - 5º semestre",
    "Projeto 6 - 6º semestre",
  ];

  const handleMenuItemClick = (item) => {
    setSelected(item);
    // Fecha o menu em telas pequenas ao selecionar um item
    if (window.innerWidth <= 768) {
      setOpenMenu(false);
    }
  };

  return (
    <>
      {/* Passa o estado openMenu para o Hamburger para ajustar a posição (opcional) */}
      <Hamburger onClick={() => setOpenMenu(!openMenu)} open={openMenu}>
        ☰
      </Hamburger>

      <Overlay open={openMenu} onClick={() => setOpenMenu(false)} />

      <SidebarContainer open={openMenu}>
        <Profile>
          {/* Removi o <br />s e usei margens no Profile h2/h3 para melhor espaçamento */}
          <ProfileImage src="https://lh3.googleusercontent.com/pw/AP1GczPggJRWkN_r10wPS1lIbLYV9WwcpbxpUYO3biDzffCNE9ZrmqJDgsNuQMFr3QutQvZ3mgcDuiFMy40KENpZWefuGNodltg-3T8WpBn0rwTynAagD_ffLxmyLcC72XtTvUv62OQiV1FeKggWoCw2LeLo=w911-h911-s-no-gm?authuser=0" alt="Foto" />
          <h2>João Pedro de Lima e Silva</h2>
          <h3>Analista de automação de processos</h3>
          
          <h3>
            Github:<StyledLink href="https://github.com/jplima-analytics/">
              jplima-analytics
            </StyledLink>
          </h3>
        </Profile>

        <Menu>
          <MenuItem active={selected === "Sobre"} onClick={() => handleMenuItemClick("Sobre")}>
            Sobre
          </MenuItem>
          <MenuItem
            active={selected === "Habilidades"}
            onClick={() => handleMenuItemClick("Habilidades")}
          >
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
                  onClick={() => handleMenuItemClick(proj)}
                  isSub={true} /* Adiciona prop para estilo de submenu ativo */
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