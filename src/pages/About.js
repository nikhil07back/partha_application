import { useState } from "react";
import "./about.css"
import Layout from "./../components/Layout/Layout";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const About = () => {

  const product = useSelector((state) => state.cart)

  const total = product.reduce((p,c)=>{
      return p + c.price
  },0)

  console.log(product)



  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>


          To top it all, there is yet another famous Bhopali Paan which is relished by the locals and visitors alike. This special paan has wide ranging toppings which vary from distinct types of dry fruits to supari. The Paan is almost considered a must have for those who want to give a grand finishing touch to their meal.
        </p>
        <br />
        <p>
          To top it all, there is yet another famous Bhopali Paan which is relished by the locals and visitors alike. This special paan has wide ranging toppings which vary from distinct types of dry fruits to supari. The Paan is almost considered a must have for those who want to give a grand finishing touch to their meal.
        </p>
      </Box>


      <div className="card_Item">
        <div className="card">
          {
            product.map((item) => <CartItem key={item.id} item={item} />)
          }
        </div>
        <div className="total">
        <Card sx={{ maxWidth:300}}>
                  
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            TOTAL
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {total.toFixed(2)}
                        </Typography>                      
                    </CardContent>
                    <CardActions>
                    <Button  variant="contained" color="success" > 
                   PayNow
                </Button>
                    </CardActions>
                </Card>
        </div>
      </div>

    </Layout>
  );
};

export default About;
