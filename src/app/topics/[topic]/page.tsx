async function TopicPage({ params: { topic } }: any) {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );

  return (
    <div>
      <h1>Topic Page</h1>
      {topic}
    </div>
  );
}

export default TopicPage;
