import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

export default function RootLayout() {
    return (
        <>
            <MainHeader />
            <Outlet />  
        </>
    )
}

//<Outlet /> A component that means where the nested routes go