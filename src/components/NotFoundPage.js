import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <div className="notFoundPage-container">
        <h1>404 Not Found</h1>
        <Link to='/'>Go to Home</Link>
    </div>
);

export default NotFoundPage;