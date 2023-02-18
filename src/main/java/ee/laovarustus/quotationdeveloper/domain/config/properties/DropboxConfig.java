package ee.laovarustus.quotationdeveloper.domain.config.properties;

import com.dropbox.core.DbxException;
import com.dropbox.core.DbxRequestConfig;
import com.dropbox.core.v2.DbxClientV2;
import com.dropbox.core.v2.files.FileMetadata;
import com.dropbox.core.v2.files.ListFolderResult;
import com.dropbox.core.v2.files.Metadata;
import com.dropbox.core.v2.users.FullAccount;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Configuration;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

@Configuration
@AllArgsConstructor
public class DropboxConfig {

    private final DropBoxProperties dropBoxProperties;

    public void configure() throws DbxException, IOException {

    DbxRequestConfig config = DbxRequestConfig.newBuilder("dropbox/java-tutorial").build();
    DbxClientV2 client = new DbxClientV2(config, dropBoxProperties.getToken());

    // Get current account info
    FullAccount account = client.users().getCurrentAccount();
        System.out.println(account.getName().getDisplayName());

    // Get files and folder metadata from Dropbox root directory
    ListFolderResult result = client.files().listFolder("");
        while (true) {
        for (Metadata metadata : result.getEntries()) {
            System.out.println(metadata.getPathLower());
        }

        if (!result.getHasMore()) {
            break;
        }

        result = client.files().listFolderContinue(result.getCursor());
    }

    // Upload "test.txt" to Dropbox
        try (InputStream in = new FileInputStream("123.jpg")) {
        FileMetadata metadata = client.files().uploadBuilder("/123.jpg")
                .uploadAndFinish(in);
    }
}
}
