import React from "react";
import { groq } from "next-sanity";
import { getClient, urlFor, PortableText } from "../../utils/sanity";

const query = groq`*[_type == "post"]`;

export default function Blog({ posts }: any) {
  console.log(posts);
  return (
    <main>
      <h1>Blog Gartic Helper</h1>
      {posts.map(post => (
        <article key={post._id}>
          <h2>{post.title}</h2>
          <img src={urlFor(post.mainImage).url()} />
          <PortableText blocks={post.body} />
        </article>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  let response = await getClient().fetch(query);

  return {
    props: {
      posts: response || null,
    },
    revalidate: 5,
  };
}
