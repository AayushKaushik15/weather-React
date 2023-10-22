import { useRouteError } from "react-router-dom"


const Error = () => {

    const err = useRouteError();
    console.log(err)
    
    return (
        
        <div className="error">
            <h1>Go to Home Page</h1>
            <h1>{err.status}</h1>
            <h2>{err.statusText}</h2>
        </div>
    )
}

export default Error;