import rest from './rest'
class ProductService {
  products () {
    return rest.get('products')
  }
}

export default new ProductService()
