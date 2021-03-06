import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { FaHeart, FaShare } from 'react-icons/fa';
import dishPlaceholder from '~/assets/dish-placeholder.png';

const StyledCard = styled(Card)`
  min-width: 345px;
  max-width: 345px;
  margin: 12px;
`;

const StyledLink = styled(Link)`
  color: black;
`;

export default function Dish(props) {
  const { name, description, price, image, id } = props;
  return (
    <StyledCard>
      <StyledLink to={`/dishes/${id}`}>
        <CardMedia component="img" height="240" image={image} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="body1" color="textPrimary" component="p">
            R${price.toFixed(2)}
          </Typography>
        </CardContent>
      </StyledLink>
      <CardActions>
        <IconButton>
          <FaHeart color="red" />
        </IconButton>
        <IconButton>
          <FaShare color="blue" />
        </IconButton>
        <Button>Fazer pedido</Button>
      </CardActions>
    </StyledCard>
  );
}

Dish.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
};

Dish.defaultProps = {
  description: '',
  image: dishPlaceholder,
};
