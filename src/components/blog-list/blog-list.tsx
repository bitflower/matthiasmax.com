import { Component, h } from '@stencil/core';
import blogStructure from '../../assets/blog/list.json';
import { BlogPostInterface } from '../../global/definitions';
import { ResponsiveContainer } from '@ionic-internal/ionic-ds';

import i18n from '../../stores/i18n.store';
@Component({
  tag: 'blog-list',
  styleUrl: 'blog-list.css',
})
export class BlogIndex {
  render() {
    return (
      <ResponsiveContainer>
        <div class="blog-index">
          <h1 class="hero-heading">Let's get better together.</h1>
          <h2 class="no-print-font hero-subheading">I learned a lot from the community. This is where I give back my knowledge.</h2>
          <p class="intro-paragraph no-print-font">
            From time to time I share my thoughts on topics like business, technology and design. Feel free to&nbsp;
            <stencil-route-link url={i18n.contact.link}>get in touch with feedback or raise questions.</stencil-route-link>
          </p>
          {(blogStructure as BlogPostInterface[]).map(post => {
            return (
              <div class="blog-item">
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
                  Read more
                </stencil-route-link>
              </div>
            );
          })}
        </div>
      </ResponsiveContainer>
    );
  }
}
