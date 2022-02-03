import { useEffect, useRef, useState } from "react"
import { IToy } from "~/shared/interfaces/toy.interface";
import Button from "../button";

interface IProps {
    toy: IToy
}

export default function ProductCard({ toy }: IProps) {
    const [isHovering, setIsHovering] = useState<boolean>();
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const currentImageRef = useRef<number>(0);

    useEffect(() => {
        let interval: any;
        if (isHovering) {
            interval = setInterval(() => changeBackgroundImage(), 1500);
        } else {
            if (interval) {
                clearInterval(interval);
            }
        }
        return () => interval ? clearInterval(interval) : undefined
    }, [isHovering]);

    const changeBackgroundImage = () => {
        if (toy.images.length === currentImageRef.current + 1) {
            currentImageRef.current = 0;
        } else {
            currentImageRef.current += 1;
        }
        setCurrentImageIndex(currentImageRef.current);
    }


    const addToStore = () => {

    }

    return (
        <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="pointer product-card">
            <div className="product-card--safe-area"></div>
            <div className="product-card--image" style={{ backgroundImage: `url(${toy.images[currentImageIndex].imageSrc})` }}></div>
            <p className="pointer product-card--name">{toy.name}</p>
            <p className="product-card--price">${toy.price}.00</p>

            {isHovering &&
                <Button label="Add to Cart" callback={() => addToStore()} />
            }
        </div>
    )
}