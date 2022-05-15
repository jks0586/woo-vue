import rest from './rest'
class ProductService {
  products () {
    return rest.get('products')
  }
  getProduct(id){
    return rest.get('product/'+id);
  }
}

export default new ProductService()
