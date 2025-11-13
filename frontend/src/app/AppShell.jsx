import Header from "../components/Header";
import RoleSwichHeader from "../components/RoleSwichHeader";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function AppShell(){
    return(
        <>
            <Header/>
            <RoleSwichHeader/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}