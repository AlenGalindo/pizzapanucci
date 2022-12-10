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

export default function PersonalizadaCard({personalizada, addToCart}) {
    const [openDialog, setOpenDialog] = useState(false);
    const [size, setSize] = useState(personalizada.sizes[1]);
    const [price, setPrice] = useState(personalizada.costs[1]);
    const [masa, setMasa] = useState(personalizada.type);
    const [qty, setQty] = useState(1);
    const [carne, setCarne] = useState(personalizada.carne[0]);
    const [queso, setQueso] = useState(personalizada.quesos[0]);
    const [verdura, setVerdura] = useState(personalizada.verduras[0]);
    



    const handleMasa = (e) => {
        setMasa(e.target.name);
    };

    const handleCarne = (e) => {
        let newCarne = e.target.value;
        let carneIndex = personalizada.carne.indexOf(newCarne);
        setCarne(newCarne);
        let newPrice = personalizada.carneCosts[carneIndex];
        setPrice(price+newPrice);
        handlePrice(price,qty);
    };

    const handleVerdura = (e) => {
        let newVerdura = e.target.value;
        let verduraIndex = personalizada.verduras.indexOf(newVerdura);
        setVerdura(newVerdura);
        let newPrice = personalizada.verdurasCosts[verduraIndex];
        handlePriceAdd(newPrice);
    };

    const handleQueso = (e) => {
        let newQueso = e.target.value;
        let quesoIndex = personalizada.quesos.indexOf(newQueso);
        setQueso(newQueso);
        let newPrice = personalizada.costs[quesoIndex];
        handlePriceAdd(newPrice);
    };

    const handleSize = (e) => {
        let newSize = e.target.value;
        let sizeIndex = personalizada.sizesNames.indexOf(newSize);
        setSize(newSize);
        let newPrice = personalizada.costs[sizeIndex];
        handlePrice(newPrice, qty);
    };


    const handlePrice = (newPrice, qty) => {
        let price = newPrice * qty;
        setPrice(price);
    };

    const handlePriceAdd = (newPrice) => {
        let price = price + newPrice;
        handlePrice(price, qty);
    };

    const handleQty = (e) => {
        let newQty = e.target.value;
        setQty(newQty);
        let sizeIndex = personalizada.sizesNames.indexOf(size);
        let currentPrice = personalizada.costs[sizeIndex];
        handlePrice(currentPrice, newQty);
    };

    // Dialog (Modificación)
    const handleClickMod = () => {
        setOpenDialog(true);
    };

    const handleCloseMod = () => {
        setSize(personalizada.sizes[1]);
        setPrice(personalizada.costs[1]);
        setQty(1);
        setOpenDialog(false);
    };

    // Añadir al carrito
    const generateOrder = () => {
        let order = {
            'id': personalizada.id,
            'name': personalizada.name,
            'image': personalizada.image,
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
                image={personalizada.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Pizza {personalizada.name}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                    <div>Tipo: {personalizada.description}</div>
                </Typography>
                <div>
                    <Typography variant="body3" color="text.secondary">
                        Tamaños: {personalizada.sizesNames.map((e, index) => {
                            return (
                                <div key={index} style={{display: 'inline'}}> - {e} </div>
                            )
                        })}
                    </Typography>
                </div>

                <div>
                    <Typography variant="body3" color="text.secondary">
                        Medidas: {personalizada.sizes.map((e, index) => {
                            return (
                                <div key={index} style={{display: 'inline'}}> - {e}cm </div>
                            )
                        })}
                    </Typography>
                </div>
            </CardContent>
            <CardActions>
                <Button size="small" color="success" onClick={handleClickMod}>Perzonalizar</Button>
            </CardActions>
        </Card>

        <Dialog open={openDialog} onClose={handleCloseMod}>
            <DialogTitle>Pizza {personalizada.name}</DialogTitle>
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
                    Carnes
                </DialogContentText>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    {personalizada.carne.map((e, index) => {
                        return (
                            <FormControlLabel
                                key={index}
                                value={e}
                                // name={e}
                                control={<Radio />}
                                label={e}
                                checked={carne === e ? true : false}
                                onChange={handleCarne}
                            />
                        )
                    })}
                </RadioGroup>

                <DialogContentText className='mt-4'>
                    Quesos
                </DialogContentText>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    {personalizada.quesos.map((e, index) => {
                        return (
                            <FormControlLabel
                                key={index}
                                value={e}
                                // name={e}
                                control={<Radio />}
                                label={e}
                                checked={queso === e ? true : false}
                                onChange={handleQueso}
                            />
                        )
                    })}
                </RadioGroup>

                <DialogContentText className='mt-4'>
                    Verduras y frutas
                </DialogContentText>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    {personalizada.verduras.map((e, index) => {
                        return (
                            <FormControlLabel
                                key={index}
                                value={e}
                                // name={e}
                                control={<Radio />}
                                label={e}
                                checked={verdura === e ? true : false}
                                onChange={handleVerdura}
                            />
                        )
                    })}
                </RadioGroup>
                
                <DialogContentText className='mt-4'>
                    Tamaño
                </DialogContentText>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    {personalizada.sizesNames.map((e, index) => {
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
                    id="personal-qty"
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