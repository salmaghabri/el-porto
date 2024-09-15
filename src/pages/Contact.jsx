import { useState } from "react";
import socialMediaContacts from "../filling/socialMediaContacts";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Footer from "../components/Footer";

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

    const mailtoLink = `mailto:salmaghabri@gmail.com?subject=Contact Form Submission&body=${formData.message}`;

    window.location.href = mailtoLink;
    window.location.href = mailtoLink;
  };

  const [visibleContacts, setVisibleContacts] = useState(4);

  const showMoreContacts = () => {
    setVisibleContacts((prev) => prev + 3);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row  justify-center px-4 py-16   sm:px-16 sm:py-16 min-h-screen gap-16">
        <div className="flex flex-col justify-between  ">
          <div className=" w-full rounded-xl px-6  h-3/5 border-2 text-cherry border-cherry">
            <h3 className=" sm:text-xl lg:text-[1.85rem] inline-block -mt-[18rem] pt-20 font-semibold bg-cream text-cherry font-Cinzel animate-fadeIn ">
              Thank you for stopping by!
            </h3>
            <h3 className=" mt-8 text-obsidian text-2xl mb-4 font-medium">
              Got any questions? Or maybe just want to say hi? Feel free to drop
              a message
            </h3>
            <h3 className="text-obsidian text-base mb-4 font-medium">
              (Did I mention that I understand English, French, Arabic, and a
              bit of German ?)
            </h3>
          </div>
          <div className="socials w-full rounded-xl px-6  h-2/5 border-2 text-cherry border-cherry">
            <h3 className=" sm:text-xl lg:text-3xl inline-block sm:-mt-[10rem] -mt-[8rem] font-semibold bg-cream text-cherry font-Cinzel animate-fadeIn ">
              You can find me across these platforms
            </h3>

            <div className="flex items-center gap-4 flex-wrap pb-1 mt-8">
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
                        className="w-8 h-8"
                      />
                    </a>
                  </Badge>
                ))}
              {visibleContacts < socialMediaContacts.length && (
                <Button onClick={showMoreContacts}>+</Button>
              )}
            </div>
            <p className="text-obsidian font-light text-sm">
              not a big fan of social media (as you can probably tell)
            </p>
          </div>
        </div>

        <div className="form w-[20%]  sm:w-4/5 md:w-2/3 p-8  shadow-lg rounded-lg  font-semibold">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-obsidian font-Vioda text-lg mb-2"
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
                className="w-full px-3 py-2 focus:outline-none font-Vioda  font-semibold text-xl bg-transparent placeholder-cherry placeholder-opacity-80 placeholder:font-semibold sm:placeholder:font-semmibold sm:placeholder:text-sm placeholder:font-Vioda  "
                rows="6"
                placeholder="I'm writing to remind you to touch grass"
                required
              ></textarea>
            </div>
            <div className="flex gap-1 items-center font-semibold font-Vioda">
              <label>Sincerely,</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-1/2 px-3 py-2 focus:outline-none font-Vioda font-semibold text-xl bg-transparent placeholder-cherry placeholder-opacity-80 placeholder:font-semibold sm:placeholder:font-light sm:placeholder:text-sm placeholder:font-Vioda "
                placeholder="Sign with email"
                required
              />
            </div>
            <Badge>
              <button
                type="submit"
                className="w-full text-cherry font-Vioda font-semibold text-lg bg-transparent"
              >
                Send
              </button>
            </Badge>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
