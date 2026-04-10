import fs from 'node:fs/promises';
import path from 'node:path';

const getExtension = (url) => {
  const match = url.match(/\.([a-z0-9]+)(?:\?|$)/i);
  return match ? match[1] : 'jpg';
};

export const downloadImages = async (products) => {
  const downloaded = [];

  for (const product of products) {
    const dir = path.resolve('public', 'images', 'products', product.product_code);
    await fs.mkdir(dir, { recursive: true });

    product.images = await Promise.all(
      product.images.map(async (imageUrl, index) => {
        if (!imageUrl.startsWith('http')) {
          return imageUrl;
        }

        const extension = getExtension(imageUrl);
        const fileName = `${index + 1}.${extension}`;
        const filePath = path.join(dir, fileName);
        const response = await fetch(imageUrl);
        if (!response.ok) {
          throw new Error(`Image download failed for ${imageUrl}`);
        }

        const buffer = Buffer.from(await response.arrayBuffer());
        await fs.writeFile(filePath, buffer);
        downloaded.push(filePath);
        return `/images/products/${product.product_code}/${fileName}`;
      })
    );
  }

  return downloaded;
};
