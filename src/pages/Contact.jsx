import { useState } from "react";
import socialMediaContacts from "../filling/socialMediaContacts";

export default function Contact() {
  // form
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:your.email@example.com?subject=Contact Form Submission from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0A${formData.message}`;

    window.location.href = mailtoLink;
  };

  // constacts
  const [visibleContacts, setVisibleContacts] = useState(3);

  const showMoreContacts = () => {
    setVisibleContacts((prev) => prev + 3);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8  min-h-screen">
      <div className="form w-full md:w-2/3 p-8 bg-cream shadow-lg rounded-lg border-2 border-gray-300">
        <h2 className="text-3xl font-serif mb-8 text-center">
          Write Me a Letter
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 ">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-serif text-lg mb-2"
            >
              Dear Salma,
            </label>
          </div>

          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2  focus:outline-none font-serif text-xl bg-transparent placeholder-gray-400"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="flex gap-1 items-center ">
            <label>Sincerly,</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-1/2 px-3 py-2 border-gray-500 focus:outline-none font-serif text-xl bg-transparent placeholder-gray-400"
              placeholder="Sign with email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-serif text-lg py-3 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Your Letter
          </button>
        </form>
      </div>

      <div className="socials w-full md:w-1/2 p-4">
        <h3 className="text-xl font-semibold mb-4">Connect with Me:</h3>
        <ul className="space-y-4">
          {socialMediaContacts
            .slice(0, visibleContacts)
            .map((contact, index) => (
              <li key={index} className="flex items-center space-x-4">
                <img
                  src={contact.iconPath}
                  alt={`${contact.name} icon`}
                  className="w-6 h-6"
                />
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {contact.name}
                </a>
              </li>
            ))}
        </ul>
        {visibleContacts < socialMediaContacts.length && (
          <button
            onClick={showMoreContacts}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            More
          </button>
        )}
      </div>
    </div>
  );
}
