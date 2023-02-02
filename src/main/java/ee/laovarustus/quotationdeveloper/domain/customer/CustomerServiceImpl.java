package ee.laovarustus.quotationdeveloper.domain.customer;

import ee.laovarustus.quotationdeveloper.domain.customer.person.Person;
import ee.laovarustus.quotationdeveloper.domain.customer.person.PersonMapper;
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
    @Resource
    private CustomerMapper customerMapper;
    @Resource
    private PersonMapper personMapper;

    @Override
    public Customer save(CustomerRegistrationRequest customerRegistrationRequest) {
        Customer customer = customerMapper.fromRegistrationForm(customerRegistrationRequest);
        Customer customerSaved = customerRepository.save(customer);
        Person person = personMapper.fromRegistrationForm(customerRegistrationRequest);
        person.setCompany(customerSaved);
        personRepository.save(person);
        return customerSaved;
    }
}
