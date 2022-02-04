import { IToy } from "~/shared/interfaces/toy.interface";

interface IProps {
    toy: IToy
}

export default function SearchItem({ toy }: IProps) {
    return (
        <>
            <div className="search-item">
                <img className="search-item--image" src={toy.images[0].imageSrc} alt="searched-product" />
                <div className="search-item--details">
                    <p>{toy.name}</p>
                    <p>${toy.price}.00</p>
                </div>
            </div>
        </>
    )
}