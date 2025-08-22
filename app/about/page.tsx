export default function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-6xl font-light text-black tracking-wide">
          About Me
        </h1>
        <div className="w-16 h-px bg-gray-300 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl lg:text-3xl font-light text-black">
            Creative Professional
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I'm a creative professional with over 10 years of experience in design, 
              development, and strategy. My passion lies in creating meaningful 
              experiences that connect brands with their audiences.
            </p>
            <p>
              My approach combines strategic thinking with creative execution, 
              ensuring every project not only looks beautiful but also serves 
              its intended purpose effectively.
            </p>
            <p>
              When I'm not working, you can find me exploring new design trends, 
              experimenting with emerging technologies, or seeking inspiration 
              in everyday moments.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="w-80 h-80 bg-gray-100 rounded"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
        <div className="space-y-4">
          <h3 className="text-xl font-light text-black">Skills</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Visual Design & Branding</li>
            <li>• Web Development</li>
            <li>• User Experience Design</li>
            <li>• Creative Strategy</li>
            <li>• Project Management</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-light text-black">Experience</h3>
          <div className="space-y-4 text-gray-600">
            <div>
              <h4 className="font-medium text-black">Creative Director</h4>
              <p className="text-sm">Design Studio (2020-Present)</p>
            </div>
            <div>
              <h4 className="font-medium text-black">Senior Designer</h4>
              <p className="text-sm">Agency (2018-2020)</p>
            </div>
            <div>
              <h4 className="font-medium text-black">Designer</h4>
              <p className="text-sm">Startup (2015-2018)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}