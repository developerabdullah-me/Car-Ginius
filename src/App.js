
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Addservices from './pages/Addservices/Addservices';
import CheckOut from './pages/CheckOut/CheckOut';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import SingUp from './pages/Login/SignUp/SingUp';
import ManageService from './pages/ManageService';
import Notfownd from './pages/Notfownd/Notfownd';
import ServiceDettail from './pages/ServiceDettail/ServiceDettail';
import Footer from './pages/sheare/Footer/Footer';
import Header from './pages/sheare/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/service/:serviceId' element={<ServiceDettail></ServiceDettail>}></Route>
         <Route path='/about' element={<RequireAuth><About></About></RequireAuth>}></Route>
         <Route path='/login' element={<Login></Login>}> </Route>
         <Route path='/register' element={<SingUp></SingUp>}> </Route>
         <Route path='/checkOut/:serviceId' element={<RequireAuth><CheckOut></CheckOut></RequireAuth>}></Route>
        <Route path='/addservice' element={<Addservices></Addservices>}></Route>
        <Route path='/manageservice' element={<ManageService></ManageService>}></Route>
         <Route path='*' element={<Notfownd></Notfownd>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;