import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Navbar from "../component/navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
    const { store, actions } = useContext(Context);
    const [show, setShow] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    
    const handleClose = () => setShow(false);
    const handleShow = (contact) => {
        setSelectedContact(contact);
        setShow(true);
    };

    const handleDelete = () => {
        if (selectedContact) {
            actions.deleteUser(selectedContact.id);
            setShow(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <ul className="list-group">
                    {store.contacts && store.contacts.length > 0 && store.contacts.map((contact) => (
                        <li key={contact.id} className="list-group-item">
                            <div className="contact-item d-flex justify-content-between align-items-center mb-3 p-1">
                                <img 
                                    src="https://picsum.photos/200/300?grayscale" 
                                    className="img-fluid rounded-circle ms-3 me-3" 
                                    alt="Contact" 
                                    style={{ width: '120px', height: '120px', objectFit: 'cover' }} 
                                />
                                <div className="d-flex flex-column align-items-start text-start flex-grow-1 ms-5">
                                    <p className="h4 text-black mb-1">{contact.name}</p>
                                    <p className="text-secondary fw-bold d-flex align-items-center gap-2">
                                        <i className="bi bi-geo-alt-fill" style={{ width: "24px", textAlign: "center" }}></i>
                                        {contact.address}
                                    </p>
                                    <p className="text-secondary d-flex align-items-center gap-2">
                                        <i className="bi bi-telephone-fill" style={{ width: "24px", textAlign: "center" }}></i>
                                        {contact.phone}
                                    </p>
                                    <p className="text-secondary d-flex align-items-center gap-2">
                                        <i className="bi bi-envelope-fill" style={{ width: "24px", textAlign: "center" }}></i>
                                        {contact.email}
                                    </p>
                                </div>

                                <div className="d-flex position-absolute top-0 end-0 mt-2 ms-4">
                                    <Link to={`/edit-contact/${contact.id}`} className="me-4 p-0 text-dark">
                                        <i className="bi bi-pencil-fill fs-4"></i>
                                    </Link>
                                    <button onClick={() => handleShow(contact)} className="btn p-0 text-dark">
                                        <i className="bi bi-trash-fill fs-4"></i>
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {show && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Eliminar Contacto</h5>
                                <button type="button" className="btn-close" onClick={handleClose}></button>
                            </div>
                            <div className="modal-body">
                                <p>¿Estás seguro de eliminar el contacto?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Contact;






















