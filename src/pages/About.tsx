export default function About() {
  const skills = [
    "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", 
    "React", "Tailwind CSS", "Bootstrap", "UI/UX Design", "Figma"
  ];

  return (
    <div className="max-w-4xl mx-auto p-12">
      <h1 className="text-5xl font-bold mb-8">About Me</h1>
      <div className="prose lg:prose-xl text-gray-700 space-y-6">
        <p>I am <strong>Favour Olamilekan Adeoye</strong>, a passionate Frontend & UI/UX Developer. I specialize in turning complex requirements into beautiful, user-centric interfaces.</p>
        <p>With a strong foundation in both design principles and modern web technologies, I bridge the gap between creative vision and functional code. My approach is simple: understand the user, prototype in Figma, and build with clean, maintainable code.</p>
        
        <h3 className="text-2xl font-bold">My Professional Journey</h3>
        <p>I have dedicated my time to mastering the ecosystem of modern web development—from the layout precision of CSS and Tailwind to the reactive power of React and TypeScript. Whether it's a corporate dashboard or a creative portfolio, I focus on performance, accessibility, and pixel-perfect design.</p>
        
        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}