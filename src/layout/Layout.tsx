import type React from "react"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"

interface LayoutProps {
    children: React.ReactNode
}

export const Layout =({children}:LayoutProps)=>{
    return <>
    <Header name="João">
        <p>filho do header</p>
    </Header>
    {children}
    <Footer/>
    </>
}