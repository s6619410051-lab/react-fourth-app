import Header from "../components/Header"
import Footer from "../components/Footer"
import NavBarMain from "../components/NavBarMain.jsx"
import ProductLink from "../components/ProductLink.jsx"

export default function Product() {
    return (
        <>
            <NavBarMain />
            <Header />
            <h2 style={{ textAlign: "center", color: "#2e06d0" }}>Product Page</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <ProductLink url="/product/computer" 
                             title="COMPUTER" bgcolor="#12703d" 
                />
                <ProductLink url="/product/smartphone" 
                             title="SMARTPHONE" bgcolor="#ff0000" 
                />
            </div>
            <p style={{ textAlign: "center" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eum, sint consequuntur nam dolorem 
                tempora voluptatibus modi quibusdam, quidem natus impedit ipsum, debitis commodi dolores! Eligendi 
                ullam ratione iusto numquam!
            </p>
            <Footer />
        </>
    );
}