package ee.laovarustus.quotationdeveloper.domain.product;

import java.util.List;

public interface ProductService {
    List<Product> getProductGroups();
    List<Product> getAllProducts();
}

