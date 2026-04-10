import { useSelector } from 'react-redux';
import ProductFilters from '../components/ProductFilters.jsx';
import ProductGrid from '../components/ProductGrid.jsx';

function ProductsPage() {
  const products = useSelector((state) => state.data.products);

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 sm:space-y-8 sm:px-0">
      <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Products</p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">Product catalog</h1>
          </div>
          <p className="text-sm text-slate-500">{products.length} available products and custom solar lighting packages.</p>
        </div>
        <ProductFilters />
        <ProductGrid />
      </section>
    </div>
  );
}

export default ProductsPage;
