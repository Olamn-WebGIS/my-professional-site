import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("Sending...");

    try {
      await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: new FormData(form),
      });
      setStatus("Message sent successfully!");
      form.reset();
    } catch {
      setStatus("Something went wrong.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-12">
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="accessKey" value="sf_6954bce2b660e38785fdf38e" />
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" name="name" required className="w-full mt-1 p-3 border rounded-lg" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" required className="w-full mt-1 p-3 border rounded-lg" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea name="message" rows={4} required className="w-full mt-1 p-3 border rounded-lg"></textarea>
        </div>

        <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700">
          Send Message
        </button>

        {status && <p className="mt-4 font-medium">{status}</p>}
      </form>
    </div>
  );
}