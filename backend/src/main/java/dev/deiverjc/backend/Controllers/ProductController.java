package dev.deiverjc.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.deiverjc.backend.Entities.Product;
import dev.deiverjc.backend.Services.ProductServiceImpl.PSImpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("products")
public class ProductController {

    @Autowired
    private PSImpl impl;

    @GetMapping
    public ResponseEntity<?> all() {
        List<Product> products = this.impl.getProducts();

        return ResponseEntity.ok(products);
    }

    @PostMapping
    public ResponseEntity<?> store(@RequestBody Product product) {
        Product productCreated = this.impl.createProduct(product);

        return ResponseEntity.status(HttpStatus.CREATED).body(productCreated);
    }

    @PutMapping
    public ResponseEntity<?> update(@RequestBody Product product) {
        Product productUpdated = this.impl.createProduct(product);

        return ResponseEntity.status(HttpStatus.CREATED).body(productUpdated);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> find(@PathVariable int id) {
        Product product = this.impl.findProduct(id);

        return ResponseEntity.ok(product);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroy(@PathVariable int id) {
        this.impl.deleteProduct(id);

        return ResponseEntity.ok().build();
    }
}
