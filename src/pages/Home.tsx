export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO: The "Professional" Intro */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4">Favour Olamilekan Adeoye</h1>
        <p className="text-2xl text-blue-400 font-semibold mb-8">Frontend & UI/UX Developer</p>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          I build sleek, responsive, and user-centered web applications with a focus on great design. 
          Turning complex ideas into functional, pixel-perfect interfaces is what I do best.
        </p>
      </section>

      {/* 2. SERVICES: Detailed Expertise */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">My Services</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-6 border-l-4 border-blue-600 bg-gray-50">
            <h3 className="text-2xl font-bold mb-3">Custom Web Development</h3>
            <p className="text-gray-600">I develop high-performance, accessible, and mobile-responsive websites using React, TypeScript, and Tailwind CSS.</p>
          </div>
          <div className="p-6 border-l-4 border-blue-600 bg-gray-50">
            <h3 className="text-2xl font-bold mb-3">UI/UX Design</h3>
            <p className="text-gray-600">I transform concepts into intuitive design systems in Figma, ensuring a seamless user experience before a single line of code is written.</p>
          </div>
        </div>
      </section>

{/* 3. PROJECTS: My Work & Archive */}
<section className="py-20 max-w-6xl mx-auto px-6">
  <h2 className="text-4xl font-bold mb-12 text-center">Featured Work</h2>
  <div className="grid md:grid-cols-4 gap-6">
    
    {/* Project 1 */}
    <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">Modern Web App</h3>
      <p className="text-blue-600 font-semibold mb-2">React + Tailwind</p>
      <p className="text-gray-600 mb-4">A high-performance web application focused on seamless user interaction and responsive design.</p>
    </div>

    {/* Project 2 */}
    <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">Data Dashboard</h3>
      <p className="text-blue-600 font-semibold mb-2">TypeScript + Vite</p>
      <p className="text-gray-600 mb-4">A sophisticated data visualization dashboard built with modern tools for real-time analytics.</p>
    </div>

    {/* Project 3 */}
    <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">Mobile UI Design</h3>
      <p className="text-blue-600 font-semibold mb-2">Figma + CSS</p>
      <p className="text-gray-600 mb-4">A clean, intuitive mobile interface designed for accessibility and modern user experience standards.</p>
    </div>

    {/* Archive Link */}
    <div className="p-6 border-2 border-dashed border-blue-600 rounded-2xl flex flex-col items-center justify-center text-center">
      <h3 className="text-xl font-bold mb-2">View Archive</h3>
      <p className="text-gray-600 mb-4">Explore 5+ more of my previous projects.</p>
      <a 
        href="https://olamn-webgis.github.io/my-portfolio/#portfolio" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 font-bold hover:underline"
      >
        Visit Portfolio →
      </a>
    </div>
    
  </div>
</section>

      {/* 3. CONTACT: Professional CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Build Something Together</h2>
        <p className="mb-8 text-lg opacity-90">I am currently available for new projects. Let's discuss how I can help you achieve your goals.</p>
        <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-xl">
          Get In Touch
        </a>
      </section>
    </div>
  );
}