package ee.laovarustus.quotationdeveloper.domain.customer.person;

import ee.laovarustus.quotationdeveloper.domain.customer.CustomerRegistrationRequest;
import org.mapstruct.Mapper;

@Mapper
public interface PersonMapper {

    Person fromRegistrationForm(CustomerRegistrationRequest customerRegistrationRequest);

}
