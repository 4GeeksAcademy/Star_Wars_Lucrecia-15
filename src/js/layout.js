import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { InfoCharacter } from "./views/infoCharacter";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Planets } from "./component/planets";
import { Vehicles } from "./component/vehicles";
import { Menu } from "./component/menu";
import { Characters } from './component/character';

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    {/* Esta sección es para la vista principal con el menú y los componentes */}
                    <div className="d-flex">
                        <div className="menu-container">
                            <Menu />
                        </div>
                        <div className="content-container flex-grow-1">
                            <Characters />
                            <Planets />
                            <Vehicles />
                        </div>
                    </div>
                    {/* Esta sección es para las rutas de las views */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/info/:id" element={<InfoCharacter />} /> 
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/single/:theid" element={<Single />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);