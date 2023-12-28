const Header = ({ className }: { className?: string }) => {
  return (
    <div className={`container flex flex-col items-center my-5 ${className}`}>
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium text-center">Trinh Minh Tuan</p>
        <p className="text-xl font-medium text-center">Frontend Developer</p>
        <div className="flex my-2 items-center">
          <a
            target="_blank"
            href="mailto:tuantm@gmail.com"
            className="border-b-2 hover:cursor-pointer hover:border-b-gray-400 delay-100 transition-opacity"
          >
            tuantm@gmail.com
          </a>
          <a target="_blank" href="tel:0987571662" className="mx-2 border-x-2">
            <p className="mx-2 border-b-2 hover:cursor-pointer hover:border-b-gray-400 delay-100 transition-opacity">
              0987571662
            </p>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/tuantm02/"
            className="border-b-2 hover:cursor-pointer hover:border-b-gray-400 delay-100 transition-opacity"
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
