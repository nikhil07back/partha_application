import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useDispatch } from 'react-redux';
import { remove } from '../feature/cart/CartSlice';


function CartItem({item}) {
    const { name, price, image, description , id } = item


    const dispatch = useDispatch()

    const handleRemove = (id) => { 

        dispatch(remove(id))


    }

    
    return (

        <>
            
                <Card sx={{ width:350, margin:5,}}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={image}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {price}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button  variant="contained" color="success" onClick={() =>handleRemove(id)}> 
                   remove
                </Button>
                    </CardActions>
                </Card>
            
        </>
    )
}

export default CartItem