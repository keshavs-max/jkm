export const validateData = ({ site, products, categories }) => {
  const errors = [];
  const requiredSiteKeys = ['site_title', 'meta_description', 'whatsapp_number', 'email', 'phone', 'address'];

  requiredSiteKeys.forEach((key) => {
    if (!site?.[key]) {
      errors.push(`Missing required site_config field: ${key}`);
    }
  });

  const categoryIds = new Set(categories.map((category) => category.id));
  const productCodes = new Set();

  products.forEach((product, index) => {
    if (!product.product_code) {
      errors.push(`Product row ${index + 1} is missing product_code`);
    }

    if (productCodes.has(product.product_code)) {
      errors.push(`Duplicate product_code: ${product.product_code}`);
    }
    productCodes.add(product.product_code);

    if (!product.name) {
      errors.push(`Product ${product.product_code || index + 1} is missing name`);
    }

    if (!product.category) {
      errors.push(`Product ${product.product_code} is missing category`);
    } else if (!categoryIds.has(product.category)) {
      errors.push(`Product ${product.product_code} has invalid category: ${product.category}`);
    }

    if (!product.images || product.images.length === 0) {
      errors.push(`Product ${product.product_code} must include at least one image`);
    }
  });

  return errors;
};
