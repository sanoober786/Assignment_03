import Head from "./component/header/header"
import Footer from "./footer/footer"
import Hero from "./herosection/hero"
import  Features  from "./features/features"

export default function Home(){
  return(
    <div>
     <Head/>
     <Hero/>
     <Features/>
     <Footer/>
    </div>
  )
}