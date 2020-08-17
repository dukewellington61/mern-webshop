export const calculateGrandTotal = (cart) => {
  let sum = 0;

  // if fn call comes from @components/cart/GrantTotal.js, it has cart.line_items
  // if fn call comes from @components/order/InvoiceGrandTotal.js it has cart.invoice_items
  cart.line_items
    ? cart.line_items.forEach(
        (line_item) => (sum += line_item.quantity * line_item.price)
      )
    : cart.invoice_items.forEach(
        (line_item) => (sum += line_item.quantity * line_item.price)
      );
  return sum;
};

export const calculateSubtotal = (line_item) =>
  line_item.quantity * line_item.price;
