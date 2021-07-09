import { Fragment, FunctionalComponent, h } from '@stencil/core';
import { BlogPostInterface } from '../global/definitions';

interface BlogHeaderNormalProps {
  post: BlogPostInterface;
}

export const BlogHeaderNormal: FunctionalComponent<BlogHeaderNormalProps> = ({ post }) => (
  <Fragment>
    <h1>{post.title}</h1>
    <span class="post-meta">
      <a href={`http://twitter.com/${post.twitter}`}>
        <img alt={`Author: ${post.author}`} class="post-author-image" src={`/assets/img/blog/authors/${post.twitter}.jpg`} />
      </a>
      <a class="post-author-name" href={`http://twitter.com/${post.twitter}`}>
        {post.author}
      </a>
      <span class="post-date">{post.date}</span>
    </span>
  </Fragment>
);
