import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { fetchSiteData } from './store/productsSlice.js';

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.data.status);

  useEffect(() => {
    dispatch(fetchSiteData());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen grid place-items-center bg-surface text-slate-800 px-4">
        <div className="text-center">
          <p className="text-2xl font-semibold">Loading site data...</p>
          <p className="mt-2 text-sm text-slate-600">Preparing your solar lights storefront.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface text-slate-900">
      <Header />
      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productCode" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
