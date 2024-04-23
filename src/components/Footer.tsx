const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full bg-gray-100 mt-7">
      <footer className="bg-gray-100 py-7 w-11/12 m-auto">
        <h4 className="text-center">
          <a href="/">copyright &copy; {currentYear} by: Panha Tho</a>
        </h4>
      </footer>
    </div>
  );
};

export default Footer;
