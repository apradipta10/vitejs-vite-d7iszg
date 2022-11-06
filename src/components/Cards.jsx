import clsx from 'clsx';

function Cards({ children }) {
  return (
    <div className="max-w-md w-full">
      <div className="shadow rounded overflow-hidden bg-white mb-5">
        {children}
      </div>
    </div>
  );
}

function Header({ children, className }) {
  return (
    <div className={clsx(className, 'p-4 border-b')}>
      <h1 className="text-xl">{children}</h1>
    </div>
  );
}

function Body({ children }) {
  return <div className="leading-relaxed p-4">{children}</div>;
}

function Footer({ children }) {
  return <div className="bg-slate-300 text-white p-4 mt-3">{children}</div>;
}

Cards.Header = Header;
Cards.Body = Body;
Cards.Footer = Footer;

export default Cards;
