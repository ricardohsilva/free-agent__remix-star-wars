import { useEffect, useState } from "react";
import {
  ActionFunction,
  Form,
  json,
  LoaderFunction,
  Outlet,
  redirect,
  useLoaderData,
  useMatches,
  useNavigationType,
} from "remix";
import Button from "~/shared/components/button";
import { IComment } from "~/shared/interfaces/comment.interface";
import { IToy } from "~/shared/interfaces/toy.interface";
import { db } from "~/shared/services/db.service";
import { addToCart } from "~/shared/store/cart/cart.slice";
import { useAppDispatch } from "~/shared/store/hooks";
import toyDetailsStyles from "~/assets/css/toy-details.css";

/*
  Remix Styles
*/
export const links = () => [
  { rel: 'stylesheet', href: toyDetailsStyles }
]

/*
  Remix Loader
*/
export let loader: LoaderFunction = async ({ params, context }) => {
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
          images: true,
          comments: true
        }
      });
    }

    if (!toy) {
      throw json(
        { message: 'Something went wrong :(' },
        {
          status: 404
        }
      )
    }
    return json(toy,
      {
        headers: { "Cache-Control": "max-age=1, s-maxage=1 stale-while-revalidate=200" }
      }
    );
  }
};

/* 
  Remix Actions
*/
export const action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData();
  const toyIdParam: string | undefined = params.toyId;
  const comment = form.get("comment");

  if (comment && toyIdParam) {
    const data: IComment = {
      comment: comment.toString(),
      toyId: parseInt(toyIdParam),
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    await db.comment.create({ data: data })
  }
  return redirect(`/${toyIdParam}/promo`, { headers: { "Cache-Control": "max-age=1, s-maxage=600 stale-while-revalidate=600" } });
}


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
  const [selectedImage, setSelectedImage] = useState<string>();
  const dispatch = useAppDispatch();
  const navigationType = useNavigationType();


  useEffect(() => {
    if (!selectedImage || navigationType === 'REPLACE') {
      if (toy.images) {
        setSelectedImage(toy.images[0].imageSrc);
      }
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
                // debugger
                return (
                  <div key={index} className="breadcrumb--wrapper">
                    {match.handle.breadcrumb(match.data)}
                  </div>
                )
              })}
          </div>

        </div>
        <div className="spacer-16"></div>
        <div className="toy-details">
          <div className="toy-details--img-wrapper">
            <div className="toy-details--img-wrapper--inner">
              {toy.images?.map((image, index) => {
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
            <Outlet />
            <div className="toy-details--product-details--comments">
              <h2>Comments</h2>
              {toy.comments?.map((item, index) =>
                <div className="toy-details--product-details--comments--wrapper" key={index}>
                  <p style={{ textAlign: "center" }}>{item.comment}</p></div>
              )}
            </div>
          </div>
        </div>



        <Form method="post" className="toy-details--form">
          <h2>Create a Comment to get a Deal</h2>
          <div className="toy-details--form--inner">
            <input name="comment" placeholder="Comment..." />
          </div>
          <Button label={'Create a new Comment'} type="submit" />
        </Form>
      </div>
    </>

  );
}
