// const calculateTotalSalesWithTax = (products, taxRate) => {
//   const total = products
//     .map((product) => product.price * product.quantity)
//     .reduce((total, price) => total + price, 0);
//   const totalWithtaxRate = total + total * (taxRate / 100);
//   return totalWithtaxRate;
// };

const calculateTotalSalesWithTax = (products, taxRate) => {
  //  Calculate total sales amount using the product price and quantity using the reduce method
  const totalSales = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  // Calculate the tax amount using the total sales amount and the tax rate
  const taxAmount = (totalSales * taxRate) / 100;
  // Calculate the total sales amount with tax
  const totalSalesWithTax = totalSales + taxAmount;
  // Return the total sales amount with tax rounded to 2 decimal places
  return parseFloat(totalSalesWithTax.toFixed(2));
};

export default calculateTotalSalesWithTax;
