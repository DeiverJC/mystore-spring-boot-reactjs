package dev.deiverjc.backend.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import dev.deiverjc.backend.Entities.Product;

@Repository
public interface ProductRepo extends CrudRepository<Product, Integer> {
}
