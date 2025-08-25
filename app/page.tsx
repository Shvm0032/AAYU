export default function Home() {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h1 
        className="text-5xl lg:text-7xl  font-semibold text-black tracking-wide text-left font-[var(--font-merriweather)]">
          Experience Authentic Ayurveda with Aayu Yoga Amit
        </h1>
       
      </div>
      
      <div className="max-w-2xl ">
        <p className="text-lg text-gray-600 leading-relaxed text-left">
          Discover the power of Ayurveda with Aayu Yoga Amit. We offer authentic Ayurvedic products, natural remedies, and holistic wellness solutions for a healthier, balanced lifestyle.
        </p>
      </div>

      <div className="flex justify-center pt-8">
        <div className="w-16 h-px bg-gray-300"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
        <div className="space-y-4">
          <div className="w-full h-48 bg-gray-100 rounded"></div>
          <h3 className="text-xl font-light text-black">Design</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Visual identity and brand design that tells your story.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="w-full h-48 bg-gray-100 rounded"></div>
          <h3 className="text-xl font-light text-black">Development</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Modern web experiences built with cutting-edge technology.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="w-full h-48 bg-gray-100 rounded"></div>
          <h3 className="text-xl font-light text-black">Strategy</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Strategic thinking that drives meaningful results.
          </p>
        </div>
      </div>
    </div>
  );
}