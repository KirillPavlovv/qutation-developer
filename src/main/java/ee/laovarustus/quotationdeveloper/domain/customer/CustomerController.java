package ee.laovarustus.quotationdeveloper.domain.customer;

import com.dropbox.core.DbxException;
import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor
public class CustomerController {

    @Resource
    private CustomerService customerService;

    @PostMapping("/customer")
    public Customer save(@RequestBody CustomerRegistrationRequest registrationRequest) throws IOException, DbxException {
        return customerService.save(registrationRequest);
    }

}
