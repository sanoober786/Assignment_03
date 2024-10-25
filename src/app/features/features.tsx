export const Features = () => {
    return (
        <div>

      {/* Features Section */}

      <section className="bg-orange-500 p-8 text-black">

        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h3 className="text-xl font-bold">Feature 1</h3>
            <p className="text-lg">Arrabbiata Sauce (Spicy)</p>
            <p className="text-lg">Garlic Butter Sauce</p>
            <p className="text-lg">BBQ Sauce</p>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h3 className="text-xl font-bold">Feature 2</h3>
            <p className="text-lg">Mozzarella Cheese</p>
            <p className="text-lg">Permesan Cheese</p>
            <p className="text-lg"> Goat Cheese</p>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h3 className="text-xl font-bold">Feature 3</h3>
            <p className="text-lg">Wood-Fired Pizza </p>
            <p className="text-lg">Stone-Baked Pizza</p>
            <p className="text-lg">New York-Style Pizza</p>
          </div>
        </div>
        
      </section>

      {/* Call-to-Action Section */}

      <section className="bg-green-500 text-white p-4 text-center">
        <h2 className="text-2xl font-bold">Get Started Today!</h2>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Order Now</button>
      </section>
        </div>
    )
}
export default Features;