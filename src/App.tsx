import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';

// Context Providers
import { AuthProvider } from './context/AuthContext';
import { UIProvider } from './context/UIContext';

// Layouts
import MainLayout from './components/layouts/MainLayout';

// Components
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const PropertyListingPage = lazy(() => import('./pages/PropertyListingPage'));
const PropertyDetailPage = lazy(() => import('./pages/PropertyDetailPage'));
const ProjectListingPage = lazy(() => import('./pages/ProjectListingPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const UserProfilePage = lazy(() => import('./pages/UserProfilePage'));
const SavedSearchesPage = lazy(() => import('./pages/SavedSearchesPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));
const CreateListingPage = lazy(() => import('./pages/CreateListingPage'));
const SearchResultsPage = lazy(() => import('./pages/SearchResultsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Router>
      <AuthProvider>
        <UIProvider>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="nha-dat-ban" element={<PropertyListingPage type="for-sale" />} />
                <Route path="nha-dat-cho-thue" element={<PropertyListingPage type="for-rent" />} />
                <Route path="du-an-bat-dong-san" element={<ProjectListingPage />} />
                <Route path="chi-tiet/:id" element={<PropertyDetailPage />} />
                <Route path="du-an/:id" element={<ProjectDetailPage />} />
                <Route path="tim-kiem" element={<SearchResultsPage />} />
                <Route path="dang-nhap" element={<LoginPage />} />
                <Route path="dang-ky" element={<RegisterPage />} />
                <Route path="trang-ca-nhan" element={<UserProfilePage />} />
                <Route path="tim-kiem-da-luu" element={<SavedSearchesPage />} />
                <Route path="tin-da-luu" element={<FavoritesPage />} />
                <Route path="dang-tin" element={<CreateListingPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </UIProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
