const About = () => {
  return (
    <>
      <div className="container w-11/12 m-auto">
        <h1 className="text-3xl uppercase text-center">About Me</h1>
        <div className="flex justify-center items-center flex-col space-y-1">
          <div className="bg-black w-36 h-1 text-center"></div>
          <div className="bg-black w-24 h-1 text-center"></div>
          <div className="bg-black w-20 h-1 text-center"></div>
        </div>
        <h1 className="md:text-4xl text-3xl text-center py-10 font-semibold">
          Developing...
        </h1>
      </div>
    </>
  );
};

export default About;
