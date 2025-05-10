import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { UIContext } from '../../context/UIContext';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import MobileMenu from '../header/MobileMenu';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';
import ContactModal from '../property/ContactModal';

const MainLayout = () => {
  const { 
    isLoginModalOpen, 
    isRegisterModalOpen, 
    isContactModalOpen,
    contactPropertyId,
    mobileMenuOpen
  } = useContext(UIContext);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Mobile menu for responsive design */}
      {mobileMenuOpen && <MobileMenu />}
      
      {/* Main content area */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
      
      {/* Modals */}
      {isLoginModalOpen && <LoginModal />}
      {isRegisterModalOpen && <RegisterModal />}
      {isContactModalOpen && contactPropertyId && (
        <ContactModal propertyId={contactPropertyId} />
      )}
    </div>
  );
};

export default MainLayout;
