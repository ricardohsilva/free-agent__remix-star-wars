import { IToy } from "~/shared/interfaces/toy.interface";
import ProductCard from "./product-card";

interface IProps {
    products: IToy[],
}

export default function ProductList({ products }: IProps) {
    return (
        <div className="product-list">
            {products.map(product =>
                <ProductCard
                    key={product.id}
                    images={product.images}
                    name={product.name}
                    price={product.price}
                />)}
        </div>
    )
}