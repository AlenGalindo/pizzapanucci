import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Layout from './Layout';
import Pizzas from './Pages/Pizzas';
import Bebidas from './Pages/Bebidas';
import Postres from './Pages/Postres';

const App = () => {
  return (
    <Layout className="myStyle">
      <Container>
        <Routes>
          <Route path="/"  exact/>
          <Route path="/catalogo_pizzas" element={<Pizzas/>} exact/>
          <Route path="/bebidas" element={<Bebidas/>} exact/>
          <Route path="/postres" element={<Postres/>} exact/>
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
