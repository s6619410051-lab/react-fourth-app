import ProductHeader from "./../components/ProductHeader"
import Footer from "./../components/Footer"

export default function Computer() {
    return (
    <>
        <a href="/product" style={{textDecoration: "none"}}>
            <ProductHeader />
        </a>
        <h2 style={{textAlign: "center", color: "#2e06d0"}}>Computer Page</h2>
        <p style={{textAlign: "center"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eum, sint consequuntur nam dolorem 
            tempora voluptatibus modi quibusdam, quidem natus impedit ipsum, debitis commodi dolores! Eligendi 
            ullam ratione iusto numquam!
        </p>
        <Footer />
    </>
    )
}