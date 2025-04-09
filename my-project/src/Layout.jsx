import { Outlet } from "react-router-dom";
import  Navbar  from './Components/Navbar';
import { useEffect } from "react";
import Footer from './Components/Footer';



// import withReactContent from '@sweetalert2/react-content';

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}