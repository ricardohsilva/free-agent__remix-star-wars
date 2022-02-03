import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  MetaFunction,
  useTransition
} from "remix";

import Cover from "./shared/components/cover";

import Toolbar from "./shared/components/toolbar";
import globalStyles from "~/assets/css/global.css";
import toolbarStyles from "~/assets/css/toolbar.css";
import coverStyles from "~/assets/css/cover.css";
import archivoFont from "~/assets/css/fonts.css";
import buttonStyles from "~/assets/css/button.css";
import productListStyles from "~/assets/css/product-list.css";
import loadingStyles from "~/assets/css/loading.css";
import selectStyles from "~/assets/css/select.css";
import error404 from "~/assets/images/error.png";
import Loading from "./shared/components/loading";

export const meta: MetaFunction = () => {
  return { title: "Remix Star Wars Toys" };
};

export const links = () => [
  { rel: 'stylesheet', href: globalStyles },
  { rel: 'stylesheet', href: toolbarStyles },
  { rel: 'stylesheet', href: archivoFont },
  { rel: 'stylesheet', href: coverStyles },
  { rel: 'stylesheet', href: buttonStyles },
  { rel: 'stylesheet', href: productListStyles },
  { rel: 'stylesheet', href: loadingStyles },
  { rel: 'stylesheet', href: selectStyles },
  { rel: 'preconnect', href: "https://fonts.googleapis.com" },
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100;0,700;1,400&display=swap' },
]

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
        <Toolbar />
        {children}
    </>
  )
}

// General Errors
export function ErrorBoundary({ error }: any) {
  const transition = useTransition();

  return (
    <Document>
      <Layout>
        <Loading isLoading={transition.state === 'loading' ? true : false} />
        <Cover
          image={error404}
          title="Boundary Global Error"
          titleColor="black"
          backgroundSize="contain"
          backgroundPosition="center"
          backgroundColor="#f1f1f1"
        />
        <div className="responsive-container">
          <h1>Something went wrong :(</h1>
          <p>{error.message}</p>
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
        <div className="responsive-container">
          <div>
            ERROR: {caught.statusText} {caught.status}
          </div>
          <div>{caught.data.message}</div>
        </div>
      </Layout>
    </Document>
  );
}
