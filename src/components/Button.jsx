import clsx from 'clsx';

function Button(props) {
  const { className = 'bg-blue-500', children, text } = props;
  return (
    <button
      {...props}
      className={clsx(
        className,
        '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 gap-x-1.5 flex items-center hover:bg-blue-400 px-4 py-2 rounded text-white'
      )}
    >
      {text || children}
    </button>
  );
}
export default Button;
