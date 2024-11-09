import "../styles/globals.css";

export const metadata = {
  title: "Jol",
  description: "Tourism in Aqtobe without headaches",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
