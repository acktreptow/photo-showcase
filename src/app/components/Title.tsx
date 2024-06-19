type TitleProps = {
  title: string;
};

function Title({ title }: TitleProps): JSX.Element {
  return (
    <h1 className="capitalize text-4xl font-bold mt-5 mb-7 text-center lg:text-6xl lg:my-10">
      {title}
    </h1>
  );
}

export default Title;
