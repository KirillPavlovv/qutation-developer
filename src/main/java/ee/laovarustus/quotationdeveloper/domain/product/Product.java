package ee.laovarustus.quotationdeveloper.domain.product;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.util.UUID;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "products")
public class Product {
    @Id
    @Column(name = "id", nullable = false)
    private UUID id;

    @Column(name = "parent_id")
    private UUID parentId;

    @Column(name = "name", nullable = false, length = Integer.MAX_VALUE)
    private String name;

/*
    TODO [JPA Buddy] create field to map the 'path' column
     Available actions: Define target Java type | Uncomment as is | Remove column mapping
    @Column(name = "path", columnDefinition = "ltree not null")
    private Object path;
*/
}
