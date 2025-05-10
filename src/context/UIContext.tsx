import { createContext, useState, ReactNode, useCallback } from 'react';

interface SearchFilters {
  type?: string;
  status?: string;
  province?: string;
  district?: string;
  ward?: string;
  priceMin?: number;
  priceMax?: number;
  areaMin?: number;
  areaMax?: number;
  bedrooms?: number;
  bathrooms?: number;
  direction?: string;
  keyword?: string;
  projectId?: string;
}

interface UIContextType {
  searchFilters: SearchFilters;
  isSearchFilterOpen: boolean;
  isLoginModalOpen: boolean;
  isRegisterModalOpen: boolean;
  isContactModalOpen: boolean;
  contactPropertyId: string | null;
  mobileMenuOpen: boolean;
  setSearchFilters: (filters: SearchFilters) => void;
  updateSearchFilter: (key: string, value: any) => void;
  resetSearchFilters: () => void;
  toggleSearchFilter: () => void;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  openRegisterModal: () => void;
  closeRegisterModal: () => void;
  openContactModal: (propertyId: string) => void;
  closeContactModal: () => void;
  toggleMobileMenu: () => void;
}

interface UIProviderProps {
  children: ReactNode;
}

export const UIContext = createContext<UIContextType>({
  searchFilters: {},
  isSearchFilterOpen: false,
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
  isContactModalOpen: false,
  contactPropertyId: null,
  mobileMenuOpen: false,
  setSearchFilters: () => {},
  updateSearchFilter: () => {},
  resetSearchFilters: () => {},
  toggleSearchFilter: () => {},
  openLoginModal: () => {},
  closeLoginModal: () => {},
  openRegisterModal: () => {},
  closeRegisterModal: () => {},
  openContactModal: () => {},
  closeContactModal: () => {},
  toggleMobileMenu: () => {},
});

export const UIProvider = ({ children }: UIProviderProps) => {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({});
  const [isSearchFilterOpen, setIsSearchFilterOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactPropertyId, setContactPropertyId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const updateSearchFilter = useCallback((key: string, value: any) => {
    setSearchFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const resetSearchFilters = useCallback(() => {
    setSearchFilters({});
  }, []);

  const toggleSearchFilter = useCallback(() => {
    setIsSearchFilterOpen((prev) => !prev);
  }, []);

  const openLoginModal = useCallback(() => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  }, []);

  const closeLoginModal = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  const openRegisterModal = useCallback(() => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  }, []);

  const closeRegisterModal = useCallback(() => {
    setIsRegisterModalOpen(false);
  }, []);

  const openContactModal = useCallback((propertyId: string) => {
    setContactPropertyId(propertyId);
    setIsContactModalOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setIsContactModalOpen(false);
    setContactPropertyId(null);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <UIContext.Provider
      value={{
        searchFilters,
        isSearchFilterOpen,
        isLoginModalOpen,
        isRegisterModalOpen,
        isContactModalOpen,
        contactPropertyId,
        mobileMenuOpen,
        setSearchFilters,
        updateSearchFilter,
        resetSearchFilters,
        toggleSearchFilter,
        openLoginModal,
        closeLoginModal,
        openRegisterModal,
        closeRegisterModal,
        openContactModal,
        closeContactModal,
        toggleMobileMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
