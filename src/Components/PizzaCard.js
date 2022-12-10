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

export default function PizzaCard({pizza, addToCart}) {
    const [openDialog, setOpenDialog] = useState(false);
    const [size, setSize] = useState(pizza.sizes[1]);
    const [price, setPrice] = useState(pizza.costs[1]);
    const [masa, setMasa] = useState(pizza.type);
    const [qty, setQty] = useState(1);


    const handleMasa = (e) => {
        setMasa(e.target.name);
    };

    const handleSize = (e) => {
        let newSize = e.target.value;
        let sizeIndex = pizza.sizesNames.indexOf(newSize);
        setSize(newSize);
        let newPrice = pizza.costs[sizeIndex];
        handlePrice(newPrice, qty);
    };

    const handlePrice = (newPrice, qty) => {
        let price = newPrice * qty;
        setPrice(price);
    };

    const handleQty = (e) => {
        let newQty = e.target.value;
        setQty(newQty);
        let sizeIndex = pizza.sizesNames.indexOf(size);
        let currentPrice = pizza.costs[sizeIndex];
        handlePrice(currentPrice, newQty);
    };

    // Dialog (Modificación)
    const handleClickMod = () => {
        setOpenDialog(true);
    };

    const handleCloseMod = () => {
        setSize(pizza.sizes[1]);
        setPrice(pizza.costs[1]);
        setQty(1);
        setOpenDialog(false);
    };

    // Añadir al carrito
    const generateOrder = () => {
        let order = {
            'id': pizza.id,
            'name': pizza.name,
            'image': pizza.image,
            'size': size,
            'masa': masa,
            'medida': 'cm',
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
                height="180"
                image={pizza.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Pizza {pizza.name}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                    <div>Tipo: {pizza.description}</div>
                </Typography>
                <div>
                    <Typography variant="body3" color="text.secondary">
                        Precios: {pizza.costs.map((e, index) => {
                            return (
                                <div key={index} style={{display: 'inline'}}> - ${e}</div>
                            )
                        })}
                    </Typography>
                </div>
                <div>
                    <Typography variant="body3" color="text.secondary">
                        Tamaños: {pizza.sizesNames.map((e, index) => {
                            return (
                                <div key={index} style={{display: 'inline'}}> - {e} </div>
                            )
                        })}
                    </Typography>
                </div>

                <div>
                    <Typography variant="body3" color="text.secondary">
                        Medidas: {pizza.sizes.map((e, index) => {
                            return (
                                <div key={index} style={{display: 'inline'}}> - {e}cm </div>
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
            <DialogTitle>Pizza {pizza.name}</DialogTitle>
            <DialogContent>
            <DialogContentText>
                    Tipo de de masa
            </DialogContentText>
                <FormGroup>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={masa === 'normal' ? true : false}
                            name="normal"
                            onChange={handleMasa}
                        />
                        }
                        label="Normal"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={masa === 'delgada' ? true : false}
                            name="delgada"
                            onChange={handleMasa}
                        />
                        }
                        label="Delgada"
                    />
                </FormGroup>
                <DialogContentText className='mt-4'>
                    Tamaño
                </DialogContentText>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    {pizza.sizesNames.map((e, index) => {
                        return (
                            <FormControlLabel
                                key={index}
                                value={e}
                                // name={e}
                                control={<Radio />}
                                label={e}
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
                    id="pizzas-qty"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{min:1, max: 50, value: qty}}
                    size="mediana"
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