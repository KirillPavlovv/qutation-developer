package ee.laovarustus.quotationdeveloper.domain.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query(
            value = "SELECT *, nlevel(path) as depth FROM products WHERE nlevel(path) =1  ORDER BY path",
            nativeQuery = true)
    List<Product> findAllByPath();
}
