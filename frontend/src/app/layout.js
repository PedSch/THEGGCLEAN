// frontend/app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "The BluePrint Series",
  description: "Blueprint Series Event Page"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
