import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import selfcare from "../../assets/selfcare.png"

import useStyles from "./styles";

const Products = ({products , addToCard}) => {
  const classes = useStyles();


  return (
    <main className={classes.content}>
    <div className={classes.botiquediv}>

    <img src={selfcare} alt="selfcare" height="500px" width="450px" />
        
    </div>
    <div className={classes.botiquediv}>
      <h2 className={classes.title}>Boutique</h2>
          
    </div>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={5}>
        {products.map((product) => (
          <Grid item key={product.id} xs={11} sm={5} md={4} lg={3}>
            <Product product={product}  addToCard={addToCard} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
