const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm">
          © {new Date().getFullYear()} MovieMania. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Built with ❤️ using React & Vite
        </p>
      </div>
    </footer>
  );
};

export default Footer;
