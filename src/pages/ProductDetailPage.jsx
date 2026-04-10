import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductGallery from '../components/ProductGallery.jsx';
import { createWhatsAppLink } from '../utils/whatsapp.js';

function ProductDetailPage() {
  const { productCode } = useParams();
  const products = useSelector((state) => state.data.products);
  const site = useSelector((state) => state.data.site);

  const product = useMemo(
    () => products.find((item) => item.product_code === productCode),
    [products, productCode]
  );

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Product not found</h2>
        <p className="mt-4 text-slate-600">Please return to the products page and select another item.</p>
        <Link to="/products" className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-white hover:bg-teal-600">Back to products</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 sm:space-y-8 sm:px-0">
      <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          <div className="order-2 lg:order-1">
            <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{product.name}</h1>
            <p className="mt-3 text-slate-600 sm:mt-4">{product.description}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-4 sm:p-6">
                <p className="text-sm text-slate-500">Minimum order quantity</p>
                <p className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">{product.min_order_qty}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4 sm:p-6">
                <p className="text-sm text-slate-500">Price</p>
                <p className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">{product.price ? `₹${product.price}` : 'Request quote'}</p>
              </div>
            </div>
            {product.attributes && Object.keys(product.attributes).length > 0 && (
              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:mt-8 sm:p-6">
                <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">Product details</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {Object.entries(product.attributes).map(([key, value]) => (
                    <div key={key} className="rounded-2xl bg-white p-3 shadow-sm sm:p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500 sm:text-sm">{key.replaceAll('_', ' ')}</p>
                      <p className="mt-2 text-sm text-slate-700 sm:text-base">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <a
              href={createWhatsAppLink({ whatsappNumber: site.whatsapp_number, productName: product.name, productCode: product.product_code })}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white transition hover:bg-teal-600 sm:mt-8 sm:w-auto"
            >
              Enquire on WhatsApp
            </a>
          </div>
          <ProductGallery images={product.images} className="order-1 lg:order-2" />
        </div>
      </section>
    </div>
  );
}

export default ProductDetailPage;
