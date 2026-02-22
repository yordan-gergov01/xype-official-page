interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`w-full bg-[#111111] border border-[#1F1F1F] text-foreground px-4 py-3 text-[15px] font-sans mb-4 focus:border-primary focus:outline-none transition-colors ${className}`}
      {...props}
    />
  );
}

export default Input;
