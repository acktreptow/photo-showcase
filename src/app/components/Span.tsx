type SpanProps = {
  page: string;
};

function Span({ page }: SpanProps): JSX.Element {
  return <span className="font-semibold underline">{page} page</span>;
}

export default Span;
