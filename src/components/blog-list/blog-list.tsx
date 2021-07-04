import { Component, h, Prop } from '@stencil/core';

import blogStructure from '../../assets/blog/list.json';
import { BlogPostInterface } from '../../global/definitions';

import i18n from '../../stores/i18n.store';
@Component({
  tag: 'blog-list',
  styleUrl: 'blog-list.css',
})
export class BlogList {
  // --------------------------------------------------------------------------
  //
  //  Public Properties
  //
  // --------------------------------------------------------------------------

  @Prop()
  max?: number | undefined;

  @Prop()
  itemCssClass?: string;

  // --------------------------------------------------------------------------
  //
  //  Render
  //
  // --------------------------------------------------------------------------

  render() {
    return (blogStructure as BlogPostInterface[]).slice(0, this.max || blogStructure.length).map(post => {
      return (
        <div class={`blog-item ${this.itemCssClass}`}>
          <stencil-route-link url={post.url} class="post-title">
            <h2>{post.title}</h2>
          </stencil-route-link>
          <span class="post-meta">
            <a href={`http://twitter.com/${post.twitter}`}>
              <img alt={`Author: ${post.author}`} class="post-author-image" src={`/assets/img/blog/authors/${post.twitter}.jpg`} />
            </a>
            <a class="post-author-name" href={`http://twitter.com/${post.twitter}`}>
              {post.author}
            </a>
            <span class="post-date">{post.date}</span>
          </span>
          <p>{post.description}</p>
          <stencil-route-link url={post.url} class="read-more">
            {i18n.blog.readMore}
          </stencil-route-link>
        </div>
      );
    });
  }
}
