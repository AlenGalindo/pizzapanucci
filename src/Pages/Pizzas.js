import { Box, Container, Grid } from "@mui/material";
import pizzas from "../data/pizzas";
import PizzaCard from "../components/PizzaCard";
import bebidas from "../data/bebidas";
import BebidaCard from "../components/BebidaCard";
import personalizada from "../data/personalizada";
import PersonalizadaCard from "../components/PersonalizadaCard";

const Pizzas = ({addToCart}) => {
    const renderPizzas = pizzas.map((e, index) => {
        return (
            <PizzaCard
                key={index}
                pizza={e}
                addToCart={addToCart}
            />
        )
    });

    const renderBebidas = bebidas.map((e, index) => {
        return (
            <BebidaCard
                key={index}
                bebida={e}
                addToCart={addToCart}
            />
        )
    });

    const renderPersonalizada = personalizada.map((e, index) => {
        return (
            <PersonalizadaCard
                key={index}
                personalizada={e}
                addToCart={addToCart}
            />
        )
    });


    return (
        <Box className="mt-4">
            <Container maxWidth="lg">
                <h4 style={{marginLeft: '25px', textAlign:"center" }}>Arma tu propia pizza</h4>
                <Grid container justifyContent={"center"} sx={{margin: '20px 4px 10px 4px'}}
                >
                    <Grid container className="mt-4">
                        {renderPersonalizada}
                    </Grid>
                </Grid>
                
                <h3 style={{marginLeft: '25px'}}>Catalogo Pizzas</h3>
                <Grid
                    container
                    justifyContent={"center"}
                    sx={{margin: '20px 4px 10px 4px'}}
                >
                        <Grid container className="mt-4">
                            {renderPizzas}
                        </Grid>
                </Grid>

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

export default Pizzas;