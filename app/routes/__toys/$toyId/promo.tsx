import { json, LoaderFunction, useCatch } from 'remix';
import promoGif from '~/assets/images/promo.gif';
import crashGif from '~/assets/images/crash.gif';

/* 
  Remix Loader Data 
*/
export const loader: LoaderFunction = async ({ params }) => {
    const toyIdParam: string | undefined = params.toyId;

    // Force Error if Toy Id is 1.
    if (!toyIdParam || toyIdParam === '1') {
        throw json(
            { message: 'Something went wrong! :(' },
            { status: 500 }
        )
    }

    return null;
}

/* 
  Remix Error Handler
*/
export function CatchBoundary() {
    const caught = useCatch();
    return (
        <div className="promo">
            <div className='promo--image-crash' style={{ backgroundImage: `url(${crashGif})` }}>
                <p className='promo--image--text--crash'><b>ERROR: {caught.status}</b></p>
                <p className='promo--image--text--crash'><b>{caught.data.message}</b></p>
            </div>
        </div>
    );
}

/* 
  Component 
*/
export default function Promo() {
    return (
        <div className="promo">
            <div className='promo--image' style={{ backgroundImage: `url(${promoGif})` }}>
                <div className='promo--image--text'>
                    <p>15% Off!!</p>
                </div>
            </div>
        </div>
    );
}
