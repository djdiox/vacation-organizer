import Layout from '../components/DefaultLayout';
import Link from 'next/link';
import React from 'react';

function getPosts() {
  return [
    {id: 'hello-nextjs', title: 'Hello Next.js'},
    {id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    {id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}

const PostLink = ({key, post}) => (<li>
  <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
    <a id={key}>{post.title}</a>
  </Link>
  <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
</li>);

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map((post) => (
        <PostLink key={post.id} post={post}/>
      ))}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
)