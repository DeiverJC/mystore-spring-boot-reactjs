package dev.deiverjc.backend.Services;

import java.util.List;

import dev.deiverjc.backend.Entities.Product;

public interface ProductService {
    public List<Product> getProducts();

    public Product createProduct(Product product);

    public Product updateProduct(Product product);

    public Product findProduct(int id);

    public void deleteProduct(int id);
}
