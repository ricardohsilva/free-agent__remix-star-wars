import { useEffect, useState } from "react";
import {
  json,
  LoaderFunction,
  Outlet,
  useLoaderData,
  useMatches,
  useNavigate,
  useNavigationType,
  useResolvedPath,
  useTransition
} from "remix";
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
  console.log('Toy id')
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
  Remix useMatches handlers
*/
export const handle = {
  breadcrumb: (data: IToy) => {
    return (
      <>
        <div className="breadcrumb--wrapper--separator"></div>
        <div className="breadcrumb--wrapper--link"><p className="sm">{data.name}</p></div>
      </>
    )
  }
};

/* 
  Component 
*/
export default function ToyDetails() {
  const matches = useMatches();
  const toy = useLoaderData<IToy>()
  const transition = useTransition();
  const [selectedImage, setSelectedImage] = useState<string>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  


  useEffect(() => {
    if (!selectedImage && toy || navigationType === 'REPLACE') {
      setSelectedImage(toy.images[0].imageSrc);
    }
  }, [toy, navigationType]);

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
        <div style={{ margin: '1rem 0' }}>
          <div className="breadcrumb">
            {matches
              // skip routes that don't have a breadcrumb
              .filter(
                match =>
                  match.handle && match.handle.breadcrumb
              )
              // render breadcrumbs!
              .map((match, index) => {
                return <div key={index} className="breadcrumb--wrapper">
                  {match.handle.breadcrumb(match.data)}
                </div>
              })}
          </div>

        </div>
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
            <Button label="Promo" callback={() => navigate(`/${toy.id}/promo`)} />
            <Outlet />
          </div>
        </div>
      </div>
    </>

  );
}
