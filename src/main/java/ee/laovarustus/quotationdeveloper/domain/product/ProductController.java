package ee.laovarustus.quotationdeveloper.domain.product;

import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor
public class ProductController {

    @Resource
    private ProductService productService;

    @GetMapping("/product")
    public List<Product> getProductGroups() {
        return productService.getProductGroups();
    }

}
