import { ProductProvider } from "@/context/ProductsContext";

export const metadata = {
  title: "MyStore App",
  description: "Product CRUD App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProductProvider>{children}</ProductProvider>
      </body>
    </html>
  );
}
