import { useEffect, useRef, useState } from "react"
import { Link } from "remix";
import { IToy } from "~/shared/interfaces/toy.interface";
import { addToCart } from "~/shared/store/cart/cart.slice";
import { useAppDispatch } from "~/shared/store/hooks";
import Button from "../button";

interface IProps {
    toy: IToy
}

export default function ProductCard({ toy }: IProps) {
    const [isHovering, setIsHovering] = useState<boolean>();
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const currentImageRef = useRef<number>(0);
    const dispatch = useAppDispatch();

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
        if (toy.images?.length === currentImageRef.current + 1) {
            currentImageRef.current = 0;
        } else {
            currentImageRef.current += 1;
        }
        setCurrentImageIndex(currentImageRef.current);
    }

    const addToItem = () => {
        dispatch(addToCart(toy));
    }

    return (
        <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="product-card">

            <div className="product-card--safe-area"></div>
            {toy && toy.images &&
                <div className="product-card--image" style={{ backgroundImage: `url(${toy.images[currentImageIndex].imageSrc})` }}></div>
            }
            <Link to={`/${toy.id}`} prefetch='none' style={{ textDecoration: 'none' }} className='product-card--name'>
                <p>{toy.name}</p>
            </Link>
            <p className="product-card--price">${toy.price}.00</p>

            {isHovering &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button label="Add to Cart" callback={() => addToItem()} />
                </div>
            }
        </div>
    )
}