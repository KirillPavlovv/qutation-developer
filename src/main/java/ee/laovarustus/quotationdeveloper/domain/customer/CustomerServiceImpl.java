package ee.laovarustus.quotationdeveloper.domain.customer;

import com.dropbox.core.DbxException;
import ee.laovarustus.quotationdeveloper.domain.service.DropboxService;
import ee.laovarustus.quotationdeveloper.domain.customer.person.Person;
import ee.laovarustus.quotationdeveloper.domain.customer.person.PersonMapper;
import ee.laovarustus.quotationdeveloper.domain.customer.person.PersonRepository;
import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;

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
    @Resource
    private DropboxService dropboxService;

    @Override
    public Customer save(CustomerRegistrationRequest customerRegistrationRequest) throws IOException, DbxException {
        Customer customer = customerMapper.fromRegistrationForm(customerRegistrationRequest);
        Customer customerSaved = customerRepository.save(customer);
        Person person = personMapper.fromRegistrationForm(customerRegistrationRequest);
        person.setCompany(customerSaved);
        personRepository.save(person);
        dropboxService.configure();
        return customerSaved;
    }
}
