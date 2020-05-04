import React from 'react';
import Chatbot from 'react-messenger-customer-chat';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <h1>
        Saindo ou não de casa, <span>coma bem!</span>
      </h1>
      <p>
        Sugestão de cardápios, descrição nutricional, agendamento de pedidos,
        reserva de mesa e cuidado no preparo do seu alimento.
      </p>

      <Link to="/search">Pesquisar por pratos</Link>
      <Chatbot pageId="100458851661545" appId="663023314533039" />
    </Container>
  );
}
