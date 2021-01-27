import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";

import useStyles from "./styles";

const Cart = ({
  cart,
  handleRemoveCard,
  handleUpdateCard,
  handleEmptyCard,
}) => {
  const classes = useStyles();

  const EmptyCard = () => (
    <Typography variant="subtitle1">
      you have no item ,<Link className={classes.link}>please add one </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onUpdateCard={handleUpdateCard}
              onRemoveCard={handleRemoveCard}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          subtotal:{cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCard}
          >
            empty Cart
          </Button>

          <Button
            component={Link} to="/checkout"
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
  if (!cart.line_items) return "loading ...";
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your shipping card{" "}
      </Typography>
      {!cart.line_items.length ? <EmptyCard /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
