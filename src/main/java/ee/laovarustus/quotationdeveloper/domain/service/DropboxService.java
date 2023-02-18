package ee.laovarustus.quotationdeveloper.domain.service;

import com.dropbox.core.DbxException;
import com.dropbox.core.DbxRequestConfig;
import com.dropbox.core.v2.DbxClientV2;
import com.dropbox.core.v2.files.FileMetadata;
import com.dropbox.core.v2.files.ListFolderResult;
import com.dropbox.core.v2.files.Metadata;
import com.dropbox.core.v2.users.FullAccount;
import ee.laovarustus.quotationdeveloper.domain.config.properties.DropBoxProperties;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

@Service
@AllArgsConstructor
public class DropboxService {

    private final DropBoxProperties dropBoxProperties;

    public void configure() throws DbxException, IOException {

        // Get current account info
        FullAccount account = getClient().users().getCurrentAccount();
        System.out.println(account.getName().getDisplayName());

        // Get files and folder metadata from Dropbox root directory
        ListFolderResult result = getClient().files().listFolder("");
        while (true) {
            for (Metadata metadata : result.getEntries()) {
                System.out.println(metadata.getPathLower());
            }

            if (!result.getHasMore()) {
                break;
            }

            result = getClient().files().listFolderContinue(result.getCursor());
        }

        // Upload "test.txt" to Dropbox
        try (InputStream in = new FileInputStream("123.jpg")) {
            FileMetadata metadata = getClient().files().uploadBuilder("/123.jpg")
                    .uploadAndFinish(in);
        }
    }

    public DbxClientV2 getClient() {
        DbxRequestConfig config = DbxRequestConfig.newBuilder("dropbox/java-tutorial").build();
        return  new DbxClientV2(config, dropBoxProperties.getToken());
    }
}
