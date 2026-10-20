import type { Metadata } from 'next';
// The widget's stylesheet must be imported explicitly in the npm package.
import '@cloudinary/product-gallery/index.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Product Gallery v2: Next.js server-side rendering',
  description:
    'Cloudinary Product Gallery Widget v2 rendered on the server in a Next.js App Router app.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
