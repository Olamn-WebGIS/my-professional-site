// src/pages/ProjectMockup.tsx
export default function ProjectMockup() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        
        {/* Header Section */}
        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Concept Project</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">UI/UX Design Concept</h1>
        <div className="flex items-center space-x-4 mb-8">
          <span className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full font-medium">Figma + CSS</span>
        </div>

        {/* Mockup Placeholder Area */}
        <div className="w-full h-64 md:h-96 bg-gray-200 rounded-2xl flex items-center justify-center mb-10 border-2 border-dashed border-gray-300">
          <p className="text-gray-500">Insert Your Project Mockup Image Here</p>
        </div>

        {/* Project Description */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Project Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A design concept mockup showcasing a modern landing page interface. 
            Focused on user-centric design and visual hierarchy.
          </p>
          
          <a 
            href="/" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}