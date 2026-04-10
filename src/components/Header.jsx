import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const site = useSelector((state) => state.data.site);

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex-1">
          <NavLink to="/" className="text-xl font-bold text-slate-900 sm:text-2xl">
            {site.site_title || 'Solar Lights Store'}
          </NavLink>
          <p className="hidden text-sm text-slate-500 sm:block">{site.meta_description || 'Solar lights for gardens, homes, and outdoor spaces.'}</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 text-slate-700 md:flex">
          <NavLink to="/" className={({ isActive }) => isActive ? 'font-semibold text-primary' : 'hover:text-primary transition-colors'}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'font-semibold text-primary' : 'hover:text-primary transition-colors'}>Products</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'font-semibold text-primary' : 'hover:text-primary transition-colors'}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'font-semibold text-primary' : 'hover:text-primary transition-colors'}>Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => isActive ? 'font-semibold text-primary' : 'text-slate-700 hover:text-primary transition-colors'}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => isActive ? 'font-semibold text-primary' : 'text-slate-700 hover:text-primary transition-colors'}
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => isActive ? 'font-semibold text-primary' : 'text-slate-700 hover:text-primary transition-colors'}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => isActive ? 'font-semibold text-primary' : 'text-slate-700 hover:text-primary transition-colors'}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

