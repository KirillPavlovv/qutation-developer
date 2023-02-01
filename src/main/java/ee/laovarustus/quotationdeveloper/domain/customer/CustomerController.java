package ee.laovarustus.quotationdeveloper.domain.customer;

import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor
public class CustomerController {

    @Resource
    private CustomerService customerService;

    @PostMapping("/customer")
    public Customer save(@RequestBody CustomerRegistrationRequest registrationRequest) {
        return customerService.save(registrationRequest);
    }

}
