function ProductGallery({ images, className = '' }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`grid gap-3 sm:gap-4 ${images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} ${className}`}>
      {images.map((image, index) => (
        <div key={`${image}-${index}`} className="overflow-hidden rounded-3xl bg-slate-100">
          <img src={image} alt={`Product image ${index + 1}`} className="h-64 w-full object-cover sm:h-80" />
        </div>
      ))}
    </div>
  );
}

export default ProductGallery;
