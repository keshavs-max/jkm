export const createWhatsAppLink = ({ whatsappNumber, productName, productCode }) => {
  if (!whatsappNumber) {
    return '#';
  }

  const text = productName
    ? `Hi, I'm interested in ${productName} (${productCode}). Can you share pricing and availability?`
    : 'Hi, I would like to know more about your solar lights offerings.';

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
};
