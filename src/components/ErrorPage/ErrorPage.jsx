import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    console.log(error)

    return (
        <div>
            <h2>Oops!!!</h2>
            <p><i>{error.statusText || error.message}</i></p>
            {
                error.status === 404 && <div>
                    <h2>Page Not Found</h2>
                    <p>Please Go Back To Home Page</p>
                    <Link to="/"><button>Go Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;