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



    public String getCompanyName() {
        return companyName;
    }

    public String getGeneralAddress() {
        return generalAddress;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }
}
