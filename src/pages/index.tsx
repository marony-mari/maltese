import { client } from "@/libs/client";
import { HomeProps } from "@/types/common";
import { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: "blog",
  });

  return {
    props: {
      blogs: data.contents,
    },
  };
};

const Home: NextPage<HomeProps> = ({ blogs }) => {
  return (
    <>
      <h1>Hello</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
