import ProductCard from './ProductCard.jsx';
import { useSelector } from 'react-redux';

function ProductGrid() {
  const products = useSelector((state) => state.data.products);
  const selectedCategory = useSelector((state) => state.data.selectedCategory);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {filteredProducts.map((product) => (
        <ProductCard key={product.product_code} product={product} />
      ))}
      {filteredProducts.length === 0 && (
        <div className="col-span-full rounded-3xl border border-slate-200 bg-white p-8 text-slate-600 shadow-sm">
          No products found for this category.
        </div>
      )}
    </div>
  );
}

export default ProductGrid;
