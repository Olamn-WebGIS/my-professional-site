export default function FAQ() {
  const questions = [
    { q: "What is your typical project timeline?", a: "It depends on the scope, but I prioritize clear communication and milestones." },
    { q: "Do you offer maintenance after launch?", a: "Yes, I provide post-launch support and optimization packages." },
    { q: "What is your design process?", a: "I start with user research and wireframing in Figma before starting development." }
  ];

  return (
    <div className="max-w-3xl mx-auto p-12">
      <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {questions.map((item, i) => (
          <div key={i} className="border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">{item.q}</h3>
            <p className="text-gray-600">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}