Prefetching a link is one of the simplest ways to make your website feel faster. Prefetching means the browser will fetch the data for a page even before you click the link to navigate to that page.

Remix, like most other modern web frameworks allows us to prefetch links. However, prefetching is no magic; it is a feature inside native HTML `<link rel="prefetch" />`. Remix allows us to customize the prefetching behavior based on our application need. The prefetching behavior we add to a link determines how the `<link rel="prefetch" />` will be rendered conditionally.

Unlike other frameworks, Remix gives us the flexibility to choose from different prefetching behaviors. For example, in Next.js, prefetching is always enabled by default if you use the custom `Link` component, with the option to turn it off explicitly. However, there is no option to choose the behavior.

Remix offers three different behaviors to choose from. Let's see what these are and a brief guide to choosing the most appropriate option.

### `intent`

Setting the prefetch behavior to intent means the link will only be prefetched if the user shows an intention to click it. It's triggered when the **user hovers** over or **focuses** on the link.

Ideally, this is the behavior you should use most often. It's suitable for default priority links. For example, on a marketing website, you might use it for links in your secondary CTA or items in your navbar. In a dashboard, it can be used for most links that are not frequently clicked by the user.

Example:

```javascript
<Link to="/about-us" prefetch="intent">
    About Us
</Link>
```

### `viewport`

Links with this behavior will be prefetched as soon **as they enter the viewport**. This should be used for more important links where there's a high chance that the user will click on them when visible. For instance, on a finance dashboard, this could be the link to the sales page, which a finance person is likely to click.

### `render`

This is the highest priority option. These links will be prefetched as soon a**s the Link is rendered in the browser**. This means the link will be almost instantly available on page load. Therefore, it should be used only for very important links on a page, and should be limited to at most 1-2 links per page. For example, on a marketing website, this can be used for the link that your main CTA directs to.

### Seeing Link prefetch in action

![prefetch.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1728132264171/f2ac7735-7651-4728-922a-2ec292cb0418.gif)

Here, you can see that as soon as I hover over the image (which is inside a `Link`), a `<link rel="prefetch" as="fetch" href="/kishanhitk?_data=routes%2F%24username"/>` is added to DOM. This will request the data from the loader function defined for that route. Note that the loader function will run on the server. Along with this some other `link` tags with `rel=”modulepreload”` is also added; these will fetch the modules, JavaScript files, and assets needed to render that page. Now, if I actually click this link, those resources will not be fetched again but instead be served from the preload cache, making the navigation faster.

### Using prefetch with caution

In Remix, the default prefetch behavior is none, and there is a valid reason for that. You should not use prefetching blindly for all your links. Prefetching a link uses both the user's network resources and your server's resources. If you're prefetching a link that the user is unlikely to click, you're wasting both the user's and your server's resources.

Also, if a page needs data that must always be up-to-date, it's best to avoid prefetching the link for that page. As we saw earlier, once a link is prefetched, it will be served from the prefetch cache for some time. If you add prefetching to such a page and the user visits it, they might not see the most up-to-date data, as it may be stale data fetched when the link was prefetched. In these cases, either avoid prefetching those links or use the intent behavior.

In this article I explained prefetching in the context of Remix, other frameworks like Astro also have similar APIs for prefetching. Therefore, these principles apply even if you're using those frameworks.