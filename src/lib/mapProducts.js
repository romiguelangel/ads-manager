export function mapProducts(response) {
  return response.products.map((product, index) => {
    const formattedPrice = new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }).format(product.price);

    return {
      id: product.id,
      name: product.productName,
      description: product.productDescription,
      image: product.productImage,
      price: formattedPrice,
      ads: product.ads,
    };
  });
}
