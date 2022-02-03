import { IToy } from "~/shared/interfaces/toy.interface";
import ProductCard from "./product-card";

interface IProps {
    toys: IToy[],
}

export default function ProductList({ toys }: IProps) {    
    return (
        <div className="product-list">
            {toys.map(toy =>
                <ProductCard
                    key={toy.id}
                    toy={toy}
                />)}
        </div>
    )
}