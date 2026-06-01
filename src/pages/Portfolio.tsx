export default function Portfolio() {
  const allProjects = [
    {
      title: "Apex Estates Project",
      tech: "Frontend Development",
      description: "A Frontend development concept mockup showcasing multiple pages of realestate site selection, authentication, and verified listing management.",
      link: "https://olamn-webgis.github.io/apex-estates-project/",
      isMockup: true
    },
    {
      title: "UI/UX Design Concept",
      tech: "Figma + CSS",
      description: "A design concept mockup showcasing a modern landing page interface. Focused on user-centric design and visual hierarchy.",
      link: "https://olamn-webgis.github.io/ui-ux-design-concept/",
      isMockup: true
    }
  ];

return (
      <div className="max-w-6xl mx-auto p-12">
        <h1 className="text-5xl font-bold mb-8">My Professional Portfolio</h1>
        <p className="text-xl text-gray-600 mb-12">
          A selection of my projects, including live applications and UI design concepts.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {allProjects.map((project, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-xl transition flex flex-col max-w-sm">
              {project.isMockup && (
                <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">Concept Project</span>
              )}
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-blue-600 font-semibold mb-4">{project.tech}</p>
              <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
              <a 
                href={project.link} 
                className="inline-block bg-gray-900 text-white text-center py-3 rounded-lg font-bold hover:bg-gray-800 transition"
              >
                {project.isMockup ? "View Design Mockup" : "View Case Study"}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }