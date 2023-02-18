package ee.laovarustus.quotationdeveloper.domain.config.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Data
@Component
@ConfigurationProperties(prefix = "dropbox")
public class DropBoxProperties {

    private String token;

}
