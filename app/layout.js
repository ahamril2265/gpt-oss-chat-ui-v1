// app/layout.js
export const metadata = {
  title: "GPT-OSS Chat",
  description: "Chat-style prototype for image processing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind CDN for quick dev/prototype styling */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          // configure Tailwind via CDN (dark mode + any extend)
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: { extend: {} }
              }
            `,
          }}
        />
      </head>
      <body className="dark bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-gray-100">
        {children}
      </body>
    </html>
  );
}
