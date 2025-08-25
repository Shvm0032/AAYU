import React from 'react'

const AboutHero = () => {
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
    </div>
  )
}

export default AboutHero
