const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="shadow-lg shadow-gray-500/100 text-blue-200 font-mono bg-gradient-to-r from-blue-200 to-transparent">
      <div className="flex justify-center items-center py-4">
        <p className="text-stone-900 me-4 font-semibold text-xl border-e-2 border-stone-900 pe-4">
          &copy; {year}
        </p>
        <p className="text-stone-900 font-semibold text-xl">
          Made with ❤️ by Karan Joshi
        </p>
      </div>
    </footer>
  );
};
export default Footer;
