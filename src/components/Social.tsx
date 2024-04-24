import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

interface SocialType {
  id: number;
  social: JSX.Element;
  link: string;
}

const Social: SocialType[] = [
  {
    id: 1,
    social: <FaTwitter />,
    link: "https://x.com/panha_error?s=21",
  },
  {
    id: 2,
    social: <FaFacebook />,
    link: "https://web.facebook.com/?_rdc=1&_rdr",
  },
  {
    id: 3,
    social: <FaInstagram />,
    link: "https://www.instagram.com/errolcal?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
  },
  {
    id: 4,
    social: <FaTiktok />,
    link: "https://www.tiktok.com/@u_panha_?_t=8llN7uaXiSH&_r=1",
  },
  {
    id: 5,
    social: <FaLinkedin />,
    link: "https://www.linkedin.com/in/tho-panha-893259284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    id: 6,
    social: <FaGithub />,
    link: "https://github.com/PanhaGit",
  },
];

const SocialComponent = () => {
  return (
    <>
      <div className="flex justify-center items-center space-x-6 py-5">
        {Social.map((item: SocialType) => {
          return (
            <div key={item.id}>
              <a
                href={item.link}
                className="md:text-2xl text-lg"
                target="_blank"
              >
                {item.social}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SocialComponent;
