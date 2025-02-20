// Accordion.js

import React, { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div
    className={`transition ${isOpen ? "bg-indigo-50" : ""} hover:bg-indigo-50`}
  >
    <div
      className="accordion-header cursor-pointer transition flex space-x-5 px-4 md:px-12 items-center py-2"
      onClick={onClick}
    >
      <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`}></i>
      <h3
        dangerouslySetInnerHTML={{ __html: title }}
        className="font-medium"
      ></h3>
    </div>
    <div
      className="accordion-content px-4 md:px-10  pt-0 overflow-hidden"
      style={{ maxHeight: isOpen ? `${content.length * 2 + 32}px` : "0px" }}
    >
      <p
        dangerouslySetInnerHTML={{ __html: content }}
        className="leading-6 font-light pl-9 py-3 text-justify font-normal"
      ></p>
    </div>
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which accordion is open

  const items = [
    {
      title: " What is <b>MuZziio</b>?",
      content:
        "<b>MuZziio</b> is an innovative content distribution platform conceptualized by Indian visionary and technologist <b>Mr. Anupam Saikia</b>. It combines a retro-styled smart distribution unit  with modern capabilities, allowing users to easily access and enjoy high-quality audio, video, and other digital content. The platform can also be used offline for accessing high-quality content, subject to the user permisions provided by the publisher or the content owner. Through this model, <b>MuZziio</b> merges the traditional charm of physical distribution with modern digital content, a hybrid platform providing a holistic and engaging experience for all users.",
    },
    {
      title: "How does it work?",
      content:
        "The <b>MuZziio</b> system connects users to a dedicated mobile app through a smart distribution unit (SDU - <b>MuZziio</b> Smart Distribution Unit ), specifically designed to provide a retro touch, enabling them to stream or download content. Users can manage their media and enjoy seamless access to their favourite content all in one place.",
    },
    {
      title:
        " How and where is the content being streamed or hosted for the content bundled with <b>MuZziio</b> Distribution Unit (MDU)?",
      content:
        "The content bundled with <b>MuZziio</b> Distribution Unit can be  streamed from selected third-party cloud storage services (like YouTube, Google Drive, etc.) or through our integrated hosting solutions, ensuring users can access their media anytime, anywhere.",
    },
    {
      title:
        "As there is a one-time cost for the <b>MuZziio</b> Device, also referred to as <b>MuZziio</b> Distribution Unit), is the content available for a lifetime like a physical tangible product (e.g., cassette, CD, VHS, vinyl records)?",
      content:
        "Yes, the content bundled with the <b>MuZziio</b> is intended to be available for the lifetime of the product, similar to physical media formats. However, continued access may depend on the service provider's terms, and it can also be terminated or discontinued, similar to the fact of losing or damaging physical media.",
    },
    {
      title:
        "What happens if the service bundled with <b>MuZziio</b> gets discontinued, expired, or terminated by the service provider (3rd party or self-hosted)?",
      content:
        "If the bundled service becomes discontinued or terminated, users may lose access to the affected content. We recommend keeping abreast of service updates and exploring alternative solutions as needed.",
    },
    {
      title: "Warranty support on <b>MuZziio</b> Distribution Unit?",
      content:
        "We provide lifetime* ( terms applied )  free support for the <b>MuZziio</b> Service, ensuring users receive assistance whenever they need it.",
    },
    {
      title: "Can the <b>MuZziio</b> device be used for multiple content?",
      content:
        "Partially correct. The <b>MuZziio</b> Service  is distributed through a B2B agreement, meaning end users need to connect with the agency or vendor they initially used to access the service. Technically, it is possible to exchange the device for a minimum fee, but users must go through their dealer or distributor.",
    },
    {
      title: "What is Spatial Media as featured by <b>MuZziio</b> ?",
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
          <h1 className="text-xl font-medium text-gray-800 px-10 text-center py-2">
            FAQ's
          </h1>

          <div className="h-1 w-full mx-auto border-b"></div>
          <div className="py-5">
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
    </div>
  );
};

export default Accordion;
