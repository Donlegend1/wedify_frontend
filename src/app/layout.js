import localFont from "next/font/local";
import "./globals.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
// 


export const metadata = {
  title: "Wedify",
  description: "Have the best wedding ever",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
        style={{ backgroundColor: '#edf2f7' }}
       >
        {children}
      </body>
    </html>
  );
}
