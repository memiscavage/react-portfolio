import { useRouteError } from "react-router-dom";
export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Error</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <p>Sorry, this page doesn't exist 🥺 Please enjoy my other pages! </p>
        </div>
    )
}