'use client';

import { Gallery, type ConfigProps } from '@cloudinary/product-gallery';

// The server resolves the config (including the tag-based asset lookups),
// then this Client Component hydrates the gallery with exactly the same input.
export function GalleryClient({ resolvedConfig }: { resolvedConfig: ConfigProps }) {
  return <Gallery resolvedConfig={resolvedConfig} />;
}
