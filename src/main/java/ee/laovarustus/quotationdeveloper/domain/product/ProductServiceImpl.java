package ee.laovarustus.quotationdeveloper.domain.product;

import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    @Resource
    private ProductRepository productRepository;

    @Override
    public List<Product> getProductGroups() {
       return productRepository.findAllByPath();
    }
}
