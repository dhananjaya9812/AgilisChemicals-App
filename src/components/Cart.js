import React from 'react';
import { List, ListItem, ListItemText, Button, Typography } from '@mui/material';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">No items in cart</Typography>
      ) : (
        <List>
          {cart.map((item) => (
            <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <ListItemText primary={item.title} secondary={`Quantity: ${item.quantity}`} />
              <Button variant="contained" color="secondary" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Cart;
