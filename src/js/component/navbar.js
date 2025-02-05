import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "white" }}>
            <div className="container-fluid">
            <div className="collapse navbar-collapse d-flex justify-content-end" style={{ marginRight: "100px" }}>

                    <Link to="/add-contact">
                        <button className="btn btn-success">Añadir Contacto</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;











