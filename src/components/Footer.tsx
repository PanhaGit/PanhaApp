const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-6 mt-10">
      <h4 className="text-center text-gray-700">
        © {currentYear}
        <a href="/"> Panha Tho</a> |{" "}
        <a
          href="https://teamyearng.com"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Teamyearng
        </a>
      </h4>
    </footer>
  );
};

export default Footer;
