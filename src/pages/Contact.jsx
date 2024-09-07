import { useState } from "react";
import socialMediaContacts from "../filling/socialMediaContacts";
import Button from "../components/Button";
import Badge from "../components/Badge";

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
    <div className="flex flex-col md:flex-row gap-5 justify-center px-16 py-16 min-h-screen">
      <div className="socials w-full md:w-1/2 px-6 border-2 text-cherry border-cherry ">
        <h3 className="text-3xl inline-block  -mt-[14rem] font-medium  bg-cream text-cherry font-Cinzel animate-fadeIn ">
          Thank you for stopping by!{" "}
        </h3>
        <h3 className="text-lg  mb-4">
          Got any questions? Or maybe just want to say hi? Feel free to drop a
          message
        </h3>
        <h3 className="text-lg  mb-4">
          (I understand English, French, Arabic, or German (and not A2 level)){" "}
        </h3>
        <h3 className="text-lg  mb-6">
          You can find me across these platforms:
        </h3>
        <div className="flex items-center gap-4 flex-wrap">
          {socialMediaContacts
            .slice(0, visibleContacts)
            .map((contact, index) => (
              <Badge key={index}>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={contact.iconPath}
                    alt={`${contact.name} icon`}
                    className="w-6 h-6"
                  />
                </a>
              </Badge>
            ))}
          {visibleContacts < socialMediaContacts.length && (
            <Button onClick={showMoreContacts}>+</Button>
          )}
        </div>
      </div>

      <div className="form w-full md:w-2/3 p-8  shadow-lg rounded-lg  ">
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
              className="w-full px-3 py-2  focus:outline-none font-serif text-xl bg-transparent placeholder-lavender"
              rows="6"
              placeholder="I'm writing to remind you to touch grass"
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
          <Badge>
            <button
              type="submit"
              className="w-full text-cherry font-serif text-lg  "
            >
              Send
            </button>
          </Badge>
        </form>
      </div>
    </div>
  );
}
