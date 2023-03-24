package dev.deiverjc.backend.Services.ProductServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.deiverjc.backend.Entities.Product;
import dev.deiverjc.backend.Repositories.ProductRepo;
import dev.deiverjc.backend.Services.ProductService;

@Service
public class PSImpl implements ProductService {

    @Autowired
    private ProductRepo repo;

    @Override
    public List<Product> getProducts() {
        return (List<Product>) this.repo.findAll();
    }

    @Override
    public Product createProduct(Product product) {
        product.setName(product.getName());

        return this.repo.save(product);
    }

    @Override
    public Product updateProduct(Product product) {
        return this.repo.save(product);
    }

    @Override
    public Product findProduct(int id) {
        return this.repo.findById(id).get();
    }

    @Override
    public void deleteProduct(int id) {
        this.repo.deleteById(id);
    }
}
