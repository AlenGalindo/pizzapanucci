import { Box, Container, Grid } from "@mui/material";
import bebidas from "../data/bebidas";
import BebidaCard from "../components/BebidaCard";

const Bebidas = ({addToCart}) => {
    const renderBebidas = bebidas.map((e, index) => {
        return (
            <BebidaCard
                key={index}
                bebida={e}
                addToCart={addToCart}
            />
        )
    });

    return (
        <Box className="mt-4">
            <Container maxWidth="lg">
                <h3 style={{marginLeft: '25px'}}>Catalogo de bebestibles</h3>
                <Grid
                    container
                    justifyContent={"center"}
                    sx={{margin: '20px 4px 10px 4px'}}
                >
                        <Grid container className="mt-4">
                            {renderBebidas}
                        </Grid>
                </Grid>
            </Container>
        </Box>

    )
}

export default Bebidas;