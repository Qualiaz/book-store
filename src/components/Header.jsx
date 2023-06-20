const Header = () => {
  return (
    <header className="flex flex-col py-5 px-10 gap-5">
      <div className="flex gap-3 bg-light-primary outline">
        <div className="w-3/5 bg-light-primary outline">
          <input type="text" className="w-full bg-light-primary outline" />
        </div>
        <div className="min-w-fit bg-light-primary">search btn</div>
        <div className=" bg-light-primary">cart</div>
      </div>
      <div className="flex gap-4 overflow-x-auto book-genres">
        <div>All</div>
        <div>ebooks</div>
        <div>new</div>
        <div>bestsellers</div>
        <div>science</div>
        <div>fiction</div>
        <div>romance</div>
        <div>fantasy</div>
        <div>comics</div>
        <div>crime</div>
      </div>
    </header>
  );
};

export default Header;
