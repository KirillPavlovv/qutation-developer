package ee.laovarustus.quotationdeveloper.domain.customer;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CustomerRegistrationRequest {

    private String companyName;

    private String generalAddress;

    private String firstName;

    private String lastName;

    private String phoneNumber;

    private String email;

}
