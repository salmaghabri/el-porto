import { useState } from "react";
import socialMediaContacts from "../filling/socialMediaContacts";
import Button from "../components/Button";

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

  const [visibleContacts, setVisibleContacts] = useState(3);

  const showMoreContacts = () => {
    setVisibleContacts((prev) => prev + 3);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8  min-h-screen">
      <div className="form w-full md:w-2/3 p-8 bg-cream shadow-lg rounded-lg border-2 border-cherry">
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
            Send Letter
          </button>
        </form>
      </div>

      <div className="socials w-full md:w-1/2 p-4">
        <h3 className="text-5xl text-cherry font-Cinzel">
          Thank you for your visit!{" "}
        </h3>
        <h3>
          <span className="text-5xl text-cherry font-Cinzel">← </span> Any
          unanswered question? or no need to have a question to contact me!{" "}
        </h3>
        <h3>
          you can write me in english, french, arabic or German(A2 level){" "}
        </h3>
        <h3>you can find me here too</h3>
        <div className="space-y-4 flex items-center gap-2 flex-wrap">
          {socialMediaContacts
            .slice(0, visibleContacts)
            .map((contact, index) => (
              <div key={index} className="flex items-center space-x-4">
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
              </div>
            ))}
        </div>
        {visibleContacts < socialMediaContacts.length && (
          <Button text="More" onClick={showMoreContacts} />
        )}
      </div>
    </div>
  );
}
