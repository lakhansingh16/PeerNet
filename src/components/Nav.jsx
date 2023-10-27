import logo from "/logo.jpeg";
const Nav = () => {
  return (
    <>
      <nav className="nav_bar flex flex-row justify-between align-middle p-4 bg-[#6528F7]">
        <img className="h-[50px]" src={logo} alt="Logo" />
        <p className="text-white text-[2rem] sticky font-bold">PeerNet</p>
        <a href="#enlist" className="bg-white text-[#6528F7] px-4 pt-3 font-lg font-semibold rounded-lg">
          Enlist
        </a>
      </nav>
    </>
  );
};

export default Nav;
