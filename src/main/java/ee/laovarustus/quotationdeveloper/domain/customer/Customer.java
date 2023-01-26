package ee.laovarustus.quotationdeveloper.domain.customer;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", nullable = false)
    private UUID id;

    @Column(name = "company_name", nullable = false, length = 150)
    private String companyName;

    @Column(name = "general_address", nullable = false, length = 150)
    private String generalAddress;

}
