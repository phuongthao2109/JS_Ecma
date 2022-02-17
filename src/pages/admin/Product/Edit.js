import { setTitle } from "../../../utils";
const ProductEdit = {
   after_render() { },
   before_render() { setTitle("Product Add Page") },
   render() {
     return /*html*/ `
     edit product
   `
   }
}
export default ProductEdit;