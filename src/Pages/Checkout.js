import { Avatar, Box, Button,Checkbox, FormControlLabel, FormGroup, Grid, Paper, Radio, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";


const Checkout = ({car }) => {

    const retiros = ['Retiro en local', 'Envio a domicilio'];
    const propina = ['0%', '5%', '10%'];
    const [cartToPay, setCartToPay] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [retiro, setRetiro] = useState(retiros[0]);
    const [prop, setProp] = useState(propina[0]);
    const [pago, setPago] = useState('Efectivo');
    const [documento, setDocumento] = useState('Boleta');

    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
            setCartToPay(cart);
        }

        let total = localStorage.getItem('total_cart');
        if (total) {
            setCartTotal(total);
        }
    }, []);

    const handleDocumento = (e) => {
        setDocumento(e.target.name);
    };

    const handlePago = (e) => {
        setPago(e.target.name);
    };


    const handleRetiro = (e) => {
        setRetiro(e.target.name);
    };

    const handlePropina = (e) => {
        setProp(e.target.name);
    };

    const completarPagoAlert = ({email}) => {
        
        alert('Pago completado\n' + 'Informacion de pedido enviado a su correo \n Gracias por su compra! :D')
        console.log('Pago completado')

    };

    const cartContent = cartToPay.map((item, index) => {
        return (
            <Box key={index}>
                <Box
                    display="flex"
                    sx={{pt:2, pb:2, pl:2, pr: 2}}
                >
                    <Avatar src={item.image} sx={{mr:2}}/>
                    <Box display="flex" flexDirection={"column"} sx={{mr:15}}>
                        <Typography>{item.name}</Typography>
                        <Typography variant="subtitle2">{item.preparation} | {item.size} cm</Typography>
                        <Typography variant="subtitle2">Cantidad: {item.qty}</Typography>
                    </Box>
                    <Typography variant="h5">${item.price}</Typography>
                </Box>
            </Box>
        )
    });

    const DocumentoDeCompraRender = (
        <>
            <Typography variant="h5" className="mb-2">Documento de compra</Typography>
            <Grid container spacing={2}>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={documento === 'Factura'}
                                onChange={handleDocumento}
                                name="Factura"
                            />
                        
                        }
                        label="Factura"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={documento === 'Boleta'}
                                onChange={handleDocumento}
                                name="Boleta"
                            />
                        }
                        label="Boleta"

                    />
                </FormGroup>
            </Grid>
        </>
    );



    const personalInformationRender = (
        <>
        <Typography variant="h5" className="mb-2">Información Personal</Typography>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Nombres"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Apellidos"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
        </Grid>
        <Grid container className="mt-3">
            <Grid item xs={12} sm={12}>
                <TextField
                    id="standard-helperText"
                    label="Dirección"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
        </Grid>
        </>
    );

    const paymentInformationRender = (
        <>
        <Typography variant="h5" className="mb-2 mt-4">Información de pago</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    id="standard-helperText"
                    label="Número de tarjeta"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
        </Grid>
        <Grid container spacing={2} className="mt-1">
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Mes"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="Año"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    id="standard-helperText"
                    label="CVC"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
        </Grid>
        </>
    );

    const billingAddress = (
        <>
        <Typography variant="h5" className="mb-2 mt-4">Dirección de facturación</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    id="standard-helperText"
                    label="Dirección"
                    variant="outlined"
                    fullWidth
                    size="small"
                />
            </Grid>
        </Grid>
        </>
    );

    const tipoEntrega = (
        <>
        <Typography variant="h5" className="mb-2 mt-4">Tipo de entrega</Typography>
        <Grid container spacing={2}>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={retiro === 'Envio a domicilio' ? true : false}
                            name="Envio a domicilio"
                            onChange={handleRetiro}
                        />
                        }
                        label="Domicilo"
                    />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={retiro === 'Retiro en local' ? true : false}
                            name="Retiro en local"
                            onChange={handleRetiro}
                        />
                        }
                        label="Retiro en local"
                    />
            </FormGroup>
        </Grid>
        </>
    );

    const CantidadPropina = (
        <>
        <Typography variant="h5" className="mb-2 mt-4">Propina</Typography>
        <Grid container spacing={2}>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={prop === '0%' ? true : false}
                            name="0%"
                            onChange={handlePropina}
                        />
                        }
                        label="0%"
                    />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={prop === '5%' ? true : false}
                            name="5%"
                            onChange={handlePropina}
                        />
                        }
                        label="5%"
                    />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={prop === '10%' ? true : false}
                            name="10%"
                            onChange={handlePropina}
                        />
                        }
                        label="10%"
                    />
            </FormGroup>
        </Grid>
        </>
    );

    const tipoPago = (
        <>
        <Typography variant="h5" className="mb-2 mt-4">Tipo de pago</Typography>
        <Grid container spacing={2}>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={pago === 'Efectivo' ? true : false}
                            name="Efectivo"
                            onChange={handlePago}
                        />
                        }
                        label="Efectivo"
                    />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={pago === 'Tarjeta' ? true : false}
                            name="Tarjeta"
                            onChange={handlePago}
                        />
                        }
                        label="Tarjeta"
                    />
                <FormControlLabel

                    control={
                        <Checkbox
                            checked={pago === 'Webpay' ? true : false}
                            name="Webpay"
                            onChange={handlePago}
                        />
                        }
                        label="Webpay"
                    />
            </FormGroup>
        </Grid>
        </>
    );


    return (
        <Grid container spacing={2} className="mt-2">
            <Grid item xs={12} sm={7}>
                {tipoEntrega}
                {tipoPago}
                {DocumentoDeCompraRender}
                {CantidadPropina}
                {personalInformationRender}
                {billingAddress}
                <Button onClick = {completarPagoAlert} variant="contained" color="success" className="mt-4 mb-4">Orden generada</Button>
            </Grid>
            <Grid item xs={12} sm={5}>
                <Box
                    sx={{p: 2, background: "#E8E8E8", width: '100%',}}
                    display="flex"
                    justifyContent={"center"}
                    flexDirection="column"
                    alignItems="center"
                >
                    <Typography variant="h5" className="mb-3">Carro Actual</Typography>
                    <Paper>
                        {cartContent}
                    </Paper>
                    <Typography variant="h5" className="mt-3">Total: ${cartTotal}</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Checkout;