package ee.laovarustus.quotationdeveloper.domain.customer;

import ee.laovarustus.quotationdeveloper.domain.customer.person.Person;
import ee.laovarustus.quotationdeveloper.domain.customer.person.PersonRepository;
import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    @Resource
    private CustomerRepository customerRepository;
    @Resource
    private PersonRepository personRepository;

    @Override
    public Customer save(CustomerRegistrationRequest customerRegistrationRequest) {
        Customer customer = new Customer();
        customer.setCompanyName(customerRegistrationRequest.getCompanyName());
        customer.setGeneralAddress(customerRegistrationRequest.getGeneralAddress());
        Customer customerSaved = customerRepository.save(customer);
        Person person = new Person();
        person.setCompany(customerSaved);
        person.setFirstName(customerRegistrationRequest.getFirstName());
        person.setLastName(customerRegistrationRequest.getLastName());
        person.setEmail(customerRegistrationRequest.getEmail());
        person.setPhoneNumber(customerRegistrationRequest.getPhoneNumber());
        personRepository.save(person);
        return customerSaved;
    }
}
