import React, { useContext } from "react";
import { Context } from "../store/appContext";
import ContactCard from "../component/contactCard";
import { Link } from "react-router-dom";

const Contact = () => {
    const { store, actions } = useContext(Context);

    const handleDelete = (id) => {
        actions.deleteUser(id);
    };

    const handleEdit = (id) => {
        console.log("Edit contact with ID:", id); 
    };

    return (
        <div>
            {store.contacts && store.contacts.length > 0 && store.contacts.map((contact) => (
                <div key={contact.id} className="contact-item d-flex justify-content-between align-items-center mb-3 p-3 border">
                    <div>
                        <p><strong>Nombre:</strong> {contact.name}</p>
                        <p><strong>Correo electrónico:</strong> {contact.email}</p>
                        <p><strong>Número:</strong> {contact.phone}</p>
                        <p><strong>Dirección:</strong> {contact.address}</p>
                    </div>
                    <div className="d-flex">
                        <Link to={`/edit-contact/${contact.id}`} className="btn btn-primary btn-sm me-2 p-3">
                            <i className="bi bi-pencil-fill"></i>
                        </Link>
                        <button onClick={() => handleDelete(contact.id)} className="btn btn-sm p-3">
                            <i className="bi bi-trash-fill"></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Contact;



