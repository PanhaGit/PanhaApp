import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
interface ContactType {
  id: number;
  icon: JSX.Element;
  text: string;
}
const contact: ContactType[] = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    text: "087 53 13 19",
  },
  {
    id: 2,
    icon: <IoMail />,
    text: "thopanha.123@gamil.com",
  },
];
interface ContactLinkProps {
  id: string;
}
const Contact: React.FC<ContactLinkProps> = ({ id }) => {
  return (
    <>
      <div className="w-11/12  m-auto">
        <div className="mb-3">
          <h1
            className="flex items-center justify-center md:text-4xl  text-center text-3xl scroll-smooth"
            id={id}
          >
            Contact
          </h1>
          <div className="flex justify-center items-center flex-col space-y-1">
            <div className="bg-black md:w-28 w-36 h-1 text-center"></div>
            <div className="bg-black md:w-20 w-28 h-1 text-center"></div>
            <div className="bg-black md:w-16 w-20 h-1 text-center"></div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col">
          {contact.map((list: ContactType) => {
            return (
              <div
                key={list.id}
                className="flex items-center justify-center my-5"
              >
                <span className="md:text-3xl text-2xl cursor-pointer hover:text-gray-700 transition ease-in-out delay-75 duration-75 hover:scale-125">
                  {list.icon}
                </span>
                <p className="md:text-2xl text-xl mx-6 cursor-pointer hover:text-blue-400 transition ease-linear delay-75 duration-75 hover:underline">
                  {list.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Contact;
