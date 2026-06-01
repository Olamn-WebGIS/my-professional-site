export default function Services() {
  const serviceList = [
    {
      title: "Frontend Development",
      description: "Building responsive, high-performance web interfaces using React, TypeScript, and modern CSS frameworks."
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive user experiences and beautiful prototypes in Figma before writing a single line of code."
    },
    {
      title: "Web Optimization",
      description: "Improving site speed, accessibility, and SEO to ensure your project ranks well and loads instantly."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-12">
      <h2 className="text-4xl font-bold mb-12 text-center">My Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {serviceList.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}