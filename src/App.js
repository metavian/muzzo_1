import React, { useState } from "react";
import HeadetImage from "./images/headset.png";
import Music from "./images/music.png";
import Camera from "./images/camera.png";
import Shield from "./images/shield.png";
import Camera_d from "./images/camera_d.png";
import Modal from "./components/Modal";
import TextImage from "./images/Text.png";
import Accordion from "./components/Accordian";
import { Helmet } from "react-helmet";

function App() {
  const [modalData, setModalData] = useState({
    title: "",
    text: "Some random text ",
    toggle: false,
    Component: null,
    align: "center",
    details: false,
  });

  const modelDataChange = (title, text, Component, align, details) => {
    setModalData({
      title: title,
      text: text,
      toggle: true,
      Component: Component,
      align,
      details,
    });
  };

  const text1 =
    "MuZzio is an innovative content distribution platform conceptualized by Indian visionary and technologist Mr. Anupam Saikia. It combines a retro-styled smart distribution unit  with modern capabilities, allowing users to easily access and enjoy high-quality audio, video, and other digital content. The platform can also be used offline for accessing high-quality content, subject to the user permisions provided by the publisher or the content owner. Through this model, MuZzio merges the traditional charm of physical distribution with modern digital content, a hybrid platform providing a holistic and engaging experience for all users.";

  const text2 =
    " Mobile : <b>98208 10222</b> \n Email : <b>support@xaansa.com</b>";

  const boldWords = ["MuZzio", "Mr. Anupam Saikia"];

  const formattedText1 = text1.replace(
    new RegExp(`(${boldWords.join("|")})`, "g"),
    "<b>$1</b>"
  );

  return (
    <>
      <Helmet>
        <title>MuZzio</title>
        <meta
          name="description"
          content="MuZzio App -  A hybrid platform merging retro-inspired media with modern digital access for high-quality audio, video, and more, online and offline."
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="MuZzio" />
        <meta
          property="og:description"
          content="MuZzio App -  A hybrid platform merging retro-inspired media with modern digital access for high-quality audio, video, and more, online and offline."
        />
        <meta property="og:image" content="https://muzzio.in/logo512.png" />
        <meta property="og:url" content="https://muzzio.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags (optional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MuZzio" />
        <meta
          name="twitter:description"
          content="MuZzio App -  A hybrid platform merging retro-inspired media with modern digital access for high-quality audio, video, and more, online and offline."
        />
        <meta name="twitter:image" content="hhttps://muzzio.in/logo512.png" />
      </Helmet>
      <div className="relative">
        <div className="flex justify-center items-center flex-col h-screen bg-primary_sky_blue">
          <img width={185} src={HeadetImage} alt="heaset" />
          <h1 className="text-2xl text-primary_purple py-6">COMING SOON ! </h1>
          <p className="text-md text-primary_purple px-3 text-center">
            A Revolutionary Media Redistribution Platform
          </p>
          <div className="flex items-center gap-5 py-3">
            <img
              width={40}
              src={Camera_d}
              alt="camera_d"
              className="cursor-pointer"
            />
            <img
              width={40}
              src={Shield}
              alt="shield"
              className="cursor-pointer"
            />
            <img
              width={40}
              src={Music}
              alt="music"
              className="cursor-pointer"
            />
            <img
              width={40}
              src={Camera}
              alt="camera"
              className="cursor-pointer"
            />
          </div>
          <div className="py-6 text-center">
            <img
              width={200}
              src={TextImage}
              alt="Text"
              className="cursor-pointer"
            />
          </div>
          <p className="text-lg text-black mt-4">
            For{" "}
            <span className="text-primary_blue underline underline-offset-2 cursor-pointer">
              <a
                onClick={() =>
                  modelDataChange(
                    "More Details",
                    formattedText1,
                    Accordion,
                    "start",
                    true
                  )
                }
              >
                more
              </a>
            </span>{" "}
            details please{" "}
            <span className="text-primary_blue underline underline-offset-2 cursor-pointer">
              <a
                onClick={() =>
                  modelDataChange("Contact Us", text2, null, "center", false)
                }
              >
                contact
              </a>
            </span>
          </p>
        </div>
        {modalData.toggle && (
          <Modal setModalData={setModalData} modalData={modalData} />
        )}
      </div>
    </>
  );
}

export default App;
