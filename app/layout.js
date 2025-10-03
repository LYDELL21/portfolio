// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Lydell Crasto — UI/UX Developer",
  description: "Portfolio of Lydell Crasto — UI/UX Designer & Front-end Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
