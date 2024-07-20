import { Link } from "react-router-dom";


const Page404 = () => {
  
  return (
    <section>
      <div className="page-404">
        <h1 className="404-heading">
          404
        </h1>
        <p>Go to
          <Link className="go-to-home ms-1" to="/">
            Homepage
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Page404;