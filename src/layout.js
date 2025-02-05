import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./js/component/scrollToTop";
import Contact from "./js/views/contact";
import AddContact from "./js/views/addContact";
import injectContext from "./js/store/appContext";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    
                    <Routes>
                        <Route exact path="/" element={<Contact />} />
                        <Route path="/add-contact" element={<AddContact />} />
                        <Route path="/edit-contact/:id" element={<AddContact />} />
                    </Routes>
                
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);



