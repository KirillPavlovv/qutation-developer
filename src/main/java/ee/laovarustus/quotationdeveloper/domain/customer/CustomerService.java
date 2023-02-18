package ee.laovarustus.quotationdeveloper.domain.customer;

import com.dropbox.core.DbxException;

import java.io.IOException;

public interface CustomerService {

    Customer save(CustomerRegistrationRequest registrationRequest) throws IOException, DbxException;

}
