import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
    Button, Checkbox, Dialog, DialogActions, TextField,
    DialogContent, DialogContentText, DialogTitle,
    FormControlLabel, FormGroup, Radio, RadioGroup
} from "@mui/material";
import { useState } from 'react';

export default function SalsaCard({salsa, addToCart}) {
    const [openDialog, setOpenDialog] = useState(false);
    const [price, setPrice] = useState(salsa.costs[0]);
    const [qty, setQty] = useState(1);

    const handlePrice = (newPrice, qty) => {
        let price = newPrice * qty;
        setPrice(price);
    };

    const handleQty = (e) => {
        let newQty = e.target.value;
        setQty(newQty);
        let currentPrice = salsa.costs[0];
        handlePrice(currentPrice, newQty);
    };

    // Dialog (Modificación)
    const handleClickMod = () => {
        setOpenDialog(true);
    };

    const handleCloseMod = () => {
        setPrice(salsa.costs[1]);
        setQty(1);
        setOpenDialog(false);
    };

    // Añadir al carrito
    const generateOrder = () => {
        let order = {
            'id': salsa.id,
            'name': salsa.name,
            'image': salsa.image,
            'qty': qty,
            'price': price
        }
        addToCart(order);
        handleCloseMod();
    }

    return (
        <div>
        <Card sx={{ width: 325, marginLeft: 3, marginBottom: 3, border: 2 }}>
            <CardMedia
                component="img"
                height="300"
                image={salsa.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Salsa {salsa.name}
                </Typography>
                <div>
                    <Typography variant="body3" color="text.secondary">
                        Precios: {salsa.costs.map((e, index) => {
                            return (
                                <div key={index} style={{display: 'inline'}}> - ${e}</div>
                            )
                        })}
                    </Typography>
                </div>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleClickMod}>Modificar</Button>
                <Button size="small" endIcon={<ShoppingCartIcon />}  onClick={generateOrder}> Añadir al carrito</Button>
            </CardActions>
        </Card>

        <Dialog open={openDialog} onClose={handleCloseMod}>
            <DialogTitle>Salsa {salsa.name}</DialogTitle>
            <DialogContent>
                <DialogContentText className='mt-4'>
                    Cantidad
                </DialogContentText>
                <TextField
                    id="salsas-qty"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{min:1, max: 50, value: qty}}
                    onChange={handleQty}
                />
                <DialogContentText className='mt-4' fontSize={20}>
                    Precio <b>${price}</b>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCloseMod}>Cancelar</Button>
            <Button onClick={generateOrder} endIcon={<ShoppingCartIcon />}>Añadir al carrito</Button>
            </DialogActions>
        </Dialog>

        </div>
    );
}