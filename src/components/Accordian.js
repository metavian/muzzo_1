// Accordion.js

import React, { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div
    className={`transition ${isOpen ? "bg-indigo-50" : ""} hover:bg-indigo-50`}
  >
    <div
      className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center py-2"
      onClick={onClick}
    >
      <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`}></i>
      <h3 className="font-medium">{title}</h3>
    </div>
    <div
      className="accordion-content px-5 pt-0 overflow-hidden"
      style={{ maxHeight: isOpen ? `${content.length * 2 + 32}px` : "0px" }}
    >
      <p className="leading-6 font-light pl-9 text-justify">{content}</p>
      <button className="rounded-full bg-indigo-600 text-white font-medium text-lg px-6 py-2 my-5 ml-9">
        Learn more
      </button>
    </div>
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which accordion is open

  const items = [
    {
      title: " What is MuZziio?",
      content:
        "MuZziio is an innovative content distribution platform conceptualized by Indian visionary and technologist Mr. Anupam Saikia. It combines a retro-styled smart distribution unit  with modern capabilities, allowing users to easily access and enjoy high-quality audio, video, and other digital content. The platform can also be used offline for accessing high-quality content, subject to the user permisions provided by the publisher or the content owner. Through this model, MuZziio merges the traditional charm of physical distribution with modern digital content, a hybrid platform providing a holistic and engaging experience for all users.",
    },
    {
      title: "How does it work?",
      content:
        "The MuZziio system connects users to a dedicated mobile app through a smart distribution unit (SDU - MuZziio Smart Distribution Unit ), specifically designed to provide a retro touch, enabling them to stream or download content. Users can manage their media and enjoy seamless access to their favourite content all in one place.",
    },
    {
      title:
        " How and where is the content being streamed or hosted for the content bundled with MuZziio Distribution Unit (MDU)?",
      content:
        "The content bundled with MuZziio Distribution Unit can be  streamed from selected third-party cloud storage services (like YouTube, Google Drive, etc.) or through our integrated hosting solutions, ensuring users can access their media anytime, anywhere.",
    },
    {
      title:
        "As there is a one-time cost for the MuZziio Device, also referred to as MuZziio Distribution Unit), is the content available for a lifetime like a physical tangible product (e.g., cassette, CD, VHS, vinyl records)?",
      content:
        "Yes, the content bundled with the MuZziio is intended to be available for the lifetime of the product, similar to physical media formats. However, continued access may depend on the service provider's terms, and it can also be terminated or discontinued, similar to the fact of losing or damaging physical media.",
    },
    {
      title:
        "What happens if the service bundled with MuZziio gets discontinued, expired, or terminated by the service provider (3rd party or self-hosted)?",
      content:
        "If the bundled service becomes discontinued or terminated, users may lose access to the affected content. We recommend keeping abreast of service updates and exploring alternative solutions as needed.",
    },
    {
      title: "Warranty support on MuZziio Distribution Unit?",
      content:
        "We provide lifetime* ( terms applied )  free support for the MuZziio Service, ensuring users receive assistance whenever they need it.",
    },
    {
      title: "Can the MuZziio device be used for multiple content?",
      content:
        "Partially correct. The MuZziio Service  is distributed through a B2B agreement, meaning end users need to connect with the agency or vendor they initially used to access the service. Technically, it is possible to exchange the device for a minimum fee, but users must go through their dealer or distributor.",
    },
    {
      title: ". What is Spatial Media as featured by MuZziio ?",
      content:
        "Spatial Media creates immersive audio and video experiences that transport users into a three-dimensional environment. With cutting-edge products like Apple Vision Pro, Meta Quest, or any equivalent VR headset, spatial content allows users to engage with media in a lifelike manner, exploring scenes from various angles and depths. By incorporating VR video clips and high-fidelity sound formats, including ambisonic audio—a surround sound technique that captures and reproduces sound in a 360-degree sphere—spatial content enhances storytelling, offering a richer and more interactive viewing experience that transforms how audiences enjoy audio and visual media.",
    },
  ];

  const handleAccordionClick = (index) => {
    setOpenIndex(index === openIndex ? null : index); // Toggle current accordion or close it
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 to-indigo-100 grid place-items-center">
      <div className="w-full mx-auto rounded border">
        <div className="bg-white p-0">
          <h1 className="text-xl font-medium text-gray-800 px-5 text-center py-2">
            FAQ's
          </h1>

          <div className="h-1 w-full mx-auto border-b"></div>

          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index} // Only one accordion opens at a time
              onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
