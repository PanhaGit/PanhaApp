import { TypeAnimation } from "react-type-animation";

const TypeAnimationHome = () => {
  return (
    <div>
      <TypeAnimation
        sequence={["Junior Front-end Developer", "Junior Back-end Developer"]}
        wrapper="span"
        speed={20}
        className="md:text-3xl text-customBlack font-extrabold font-Poppins text-xl"
        repeat={Infinity}
      />
    </div>
  );
};

export default TypeAnimationHome;
