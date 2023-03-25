import { ProductContextProvider } from "@/context/ProductsContext";

export const metadata = {
  title: "MyStore App",
  description: "Product CRUD App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProductContextProvider>{children}</ProductContextProvider>
      </body>
    </html>
  );
}
