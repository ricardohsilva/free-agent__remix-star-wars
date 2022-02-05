import { IToy } from "~/shared/interfaces/toy.interface";

interface IProps {
    toy: IToy,
    callback: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SearchItem({ toy, callback }: IProps) {
    return (
        <>
            <div onClick={() => callback(true)} className="search-item">
                <img className="search-item--image" src={toy.images[0].imageSrc} alt="searched-product" />
                <div className="search-item--details">
                    <p>{toy.name}</p>
                    <p>${toy.price}.00</p>
                </div>
            </div>
        </>
    )
}