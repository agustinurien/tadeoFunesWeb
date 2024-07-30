
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import "./globals.css";

export const metadata = {
  title: "Tadeo Funes | Website",
  description: "La página web de Tadeo Funes y su equipo es un espacio dedicado a su arduo trabajo y dedicación en la categoría de vela 49er. En su camino hacia los Juegos Olímpicos de 2028, Tadeo y su equipo comparten su pasión, entrenamientos, competiciones y logros con sus seguidores.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
