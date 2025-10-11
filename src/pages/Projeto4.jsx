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
  color: #a243e7ff;
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
        "https://lh3.googleusercontent.com/pw/AP1GczMOBQpFqHg6rT8P-5Z23tE3QTyagLXQu5saLHjVdlmR-aDA5zGO4gkoZ48wbfn894tMYcWMDCggS80pGjeMn7to-uwGKpL9gSeis3a1aoE1b0wZnQo74Nc1kJeU3s9y_SqXvKxxvBMX6EvVc3kJvpPU=w1280-h822-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczOg5M3uGPFKflX6I8ew3xZTxeIfwWFA3ImP_L7peCtK-I3hcRrxdx4YcSMupBK3xfFQ8hr0lBqusnmxGMmIQDf1yaTUX0_h8TCcOlTBknD53Yt4nsPhMK387xQDUklCl2gktSJrwZ2wPsbMkginkRRC=w1280-h728-s-no-gm?authuser=0",
        "https://lh3.googleusercontent.com/pw/AP1GczPYSl4vCDJHDD_BfDYCgejBNCeVdCyi2JQTQQWnVWOh7Q6ZCydtTMqhwvCeTT0JzI_Vev-Bq17cY0bXw5qs_CaZaY5SXmzabgLMmaYKD9JRZcBUgMTv178WiFHbA_C_XAt0EgCtFJ0hETrDSpXsPW2w=w1280-h771-s-no-gm?authuser=0"
  ]
  return (
    <Container>
      <Title>EasyPsy - Sistema de gestão de negócio para psicólogos</Title>

      <Card>
        <CardTitle>Sobre</CardTitle>
        <Text>
          EasyPsi é um sistema de gestão para psicólogos que atendem os seus pacientes de forma particular e online,
          onde o objetivo principal é centralizar e automatizar todos os processos que os
          psicólogos utilizam para gerir o negócio virtual, dando espaço ao profissional para se concentrar
          no que realmente importa, cuidar de pessoas.
          
          <br /> <br />O sistema conta com funcionalidades importantes de otimização como agendamento de consultas online através
          de integração com o google agenda, cadastro e registro de pacientes, registro de prontuário online, e disparo
          de mensagens automáticas de lembrete de consulta via email.
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
          <StyledLink href="https://github.com/Melancia-Salgada/psico-frontend">
          Frontend: EasyPsi</StyledLink>
          <br />
          <StyledLink href="https://github.com/Melancia-Salgada/psico-backend">
          Backend: EasyPsi</StyledLink>
        </Text>
      </Card>

    </Container>
  );
};

export default Projeto3;
