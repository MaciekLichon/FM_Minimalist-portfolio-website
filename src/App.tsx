import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

import Container from './components/utils/Container/Container';
import Navbar from './components/sections/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Project from './components/pages/Project/Project';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/sections/Footer/Footer';
import Together from './components/sections/Together/Together';

const App: React.FC = () => {

    const location = useLocation();

    return (
        <>
            <Container>
                <Navbar />
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route element={<Together />} >
                            <Route path="" element={<Home />} />
                            <Route path="/portfolio" >
                                <Route index element={<Portfolio />} />
                                <Route path=":title" element={<Project />} />
                            </Route>
                        </Route>
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </AnimatePresence>
            </Container>
            <Footer />
        </>
    );
};

export default App;
