interface BlogPageProps {
  post: {
    title: string;
    updatedAt: string;
    coverImage: {
      url: string;
    };
    content: {
      markdown: string;
    };
    slug: string;
  };
}

const Index = ({ post }: BlogPageProps) => {
  const { title, updatedAt, coverImage, content, slug } = post;
  const userLocalDate = new Date(updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full">
      <div className="prose dark:prose-invert mb-5">
        <h1 className="dark:text-white">{title}</h1>
        <p className="-mt-5 text-gray-500">Updated: {userLocalDate}</p>
      </div>
      {coverImage?.url ? (
        <img src={coverImage.url} className="mb-5" alt={title} />
      ) : null}
    </div>
  );
};

export default Index;
