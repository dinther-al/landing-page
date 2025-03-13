import { cn } from "@/modules/utils";
import { Header } from "@/components/common/header";

function App() {
  return (
    <div>

      <div className={cn("p-4", "container")}>
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Discover Limitless Possibilities</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Elevate your experience with our cutting-edge solutions. Join thousands of satisfied users today.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Feature 1", desc: "High-quality services tailored to your needs." },
              { title: "Feature 2", desc: "Seamless user experience with modern design." },
              { title: "Feature 3", desc: "24/7 customer support to assist you anytime." },
            ].map(({ title, desc }, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <h2 className="text-3xl font-semibold text-center mb-10">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { name: "John Doe", feedback: "Absolutely amazing service! Highly recommended." },
              { name: "Jane Smith", feedback: "A seamless experience from start to finish." },
            ].map(({ name, feedback }, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                <p className="text-gray-600 italic">"{feedback}"</p>
                <h4 className="mt-4 text-lg font-semibold">{name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-10">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { plan: "Basic", price: "$9.99", features: ["Feature A", "Feature B"] },
              { plan: "Pro", price: "$19.99", features: ["Feature A", "Feature B", "Feature C"] },
              { plan: "Premium", price: "$29.99", features: ["All Features Included"] },
            ].map(({ plan, price, features }, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center">
                <h3 className="text-xl font-bold">{plan}</h3>
                <p className="text-2xl font-semibold text-blue-600 my-4">{price}/month</p>
                <ul className="text-gray-600">
                  {features.map((f, i) => (
                    <li key={i} className="mb-2">{f}</li>
                  ))}
                </ul>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
      </div>
      <footer className="w-full py-10 bg-gray-900 text-white text-center">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
