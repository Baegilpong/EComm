import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ClientManagement from './views/ClientManagement/ClientManagement';
import ClientMenuItem from './views/ClientMenuItem/ClientMenuItem';
import NavBar from './components/Navbar/Navbar';
import ClientNavBar from './components/ClientNavBar/clientNavBar';
import AboutUs from './views/AboutUs/AboutUs'
import Cart from './views/Cart/Cart'
import ContactUs from './views/ContactUs/ContactUs'
import Login from './views/Login/Login'
import Signup from './views/Signup/Signup'
import ForgotPassword from './views/ForgotPassword/ForgotPassword'
import ClientAdmin from './views/ClientAdmin/ClientAdmin';
import LandingPage from './views/LandingPage/LandingPage';
import Menu from './views/Menu/Menu';
import OrderHistory from './views/OrderHistory/OrderHistory';
import OrderTracker from './views/OrderTracker/OrderTracker';
import Reservation from './views/Reservation/Reservation'
import ManageEmployeePage from './views/ManageEmployee/ManageEmployee'
import ManageDeliveryGuyPage from './views/ManageDeliveryGuy/ManageDeliveryGuy'
import ManageChefPage from './views/ManageChef/ManageChef'
import Reviews from './views/Review/Review';
import { useAuth, AuthProvider } from './contexts/authContext';
import { CartProvider } from './utils/CartContext';

const App = () => {
  const location = useLocation();
  
  // Determine if NavBar should be shown
  const showNavBar = ['/login', '/signup', '/forgot-password', '/about-us', '/cart', '/contact-us', '/', '/menu', '/order-history', '/order-tracker', '/reservations','/reviews'].includes(location.pathname);
  const showClientNavBar = ['/clientManagement', '/MenuItem', '/admin', '/manage-employee', '/manage-delivery-guy', '/manage-chef', ].includes(location.pathname);
  

  return (
    <div>
      {showNavBar && <NavBar />}
      {showClientNavBar && <ClientNavBar/> }
      <AuthProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path ="/admin" element={<ClientAdmin/>} />
          <Route path="/ClientManagement" element={<ClientManagement />} />
          <Route path="/MenuItem" element={<ClientMenuItem />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path ="/reservations" element={<Reservation/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />  
          <Route path="/menu" element ={<Menu/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path ="/order-history" element={<OrderHistory/>} />
          <Route path ="/order-tracker" element={<OrderTracker/>} />
          <Route path ="/reviews" element={<Reviews/>} />
          <Route path ="/manage-employee" element={<ManageEmployeePage/>} />
          <Route path ="/manage-delivery-guy" element={<ManageDeliveryGuyPage/>} />
          <Route path ="/manage-chef" element={<ManageChefPage/>} />
        </Routes>
        </CartProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
