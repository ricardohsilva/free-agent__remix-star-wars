import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  MetaFunction,
  useTransition,
  HeadersFunction,
} from "remix";

import { store } from "./shared/store";
import { Provider } from "react-redux";

import Cover from "./shared/components/cover";
import Toolbar from "./shared/components/toolbar";
import Loading from "./shared/components/loading";
import Search from "./shared/components/search";

import globalStyles from "~/assets/css/global.css";
import toolbarStyles from "~/assets/css/toolbar.css";
import coverStyles from "~/assets/css/cover.css";
import archivoFont from "~/assets/css/fonts.css";
import buttonStyles from "~/assets/css/button.css";
import productListStyles from "~/assets/css/product-list.css";
import loadingStyles from "~/assets/css/loading.css";
import selectStyles from "~/assets/css/select.css";
import breadcrumbStyles from "~/assets/css/breadcrumb.css";
import searchStyles from "~/assets/css/search.css";
import error404 from "~/assets/images/error.png";

export const headers: HeadersFunction = ({ loaderHeaders, parentHeaders }) => {
  return {
    "Cache-Control": "max-age=600, s-maxage=600 stale-while-revalidate=600"
  };
}

export const meta: MetaFunction = () => {
  return { title: "Remix Star Wars Toys" };
};

export const links = () => [
  // Global Styles
  { rel: 'stylesheet', href: globalStyles },

  //Componnet Styles
  { rel: 'stylesheet', href: toolbarStyles },
  { rel: 'stylesheet', href: archivoFont },
  { rel: 'stylesheet', href: coverStyles },
  { rel: 'stylesheet', href: buttonStyles },
  { rel: 'stylesheet', href: productListStyles },
  { rel: 'stylesheet', href: loadingStyles },
  { rel: 'stylesheet', href: selectStyles },

  { rel: 'stylesheet', href: breadcrumbStyles },
  { rel: 'stylesheet', href: searchStyles },
  { rel: 'preconnect', href: "https://fonts.googleapis.com" },
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100;0,700;1,400&display=swap' },
];

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document >
  );
}

function Document({ children }: any) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}

export function Layout({ children }: any) {
  return (
    <>
      <Provider store={store}>
        <Toolbar />
        <Search />
        {children}
      </Provider>
    </>
  )
}

// General Errors
export function ErrorBoundary({ error }: any) {
  return (
    <Document>
      <Layout>
        <Cover
          image={error404}
          title="Error Boundary - Root"
          titleColor="black"
          backgroundSize="contain"
          backgroundPosition="center"
          backgroundColor="#f1f1f1"
        />
        <div className="responsive-container">
          <div className="error">
            <h2>Something went wrong :(</h2>
            <p>{error.message}</p>
          </div>
        </div>
      </Layout>
    </Document>
  );
}

// General Status Errors
export function CatchBoundary() {
  const caught = useCatch();
  return (
    <Document>
      <Layout>
        <Cover
          image={error404}
          title="Catch Boundary Error - Root"
          titleColor="black"
          backgroundSize="contain"
          backgroundPosition="center"
          backgroundColor="#f1f1f1"
        />
        <div className="responsive-container">
          <div className="error">
            <h2>ERROR: {caught.statusText} {caught.status}</h2>
            <p>{caught.data.message}</p>
          </div>

        </div>
      </Layout>
    </Document>
  );
}