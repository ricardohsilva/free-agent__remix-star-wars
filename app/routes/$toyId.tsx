import { useEffect, useState } from "react";
import { json, LoaderFunction, useLoaderData, useTransition } from "remix";
import Button from "~/shared/components/button";
import Loading from "~/shared/components/loading";
import { IToy } from "~/shared/interfaces/toy.interface";
import { db } from "~/shared/services/db.server";
import { addToCart } from "~/shared/store/cart/cart.slice";
import { useAppDispatch } from "~/shared/store/hooks";


/*
  Remix Loader
*/
export let loader: LoaderFunction = async ({ params }) => {
  const toyIdParam: string | undefined = params.toyId;
  let toy;
  if (toyIdParam) {
    const toyId = parseInt(toyIdParam);
    if (!isNaN(toyId)) {
      toy = await db.toy.findUnique({
        where: {
          id: toyId
        },
        include: {
          images: true
        }
      });
    }

    if (!toy) {
      throw json(
        { message: 'Product does not exist' },
        {
          status: 404
        }
      )
    }
    return json(toy);
  }
};


/* 
  Component 
*/
export default function ToyDetails() {
  const toy = useLoaderData<IToy>();
  const transition = useTransition();
  const [selectedImage, setSelectedImage] = useState<string>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!selectedImage && toy) {
      setSelectedImage(toy.images[0].imageSrc);
    }
  }, [toy]);

  const getSelectedItem = (itemSrc: string): string => {
    if (itemSrc === selectedImage) {
      return '1px solid black';
    } else {
      return '';
    }
  }
  return (
    <>
      <Loading isLoading={transition.state === 'loading' ? true : false} />
      <div className="spacer-16"></div>
      <div className="responsive-container">
        <p style={{ margin: '1rem 0' }}>Bread Crumble?</p>
        <div className="spacer-16"></div>
        <div className="toy-details">
          <div className="toy-details--img-wrapper">
            <div className="toy-details--img-wrapper--inner">
              {toy.images.map((image, index) => {
                return (
                  <div onClick={() => setSelectedImage(image.imageSrc)} key={index} style={{ border: getSelectedItem(image.imageSrc) }} className="toy-details--img-wrapper--inner--thumb pointer">
                    <div style={{ backgroundImage: `url(${image.imageSrc})` }} className="toy-details--image"></div>
                  </div>
                )
              })
              }
            </div>
            <div className="toy-details--image" style={{ backgroundImage: `url(${selectedImage})` }}></div>
          </div>
          <div className="toy-details--product-details">
            <h3 className="toy-details--product-details--text">{toy.name}</h3>
            <div className="toy-details--divider"></div>
            <h3>${toy.price}.00</h3>
            <Button label="Add to Cart" callback={() => dispatch(addToCart(toy))} />
          </div>
        </div>
      </div>
    </>
  );
}
