import React from 'react'

const AboutSkills = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
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
  )
}

export default AboutSkills
