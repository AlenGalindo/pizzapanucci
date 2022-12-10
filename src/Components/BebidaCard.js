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

export default function BebidaCard({bebida, addToCart}) {
    const [openDialog, setOpenDialog] = useState(false);
    const [size, setSize] = useState(bebida.sizes[1]);
    const [price, setPrice] = useState(bebida.costs[1]);
    const [qty, setQty] = useState(1);

    const handleSize = (e) => {
        let newSize = parseFloat(e.target.value);
        let sizeIndex = bebida.sizes.indexOf(newSize);
        setSize(newSize);
        let newPrice = bebida.costs[sizeIndex];
        handlePrice(newPrice, qty);
    };

    const handlePrice = (newPrice, qty) => {
        let price = newPrice * qty;
        setPrice(price);
    };

    const handleQty = (e) => {
        let newQty = e.target.value;
        setQty(newQty);
        let sizeIndex = bebida.sizes.indexOf(size);
        let currentPrice = bebida.costs[sizeIndex];
        handlePrice(currentPrice, newQty);
    };

    // Dialog (Modificación)
    const handleClickMod = () => {
        setOpenDialog(true);
    };

    const handleCloseMod = () => {
        setSize(bebida.sizes[1]);
        setPrice(bebida.costs[1]);
        setQty(1);
        setOpenDialog(false);
    };

    // Añadir al carrito
    const generateOrder = () => {
        let order = {
            'id': bebida.id,
            'name': bebida.name,
            'image': bebida.image,
            'size': size,
            'medida': 'lts',
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
                image={bebida.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Bebida {bebida.name}
                </Typography>
                <div>
                    <Typography variant="body3" color="text.secondary">
                        Precios: {bebida.costs.map((e, index) => {
                            return (
                                <div key={index} style={{display: 'inline'}}> - ${e}</div>
                            )
                        })}
                    </Typography>
                </div>
                <div>
                    <Typography variant="body3" color="text.secondary">
                        Tamaños: {bebida.sizes.map((e, index) => {
                            return (
                                <div key={index} style={{display: 'inline'}}> - {e} lts </div>
                            )
                        })}
                    </Typography>
                </div>
            </CardContent>
            <CardActions>
                <Button size="small" color="success" onClick={handleClickMod}>Perzonalizar</Button>
                <Button size="small" endIcon={<ShoppingCartIcon />}  onClick={generateOrder}> Añadir al carrito</Button>
            </CardActions>
        </Card>

        <Dialog open={openDialog} onClose={handleCloseMod}>
            <DialogTitle>Bebida {bebida.name}</DialogTitle>
            <DialogContent>
                <DialogContentText className='mt-4'>
                    Tamaño
                </DialogContentText>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    {bebida.sizes.map((e, index) => {
                        return (
                            <FormControlLabel
                                key={index}
                                value={e}
                                // name={e}
                                control={<Radio />}
                                label={e + 'lts'}
                                checked={size === e ? true : false}
                                onChange={handleSize}
                            />
                        )
                    })}
                </RadioGroup>
                <DialogContentText className='mt-4'>
                    Cantidad
                </DialogContentText>
                <TextField
                    id="bebidas-qty"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{min:1, max: 50, value: qty}}
                    size="normal"
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