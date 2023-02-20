package ee.laovarustus.quotationdeveloper.domain.product;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.math.BigDecimal;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "products")
public class Product implements Serializable {
    private static final long serialVersionUID = -6407135433878518241L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "parent_id")
    private Integer parentId;

    @Column(name = "name", nullable = false, length = Integer.MAX_VALUE)
    private String name;

    @Column(name = "description", length = 500)
    private String description;
    @Column(name = "image_path", length = 150)
    private String imagePath;

    @Column(name = "price")
    private BigDecimal price;

    private int depth;

    @Column(name = "path", columnDefinition = "ltree not null")
    private String path;

}
