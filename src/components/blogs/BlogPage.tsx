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
    <div>
      <div className="prose dark:prose-invert">
        <h1 className="dark:text-white">{title}</h1>
        <p className="-mt-5 text-gray-500">Updated: {userLocalDate}</p>
        {coverImage?.url ? (
          <img src={coverImage.url} alt={title} height={900} width={900} />
        ) : null}
        {/* <MDXRemote source={content.markdown} /> */}
      </div>
      <p className="mt-10 border-t pt-5">
        Liked this article? I keep writing about web development, design, and
        other stuff. <br />
        Follow me on
        <span>
          <a
            href={`https://blog.kishans.in/${slug}`}
            className="underline decoration-dotted"
          >
            Hashnode
          </a>{" "}
        </span>
        to get notified when I publish a new article.
      </p>
    </div>
  );
};

export default Index;
