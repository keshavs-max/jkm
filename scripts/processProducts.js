const STANDARD_FIELDS = [
  'product_code',
  'name',
  'description',
  'category',
  'min_order_qty',
  'image_1',
  'image_2',
  'image_3',
  'price',
];

export const processProducts = (rawProducts) => {
  return rawProducts.map((item) => {
    const images = ['image_1', 'image_2', 'image_3']
      .map((field) => item[field]?.trim())
      .filter(Boolean);

    const attributes = {};
    Object.entries(item).forEach(([key, value]) => {
      if (!STANDARD_FIELDS.includes(key) && value?.trim()) {
        attributes[key] = value.trim();
      }
    });

    return {
      product_code: item.product_code?.trim() || '',
      name: item.name?.trim() || '',
      description: item.description?.trim() || '',
      category: item.category?.trim() || 'uncategorized',
      min_order_qty: Number(item.min_order_qty) || 1,
      price: item.price ? Number(item.price) : null,
      images,
      attributes,
    };
  });
};
