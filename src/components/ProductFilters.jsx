import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../store/productsSlice.js';

function ProductFilters() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.data.categories);
  const selectedCategory = useSelector((state) => state.data.selectedCategory);

  return (
    <div className="mb-8 flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={() => dispatch(setSelectedCategory('all'))}
        className={`rounded-full border px-4 py-2 text-sm transition ${selectedCategory === 'all' ? 'border-primary bg-primary/10 text-primary' : 'border-slate-300 bg-white text-slate-700 hover:border-primary hover:text-primary'}`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => dispatch(setSelectedCategory(category.id))}
          className={`rounded-full border px-4 py-2 text-sm transition ${selectedCategory === category.id ? 'border-primary bg-primary/10 text-primary' : 'border-slate-300 bg-white text-slate-700 hover:border-primary hover:text-primary'}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default ProductFilters;
