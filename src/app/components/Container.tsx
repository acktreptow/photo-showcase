type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps): JSX.Element {
  return (
    <div className="container mx-auto bg-white flex-grow p-4">{children}</div>
  );
}

export default Container;
