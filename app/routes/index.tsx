import {
  json,
  LoaderFunction,
  Outlet,
  useLoaderData,
  useSubmit,
  useTransition
} from "remix";

import Cover from "~/shared/components/cover";
import ProductList from "~/shared/components/product-list";
import Loading from "~/shared/components/loading";
import Select from "~/shared/components/select";

import homeStyles from "~/assets/css/home.css";
import cover from '~/assets/images/cover.png';
import { getToys } from "~/shared/services/toy.service";
import { IHome } from "~/shared/interfaces/home.interface";

/* 
  Remix Styles for this Page 
*/
export function links() {
  return [
    {
      rel: "stylesheet",
      href: homeStyles
    }
  ];
}

/* 
  Remix Loader Data 
*/
export const loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  const sortDirection = url.searchParams.get('sortDirection');
  const name = url.searchParams.get('name');
  const data = await getToys(sortDirection, name, 0);
  return json(data,
    {
      headers: { "Cache-Control": "max-age=300, s-maxage=300 stale-while-revalidate=300" }
    }
  );
}

/* 
  Component 
*/
export default function Home() {
  const data = useLoaderData<IHome>();
  const submit = useSubmit();
  const transition = useTransition();
  const isLoading = transition.state === 'loading' ? true : false;

  return (
    <>
      <Loading isLoading={isLoading} />
      <div className="home">
        <Cover
          image={cover}
          title="Star Wars Toys"
          titleColor="white"
          backgroundSize="cover"
          backgroundPosition="center"
        />
        <div className="spacer-16"></div>
        <div className="responsive-container">
          <div className="home--filter-container">
            <p className="sm">{data.count} Total Products</p>
            <Select
              label="Sort By"
              onSelect={(value) => submit({ sortDirection: value.toString() }, { action: '/' })}
              options={[{ name: 'Price (Low to High)', value: 'asc' }, { name: 'Price (High to Low)', value: 'desc' }]}
            />
          </div>
          <ProductList toys={data.toys} />
          <Outlet />
        </div>
      </div>
    </>
  );
}
