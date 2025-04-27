import "./globals.css";

export const metadata = {
  title: "AranGrant App",
  description: "Developed by Ahmed Maaz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
