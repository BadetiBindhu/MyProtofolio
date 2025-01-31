import './App.css';
import Header from './Components/Header';
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from './Components/Contact';
const siteProps = {
  name : "Badeti Bindhu",
  title :"Web Developer",
  email :"badetibindhu2003@gmail.com",
  gitHub:"BadetiBindhu",
  instagram :"BadetiBindhu",
  linkedIn :"BindhuBadeti",
  youtube:"BinduBadeti"
}
function App() {
  return (
    <>
    <div style={{
      margin:"0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight:"100vh"}}>
      <Header/>
      <section id="home"><Home {...siteProps}/></section>
      <section id="about"><About/></section>
      <section id="skills"><Skills/></section>
      <section id="portfolio"><Portfolio/></section>
      <section id="contact"><Contact {...siteProps} /></section>
      </div>
    </>
  )
}

export default App;
