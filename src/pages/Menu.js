import { useState } from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { add } from "../feature/cart/CartSlice";




const Menu = () => {


  // const [cartItem , setcartItem] = useState([])
  
   const dispatch  = useDispatch()

  const handleClick = (menu) => {
    dispatch(add(menu))
    // setcartItem(menu)
  }


  // console.log(cartItem)


  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
          
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                 Rs. {menu.price}                  
                </Typography>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}                  
                </Typography>              
                
                <Typography variant="body2">{menu.description}</Typography>
                
                <Button  variant="contained" color="success" onClick={()=>handleClick(menu)}> 
                   Add To Cart
                </Button>
  
              </CardContent>
            </CardActionArea>
          </Card>
        
  ))}
      </Box>
    </Layout>
  );
};

export default Menu;
