import React, { useState } from "react";
import HeadetImage from "./images/headset.png";
import Music from "./images/music.png";
import Camera from "./images/camera.png";
import Shield from "./images/shield.png";
import Camera_d from "./images/camera_d.png";
import Modal from "./components/Modal";

function App() {
  const [modalData, setModalData] = useState({
    title: "",
    text: "Some random text ",
    toggle: false,
  });

  const modelDataChange = (title, text) => {
    console.log("clicked");
    setModalData({
      title: title,
      text: text,
      toggle: true,
    });
  };

  const text1 =
    "MuZzio is an innovative content distribution platform conceptualized by Indian visionary and technologist Mr. Anupam Saikia. It combines a retro-styled smart distribution unit  with modern capabilities, allowing users to easily access and enjoy high-quality audio, video, and other digital content. The platform can also be used offline for accessing high-quality content, subject to the user permisions provided by the publisher or the content owner. Through this model, MuZzio merges the traditional charm of physical distribution with modern digital content, a hybrid platform providing a holistic and engaging experience for all users.";

  const text2 = " Mobile : 98208 10222 \n Email : support@xaansa.com";
  return (
    <div className="relative">
      <div className="flex justify-center items-center flex-col h-screen bg-primary_purple">
        <img width={130} src={HeadetImage} alt="heaset image" />
        <h1 className="text-2xl text-primary_blue">COMING SOON ! </h1>
        <p className="text-md text-primary_blue mt-2 px-3 text-center py-2">
          A Revolutionary Media Redistribution Platform
        </p>
        <div className="flex items-center gap-3 my-2">
          <img
            width={30}
            src={Music}
            alt="music image"
            className="cursor-pointer"
          />
          <img
            width={30}
            src={Camera_d}
            alt="camera_d image"
            className="cursor-pointer"
          />
          <img
            width={30}
            src={Shield}
            alt="shield image"
            className="cursor-pointer"
          />
          <img
            width={30}
            src={Camera}
            alt="camera image"
            className="cursor-pointer"
          />
        </div>
        <p className="text-md text-black">
          For{" "}
          <span className="text-primary_blue underline underline-offset-2 cursor-pointer">
            <a onClick={() => modelDataChange("More Details", text1)}>
              more
            </a>
          </span>{" "}
          details please{" "}
          <span className="text-primary_blue underline underline-offset-2 cursor-pointer">
            <a onClick={() => modelDataChange("Contact Us", text2)}>
              contact
            </a>
          </span>
        </p>
      </div>
      {modalData.toggle && (
        <Modal setModalData={setModalData} modalData={modalData} />
      )}
    </div>
  );
}

export default App;
