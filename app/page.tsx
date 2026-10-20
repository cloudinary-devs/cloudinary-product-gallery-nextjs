import { resolveConfig } from '@cloudinary/product-gallery/server';
import { GalleryClient } from './GalleryClient';

// Render on every request, so the gallery HTML is produced by the server at request time.
export const dynamic = 'force-dynamic';

// The gallery container's width on screen. viewerWidthHint must match it, because
// there's no browser on the server to measure the container.
const MAX_WIDTH = 800;

export default async function Page() {
  // Runs on the server: merges defaults, initializes Cloudinary, and resolves the
  // tag-based mediaAssets (an image set, a video, and a 360 spin set).
  const resolvedConfig = await resolveConfig({
    cloudName: 'demo',
    mediaAssets: [
      { tag: 'electric_car_product_gallery_demo' },
      { tag: 'electric_car_product_gallery_demo', mediaType: 'video' },
      { tag: 'electric_car_360_product_gallery_demo', mediaType: 'spin' },
    ],
    aspectRatio: '4:3',
    viewerWidthHint: MAX_WIDTH,
    carouselStyle: 'thumbnails',
    carouselLocation: 'bottom',
    transition: 'fade',
    // Values the configuration covers are best set here; see app/globals.css for CSS overrides.
    radius: 12,
    borderWidth: 1,
    borderColor: '#d8dcea',
    navigationButtonProps: { color: '#5b3df5', iconColor: '#ffffff', shape: 'round' },
    thumbnailProps: { radius: 8, borderColor: '#d8dcea' },
    // Breakpoint overrides apply after hydration, so the server markup always
    // matches the first client render.
    viewportBreakpoints: [{ breakpoint: 640, carouselLocation: 'bottom', aspectRatio: '1:1' }],
  });

  return (
    <main className="page">
      <h1>Product Gallery v2 with Next.js server-side rendering</h1>
      <p>
        The gallery markup below is rendered on the server and hydrated on the client. View the
        page source to see it in the initial HTML.
      </p>

      {/* The container's max-width matches viewerWidthHint. Sizing is CSS-driven:
          the widget fills its container and keeps the configured aspectRatio. */}
      <div className="gallery" style={{ maxWidth: MAX_WIDTH }}>
        <GalleryClient resolvedConfig={resolvedConfig} />
      </div>

      <p className="note">
        Buttons, borders, and radii are set through configuration. The selected thumbnail and the
        loader are styled in <code>app/globals.css</code> with CSS overrides.
      </p>
    </main>
  );
}
