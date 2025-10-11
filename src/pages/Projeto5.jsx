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
  color: #ffea06ff;
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

const DesktopScreenshot = styled.img`
    width: 100%; 
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 5px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    margin-bottom: 25px; 
`;

const MobileMockupGrid = styled.div`
    display: flex;
    flex-wrap: wrap; 
    gap: 15px; 
    justify-content: space-around;
    width: 100%;
    margin-top: 15px;
`;

const PhoneMockup = styled.div`
    position: relative;
    width: calc(33.33% - 10px); 
    max-width: 180px; 
    height: 380px; 

    background-color: #0d0d0d;
    border-radius: 40px;
    padding: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 120px;
        height: 25px;
        background-color: #0d0d0d;
        border-radius: 0 0 15px 15px;
        z-index: 10;
    }
    &::after {
        content: '';
        position: absolute;
        right: -3px;
        top: 100px;
        width: 3px;
        height: 40px;
        background-color: #333;
        border-radius: 0 2px 2px 0;
    }

    @media (max-width: 768px) {
        width: calc(50% - 10px); 
        max-width: 250px;
        height: 450px;
    }
    @media (max-width: 500px) {
        width: 100%; 
        max-width: 300px;
        height: 500px;
        margin: 0 auto;
    }
`;

const PhoneScreen = styled.img`
    width: 100%; 
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
    display: block;
`;


const Projeto3 = () => {
  const imageSources = [
        "https://lh3.googleusercontent.com/pw/AP1GczMTIC-criOZo0hMI0_s5RuY8H6e15CKQFOh_nu6LHp28Tvl7lWDuDmuISSkjfomzXUszaA8klKgJO5ttlZn3m32TOMps8OqigJ7PLI60ToTPvsQFCLr4V-Z8ksImLbQHoEtMvaxiyCTHnur6jTUt4x3=w1221-h911-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczNhA2YsEobVgBSI7D3nmOMisbGkG0EIS2riq2g4GM7I3j2YXotnoFUDNe8fb0R1Z3GnUD1DUW03x7xm7wSGpyGmgCDBpjnNc4ZKh1zvrvK4XO8vdhykJXMNn2JDadPBPZgPlM2aw7oN8n-2ZPQmlgcL=w421-h911-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczN6LmEhCc994SlwrlI2KpC2ds2wjD0tSMmqGWRirT1a2RdPc3fFE9TpixNlMRQFTyvBO_bdfasp4RWUu-KIqfYdNmmuoH1q6QKymkXTI7kvIysugbQqdiMIcenirDylzCMwg1ZDVtqkOpnp76-OCIPS=w421-h911-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczMq_QWd4JcBrCfprfn_CRxdrRGQahH_XEtDjdTWQ8RGNT1tZ_vVUUh_lFhoE995MQCvFMGWV0xhkw7QjS4K8F_aJmxbMqzRhR1etr77rf-__HxgzOON92zPbbXY_IKiD-CcQsm1udXsx83B8izUwvHJ=w421-h911-s-no-gm?authuser=0"
  ]

  const desktopImageSrc = imageSources[0]; 
  const mobileImageSrcs = imageSources.slice(1);
  return (
    <Container>
      <Title>Aprova fácil - Sistema de organização de leads para imobiliária</Title>

      <Card>
        <CardTitle>Sobre</CardTitle>
        <Text>
          Aprova fácil é um projeto de aplicativo desenvolvido em parceria com a imobiliária
          Lastrear Imóveis, onde o objetivo principal foi construir um aplicativo para gestão de dados dos
          potenciais clientes que contatam a imobiliária com o intuito de alugar ou comprar um imóvel.
          
          <br /> <br />Dentre as principais características do app, destacam-se um formulário web
          que coleta os dados dos clientes que solicitam análise de crédito, e o aplicativo que recebe as 
          solicitações do formulário e as centraliza em um relatório que pode ser acessado pelos corretores e administradores do
          negócio. <br /> <br />
          
          Tais solicitações centralizadas também permitem filtrar e organizar todo os contatos a partir do status da análise que é definida pelo corretor dentro do aplicativo.
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
            <li>Java</li>
          </ul>
          Arquitetura: Orientação a microsserviços com Spring boot
        </Text>
      </Card>

      <Card>
        <CardTitle>Imagens</CardTitle>
        {desktopImageSrc && (
            <DesktopScreenshot
                src={desktopImageSrc}
                alt="Screenshot do formulário web aprova fácil (Desktop)"
            />
        )}
        
        <MobileMockupGrid>
            {mobileImageSrcs.map((src, index) => (
                <PhoneMockup key={index}>
                    <PhoneScreen 
                        src={src}
                        alt={`Screenshot do aplicativo aprova fácil ${index + 1}`} 
                    />
                </PhoneMockup>
            ))}
        </MobileMockupGrid>
        
      </Card>

        <Card>
        <CardTitle>Link do projeto</CardTitle>
        <Text>
          <StyledLink href="https://github.com/Melancia-Salgada/PI5_website">
          Formulário web frontend: Aprova fácil</StyledLink>
          <StyledLink href="https://github.com/Melancia-Salgada/lastrear-imovel">
          Front end mobile: Aprova fácil</StyledLink> <br />
          <StyledLink href="https://github.com/Melancia-Salgada/aprovafacil">
          Backend: Aprova fácil</StyledLink>
        </Text>
      </Card>

    </Container>
  );
};

export default Projeto3;
