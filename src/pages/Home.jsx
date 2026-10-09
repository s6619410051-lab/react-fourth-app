import Header from "./../components/Header.jsx"
import Footer from "./../components/Footer"
import NavBarMain from "../components/NavBarMain.jsx"
import hero from "../assets/hero.png"

export default function Home() {
  return (
    <>
      <NavBarMain />
      <Header />
      {/* <h2 style="text-align:center ; color=red">Home Page</h2>  */}
      <h2 style={{textAlign: "center", color: "#2e06d0"}}>Home Page</h2>
      <p style={{textAlign: "center"}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure fugiat dicta iusto natus dolores
        temporibus unde earum, quae perspiciatis, dolor nihil suscipit facere consequatur. Modi saepe cumque facilis ut.
      </p>
      {/*การเเสดงรูปจาก public */}
      <img src="super.png" alt="super" style={{width:"100px"}}/>

      {/*การเเสดงรูปจาก asste*/}
      <img src={hero} alt="hero" style={{width:"200px"}}/>
      <Footer />
    </>
  )
}