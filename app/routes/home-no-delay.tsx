import { LoaderFunction, useLoaderData, useSubmit, useTransition } from "remix";

import Cover from "~/shared/components/cover";
import ProductList from "~/shared/components/product-list";

import coverGif from '~/assets/images/darth-vader-cover.gif';
import { db } from "~/shared/services/db.server";
import homeStyles from "~/assets/css/home.css";
import { IToy } from "~/shared/interfaces/toy.interface";
import Loading from "~/shared/components/loading";
import Select from "~/shared/components/select";

/* 
  Data Interface 
*/
interface IData {
  toys: IToy[]
  count: number
}

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
  const data = {
    toys: await db.toy.findMany({
      take: 30,
      orderBy: { price: sortDirection === 'desc' || sortDirection === 'asc' ? sortDirection : 'desc' },
      include: {
        images: true,
      }
    }),
    count: await db.toy.count()
  }

  return data;
}

/* 
  Component 
*/
export default function Index() {
  const data = useLoaderData<IData>();
  const submit = useSubmit();
  const transition = useTransition();

  const onSortDirectionSelect = (value: string) => {
    submit({ sortDirection: value }, { replace: true });
  }

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
              onSelect={(value) => onSortDirectionSelect(value.toString())}
              options={[{ name: 'Price (Low to High)', value: 'asc' }, { name: 'Price (High to Low)', value: 'desc' }]}
            />
          </div>
          <ProductList toys={data.toys} />
        </div>
      </div>
    </>
  );
}
