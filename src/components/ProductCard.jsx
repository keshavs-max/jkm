import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="h-64 overflow-hidden bg-slate-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
          <p className="mt-2 text-sm text-slate-600">{product.description}</p>
        </div>
        <div className="flex items-center justify-between gap-2 text-sm text-slate-700">
          <span>MOQ: {product.min_order_qty}</span>
          {product.price && <span>₹{product.price}</span>}
        </div>
        <Link
          to={`/products/${product.product_code}`}
          className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
        >
          View details
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
