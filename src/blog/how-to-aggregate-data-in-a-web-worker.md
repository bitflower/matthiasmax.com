---
title: How to lay off heavy data aggregation calculations to a web worker
date: July 04, 2021
url: /blog/how-to-aggregate-data-in-a-web-worker
author: Matthias Max
twitter: bitflowertweets
description: When you’re building an app that requires a large library of components in a single file download, you’re often forced to sacrifice performance - and specifically startup time - for the sake of accessing all those components. The two are often mutually exclusive. Choose to easily have all the components available, or choose blazing fast startup, but it’s difficult to get both. At least that’s the experience for many.
img: /assets/img/blog/posts/stencil-lazy-loading.png
---

![Stencil Lazy Loading](/assets/img/blog/posts/stencil-lazy-loading.png)

## I hope it's nice

Yes, I really hope this.

```typescript
const test = `bla`;
export const myFunction = () => {
    console.log('Please print this!')
}
```
