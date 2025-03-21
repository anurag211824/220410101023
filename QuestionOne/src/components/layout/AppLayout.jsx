
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useNavigation } from 'react-router-dom'; 

const AppLayout = () => {
  const navigation =useNavigation()
  console.log(navigation);
  
  return (
    <>
    
      <Header />
      
     
      <Outlet />
      
    
      <Footer />
    </>
  );
};

export default AppLayout; 
