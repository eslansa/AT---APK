import Dashboard from './assets/Dashboard/Dashboard';
import CollapsedBreadcrumbs from './assets/views/Inicio/Scroll/CollapsedBreadcrumbs';
import { Box } from '@mui/material';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Inicio from './assets/views/Inicio';
import Paquetes from './Paquetes';
import Trasnporte from './Transporte';
import HotelesReservados from './assets/HotelesReservados';
import HotelesNA from './assets/views/Hoteles/HotelesNA';
import HotelesReservadosPais from './assets/HotelReservadoPais';
import Reservar from './assets/Reservar';
import Paquete2023 from './assets/Paquetes2023';
import HotelesReservado from './assets/views/Hoteles/HotelesReservado';
import HotelesBrasil from './assets/views/Hoteles/HotelesBrasil';



const App = () => {


  return (
    <BrowserRouter>
    <Dashboard />
    <CollapsedBreadcrumbs />
     <Link to="/Paquetes"/>
     <Link to="/Transporte"/>
     <Link to="/Hoteles_Reservados"/>
     <Link to="/HotelesNA"/>
     <Link to="/HotelesPais"/>
     <Link to="/Reservar"/>
     <Link to="/paquete2023"/>
    <Routes>
     <Route path="/" element={<Inicio />} />
     <Route path="/Paquetes" element={<Paquetes />} />
     <Route path="/Transporte" element={<Trasnporte />} />
     <Route path="/Hoteles_Reservados" element={<HotelesReservado />} />
     <Route path="/HotelesNA" element={<HotelesNA />} />
     <Route path="/HotelesPais" element={<HotelesBrasil />} />
     <Route path="/Reservar" element={<Reservar />} />
     <Route path="/paquete2023" element={<Paquete2023 />} />
     </Routes>
    </BrowserRouter>
  );
};

export default App;


