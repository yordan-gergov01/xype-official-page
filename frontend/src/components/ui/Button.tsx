interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

function Button({
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base =
    'relative px-9 py-3.5 text-[15px] tracking-[0.05em] cursor-pointer transition-all duration-300 flex items-center justify-center overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-primary text-primary-foreground hover:shadow-[0_0_32px_rgba(90,158,114,0.4)] hover:brightness-110',
    outline:
      'border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_28px_rgba(90,158,114,0.3)]',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <span className="relative">{children}</span>
    </button>
  );
}

export default Button;
