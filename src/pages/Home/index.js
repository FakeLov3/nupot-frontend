import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Container, HeroContainer, PitchContainer } from './styles';

export default function Home() {
  return (
    <Container>
      <HeroContainer>
        <h1>
          Saindo ou não de casa, <span>coma bem!</span>
        </h1>
        <p>
          Sugestão de cardápios, descrição nutricional, agendamento de pedidos,
          reserva de mesa e cuidado no preparo do seu alimento.
        </p>

        <Link to="/search">Pesquisar por pratos</Link>
      </HeroContainer>

      <PitchContainer>
        <h3>Veja o PITCH</h3>
        <iframe
          title="Pitch"
          src="https://drive.google.com/file/d/1xuGrWUNqQXfXxfxjoYA2x_6UxONAqx7S/preview"
          width="640"
          height="480"
        />
      </PitchContainer>
    </Container>
  );
}
