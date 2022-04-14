
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import SingUp from './pages/Login/SignUp/SingUp';
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
         <Route path='/about' element={<About></About>}></Route>
         <Route path='/login' element={<Login></Login>}> </Route>
         <Route path='/register' element={<SingUp></SingUp>}> </Route>
         <Route path='*' element={<Notfownd></Notfownd>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;