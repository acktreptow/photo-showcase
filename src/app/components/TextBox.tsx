type TextBoxProps = {
  children: React.ReactNode;
};

function TextBox({ children }: TextBoxProps): JSX.Element {
  return (
    <div className="bg-teal-700 rounded-lg text-zinc-100 p-3 mb-10 text-lg md:mx-auto md:w-3/4 lg:p-5 lg:text-xl">
      {children}
    </div>
  );
}

export default TextBox;
