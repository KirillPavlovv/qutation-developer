package ee.laovarustus.quotationdeveloper.domain.customer;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CustomerMapper {

    Customer fromRegistrationForm(CustomerRegistrationRequest customerRegistrationRequest);

}
