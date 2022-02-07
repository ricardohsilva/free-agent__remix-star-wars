import { Link, Outlet } from "remix";


/* 
  Remix useMatches handlers 
*/
export const handle = {
  breadcrumb: () => {
    return (
      <>
        <Link className="breadcrumb--wrapper--link" to={`/`}><p className="sm">Home</p></Link>
      </>
    )
  }
};

/* 
  Component 
*/
export default function Toys() {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
}
