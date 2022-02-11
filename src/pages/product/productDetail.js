import { listProduct } from "../../data/listProduct";
import { setTitle } from "../../utils/index";

const ProductDetails = {
    state: {
        data: {},
    },
    before_render(params) {
        let newsData = listProduct.find((item) => item.slug == params.slug);
        this.state.data = newsData;
        setTitle(this.state.data.title);
    },
    after_render() {},
    render() {
        const { data } = this.state;
        return /* html */ `
            <h1>${data.name}</h1>
            <strong>${data.short_description}</strong>
            <img src="${data.image}">
            <p>${data.description}</p>
        `;
    },
};

export default ProductDetails;