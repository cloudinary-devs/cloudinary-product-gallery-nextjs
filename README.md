# Product Gallery Widget v2: Next.js server-side rendering example

A [Next.js](https://nextjs.org/) App Router app that renders the Cloudinary [Product Gallery Widget](https://cloudinary.com/documentation/product_gallery) v2 on the server and hydrates it on the client, using the `@cloudinary/product-gallery` npm package.

It demonstrates the main v2 features:

* **Server-side rendering**: `resolveConfig()` runs in a Server Component, and the `Gallery` component renders the resolved config in a Client Component. The gallery markup is in the initial HTML.
* **`viewerWidthHint`**: tells the widget how wide its container will be, because there's no browser on the server to measure it.
* **CSS-driven sizing**: the widget fills its container and keeps the configured `aspectRatio`.
* **Native responsive images**: the server-rendered `<img>` tags include `srcset` and `sizes`.
* **Mixed media**: an image set, a video, and a 360 spin set, all resolved from tags on the server.
* **CSS customization**: stable class names under a `.pgw` root class, with configuration parameters for most styling and CSS overrides for the rest.

## Run the example

```shell
git clone https://github.com/cloudinary-devs/cloudinary-product-gallery-nextjs.git
cd cloudinary-product-gallery-nextjs
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), and view the page source to see the gallery in the server-rendered HTML.

To use your own assets, change `cloudName` and `mediaAssets` in `app/page.tsx`. Make sure client-side asset lists are enabled for your product environment, which is required for tag-based `mediaAssets`.

## How it works

| File | Purpose |
|---|---|
| `app/layout.tsx` | Imports the widget's stylesheet (`@cloudinary/product-gallery/index.css`) once. |
| `app/page.tsx` | Server Component. Calls `resolveConfig()` from `@cloudinary/product-gallery/server`, with `viewerWidthHint` matching the container's `max-width`. |
| `app/GalleryClient.tsx` | Client Component. Renders `<Gallery resolvedConfig={...} />`. |
| `app/globals.css` | CSS overrides for what the configuration doesn't cover. |

## Notes

* The npm package is ESM only and requires Node 18 or later, plus `react` and `react-dom` 18 or 19.
* `viewportBreakpoints` overrides apply after hydration, so the server markup always matches the first client render.
* The `Gallery` component doesn't expose the event API or the imperative instance methods (`on`, `setItem`, and so on). If you need them, use the [script embed](https://cloudinary.com/documentation/product_gallery#choosing_a_distribution) instead.

## Learn more

* [Product Gallery guide](https://cloudinary.com/documentation/product_gallery)
* [Server-side rendering with React and Next.js](https://cloudinary.com/documentation/product_gallery#server_side_rendering_with_react_and_next_js)
* [Customizing with CSS](https://cloudinary.com/documentation/product_gallery#customizing_with_css)
* [Product Gallery reference](https://cloudinary.com/documentation/product_gallery_reference)
* [Product Gallery demo](https://demo.cloudinary.com/product-gallery)
