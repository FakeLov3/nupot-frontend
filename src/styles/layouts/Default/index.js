import React from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '~/components/Header';
import Footer from '~/components/Footer';

import { Container } from './styles';

export default function Default({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}

Default.propTypes = {
  children: PropTypes.element.isRequired,
};
