import {
  Link,
  LoaderFunction,
  Outlet,
  useLoaderData,
  useParams,
  useSearchParams,
  useSubmit,
  useTransition
} from "remix";

import Cover from "~/shared/components/cover";
import ProductList from "~/shared/components/product-list";
import Loading from "~/shared/components/loading";
import Select from "~/shared/components/select";

import homeStyles from "~/assets/css/home.css";
import coverGif from '~/assets/images/darth-vader-cover.gif';
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
  Breadcrumb
*/
export const handle = {
  breadcrumb: () => <Link to="/">Some Route</Link>
};

/* 
  Remix Loader Data 
*/
export const loader: LoaderFunction = async ({ request }) => {
  console.log('-------------------------------------------------- LOADING INDEX --------------------------------------------------')
  let url = new URL(request.url);
  const sortDirection = url.searchParams.get('sortDirection');
  const data = await getToys(sortDirection);
  return data;
}

/* 
  Component 
*/
export default function Home() {
  const data = useLoaderData<IHome>();
  const submit = useSubmit();
  const transition = useTransition();
  
  return (
    <>
      <Loading isLoading={transition.state === 'submitting' ? true : false} />
      <div className="home">
        <Cover
          image={coverGif}
          title="Star Wars Toys"
          titleColor="white"
          backgroundSize="cover"
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
