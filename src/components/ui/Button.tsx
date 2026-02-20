const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer text-white flex gap-2 items-center bg-primary px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary-hover active:scale-99 transition-transform duration-150 ease-out"
    >
      {children}
    </button>
  );
};

export default Button;
