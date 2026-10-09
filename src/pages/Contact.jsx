import Header from "./../components/Header"
import Footer from "./../components/Footer"
import NavBarMain from "../components/NavBarMain.jsx"

export default function Contact() {
    return (
    <>
        <NavBarMain />
        <Header />
        <h2 style={{textAlign: "center", color: "#2e06d0"}}>Contact Page</h2>
        <p style={{textAlign: "center"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur corporis accusantium 
            quibusdam, unde voluptatem qui ea praesentium libero quidem maxime.
        </p>
        <Footer />
    </>
    )
}