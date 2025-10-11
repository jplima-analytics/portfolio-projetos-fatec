import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px;
  color: #fff;
  background: linear-gradient(135deg, #042383ff, #021865ff, #000000ff);
  min-height: 100vh;
  font-family: 'Roboto', 'Courier New', monospace;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #df6400ff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const Card = styled.div`
  background: linear-gradient(135deg, #00031fff, #040071ff, #000000ff); 
  border-left: 4px solid #003cffff;
  border-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  max-width: 800px;
  line-height: 1.6;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.5);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #ffffffff; 
`;

const Text = styled.p`
  font-size: 1.1rem;
`;

const StyledLink = styled.a`
  display: inline-block;
  font-size: 1.1rem;
  color: #ffffffff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: 0.3s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.33);
    text-decoration: underline;
  }
`;

const ImageGallery = styled.div`
    display: flex;
    flex-wrap: wrap; 
    gap: 15px; 
    margin-top: 15px;
    justify-content: flex-start;
`;

const GalleryImage = styled.img`
    
    width: 100%; 

    max-width: 100%; 
    height: auto;    
    display: block;  
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.02);
        opacity: 0.9;
    }
`;



const Projeto3 = () => {

  const imageSources = [
        "https://lh3.googleusercontent.com/pw/AP1GczM8QC2TLFsT8Pz31TLfvbMVSNp8wYauqzwLXKFTst8DkSiwFCDMNqxEF3mZJxgQuZdCYxbSq19xJfRJI9i-gcYuDedcLPabxOudSRH2RTXxm-dXRE_PW7WBvKBhRgsKmAnw_Qa072Hutp0SIg5GkCQV=w988-h815-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczM1esNpZgrK09Ydhjy4INRaA6OGXad5SPb63IAfxC20kheOjQ6oWL6IdvyHbNssW-uSQleb7F70LyAdGAgr7em5z58PY7jZn-5vOwwGCMkMbma3D_jep6lkPg76kl0VEyEfVdty0Ge1x5v-1CS3A_4O=w1280-h602-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczM0-J6cqIpfAwIOxCfEvCQ4sCkCWkYdNGnEE2vBbrlY-AZE86x346Kk2LTLCPsFa8Bwar6Mx33FlH8fWn8WjHo4QkOXh8IV1GGGES_N-0qvlwk_DA1oK17xD4br8TlNrE1YhT9txjZcfsXYmsODbpGS=w1280-h614-s-no-gm?authuser=0"
  ]
  return (
    <Container>
      <Title>Street Wise - Sistema de Agendamento de Tatuagens (Aprimorado)</Title>

      <Card>
        <CardTitle>Sobre</CardTitle>
        <Text>
          Aprimoramento do sistema web de gestão de negócio para o estúdio Street Wise, 
          que se configura como um estúdio de tatuagem e Body Piercing. <br /> <br />  
          
          Nesta versão aprimorada, a arquitetura backend do sistema evoluiu de monolítica para arquitetura orientada a microsserviços,
          utilizando a linguagem Python e o framework FastAPI. Além do backend, a arquitetura frontend end foi desenvolvida no modelo 
          SPA (Single Page Application) com React.js. Tais mudanças vieram a oferecer mais benefícios na utilização do sistema como:
          rapidez, maior tolerância a falhas, escalabilidade, maior fluidez na experiência do usuário e robustez do código.
          
          <br /> <br />O objetivo final do produto permaneceu sendo o controle centralizado e automatizado de todas as funcionalidades relacionadas ao agendamento de 
          procedimentos no estúdio, como controle de profissionais, materiais utilizados, 
          estoque, e clientes da empresa. Mas desta vez, com maior qualidade técnica e melhoria na usabilidade para o usuário final.
        </Text>
      </Card>

      <Card>
        <CardTitle>Participação e tecnologias utilizadas</CardTitle>
        <Text>
          <ul>
            <li><h4>Participação:</h4>Product Owner e desenvolvedor backend</li>
            <li> HTML 5 </li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
            <li>Python</li>
          </ul>
          Arquitetura: Orientação a microsserviços com FastAPI
        </Text>
      </Card>

      <Card>
        <CardTitle>Imagens</CardTitle>
        <ImageGallery>
            {imageSources.map((src, index) => (
                <GalleryImage 
                    key={index}
                    src={src}
                    alt={`Screenshots do site Easypsi ${index + 1}`} 
                />
            ))}
        </ImageGallery>
      </Card>

        <Card>
        <CardTitle>Link do projeto</CardTitle>
        <Text>
          <StyledLink href="https://github.com/TechWeavers/tattoo-management-react">
          Frontend: Street Wise - Sistema de agendamento de tatuagens</StyledLink>
          <StyledLink href="https://github.com/TechWeavers/PI-StreetWise-ERP-3Semestre">
          Backend: Street Wise - Sistema de agendamento de tatuagens</StyledLink>
        </Text>
      </Card>

    </Container>
  );
};

export default Projeto3;
