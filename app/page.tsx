export default function Home() {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl lg:text-7xl font-light text-black tracking-wide">
          Creative
        </h1>
        <h2 className="text-3xl lg:text-5xl font-light text-gray-600 tracking-wide">
          Portfolio
        </h2>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to my creative space. I'm a designer and creative professional 
          passionate about crafting beautiful, functional experiences that inspire 
          and connect with people.
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