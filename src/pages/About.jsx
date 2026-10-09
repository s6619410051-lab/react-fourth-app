import Header from "./../components/Header"
import Footer from "./../components/Footer"
import NavBarMain from "../components/NavBarMain.jsx"

export default function About() {
    return (
        <>
            <NavBarMain />
            <Header />
            <h2 style={{textAlign: "center", color: "#2e06d0"}}>About Page</h2>
            <p style={{textAlign: "center"}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum consectetur ad dolorem dolore 
                reiciendis voluptates vero blanditiis, et veritatis tempore dolor quidem? Dicta eaque voluptate 
                recusandae ullam architecto itaque sit?
            </p>
            <Footer />
        </>
    )
}