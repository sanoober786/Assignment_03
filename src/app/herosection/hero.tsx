
export const Hero = () => {
    return (
    <main>  
           <div className="bg-cover bg-center h-screen p-20 border-l-red-500" style={{backgroundImage : "url('/Image.jpg')"}}>
            <div className="border-8 border-r-0 border-t-0 border-b-0 border-l-orange-500 text-lg pl-4">
           <h1 className="text-white text-7xl">Healthy Diets</h1>
           <h1 className="text-white text-7xl">Everyday</h1>
           <p className="text-orange-500 text-2xl">Our pizza will make your taste buds do the happy dance. </p>
           <p className="text-orange-500 text-2xl">No cooking, no problem.</p>
           <p className="text-orange-500 text-2xl">Stay home, eat pizza, repeat.</p>
           <h2 className="text-orange-500 text-4xl ">Order today and receive your package tomorrow</h2>
           </div>
           </div>
          
</main>
   
    )
}
export default Hero;
