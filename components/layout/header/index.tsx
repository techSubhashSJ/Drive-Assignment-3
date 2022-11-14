const NavBar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-center py-3 md:py-4 md:block">
            <h2 className="text-2xl font-bold uppercase font-serif">
              Cars For sale
            </h2>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
