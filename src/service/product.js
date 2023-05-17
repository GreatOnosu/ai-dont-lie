import PRODUCT_DETAILS from "../data/productInfo.json"

export const getProduct = productId => {
  return PRODUCT_DETAILS.filter(product => product.productId === productId)[0].descriptions.new_description
}
