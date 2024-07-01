# Example Workflow

## Development Process

The workflow for each team member is different depending on what specific thing they are working on, but here is a general example of the process for working on the Rekor Search UI:

1. Prioritize features and bug fixes with the team in Sprint Planning calls (this may have already been done), evaluating time frames and identifying possible areas of risk
2. Work on fixes/features/maintenance
3. Push to the `securesign` component repo
4. When the team is ready for a release, a container image [will be created](#user-content-fn-1)[^1] for each component, and the SHA for that image will be added to the component matrix

For more information on the release process, please see [here](../release-coordination/).

## Daily Workflow

This example follows the daily workflow for making changes to the Rekor Search UI component.

1. In the morning, start a ROSA cluster, and install Keycloak as if you will be [deploying a custom operator](..
   /setup-and-run-tas/locally)
2. Install the TAS operator on your ROSA cluster
3. Run the component (e.g. [Rekor Search UI](https://github.com/securesign/rekor-search-ui)) repo locally, making changes as necessary
4. When ready, build a Docker image of the Rekor Search UI

```
docker build IMG=quay.io/kahboom/secure-sign-operator:latest
```

5. Push the image to a [container registry](#user-content-fn-2)[^2]

```
docker push quay.io/kahboom/rekor-search-ui:latest
```

:::info
Note that you do not even need to make a git commit to build a container image, you can just make some changes in-memory and deploy that container image to test it first
:::

6. Modify the code of the [`securesign-operator`](https://github.com/securesign/secure-sign-operator/tree/main) to use that custom image by updating it in the [`constants/images.go`](https://github.com/securesign/secure-sign-operator/blob/main/internal/controller/constants/images.go) file, like this example for the `RekorSearchUiImage`:

```go
package constants

var (
	TrillianLogSignerImage = "registry.redhat.io/rhtas/trillian-logsigner-rhel9@sha256:920f2fd735525dd612546a874e24d301761ca83c79ddb6898ee7d31470ffc467"
	TrillianServerImage    = "registry.redhat.io/rhtas/trillian-logserver-rhel9@sha256:4478e867e59b5c2d7a4e2630f76fad7899205de611a6f4648d9ca7389392780d"
	TrillianDbImage        = "registry.redhat.io/rhtas/trillian-database-rhel9@sha256:221b4cb0f86d73606520c708499f0e6686838054fb0a759ba323c3f3ac8b7fed"
	TrillianNetcatImage = "registry.redhat.io/openshift4/ose-tools-rhel8@sha256:486b4d2dd0d10c5ef0212714c94334e04fe8a3d36cf619881986201a50f123c7"

	FulcioServerImage = "registry.redhat.io/rhtas/fulcio-rhel9@sha256:c4abc6342b39701d237ab3f0f25b75b677214b3ede00540b2488f524ad112179"

	RekorRedisImage    = "registry.redhat.io/rhtas/trillian-redis-rhel9@sha256:5f0630c7aa29eeee28668f7ad451f129c9fb2feb86ec21b6b1b0b5cc42b44f4a"
	RekorServerImage   = "registry.redhat.io/rhtas/rekor-server-rhel9@sha256:d4ea970447f3b4c18c309d2f0090a5d02260dd5257a0d41f87fefc4f014a9526"
	/*RekorSearchUiImage = "registry.redhat.io/rhtas/rekor-search-ui-rhel9@sha256:5eabf561c0549d81862e521ddc1f0ab91a3f2c9d99dcd83ab5a2cf648a95dd19"*/
	RekorSearchUiImage = "quay.io/kahboom/rekor-search-ui@sha256:68a21610cd7de9c34466fed181fb3b26e527906e194f90657ab3c785b2151c85"
	BackfillRedisImage = "registry.redhat.io/rhtas/rekor-backfill-redis-rhel9@sha256:5c7460ab3cd13b2ecf2b979f5061cb384174d6714b7630879e53d063e4cb69d2"

	TufImage = "registry.redhat.io/rhtas/tuf-server-rhel9@sha256:8c229e2c7f9d6cc0ebf4f23dd944373d497be2ed31960f0383b1bb43f16de0db"

	CTLogImage = "registry.redhat.io/rhtas/certificate-transparency-rhel9@sha256:44906b1e52b0b5e324f23cae088837caf15444fd34679e6d2f3cc018d4e093fe"

	ClientServerImage    = "registry.access.redhat.com/ubi9/httpd-24@sha256:7874b82335a80269dcf99e5983c2330876f5fe8bdc33dc6aa4374958a2ffaaee"
	ClientServerImage_cg = "registry.redhat.io/rhtas/client-server-cg-rhel9@sha256:046029a9a2028efa9dcbf8eff9b41fe5ac4e9ad64caf0241f5680a5cb36bf36b"
	ClientServerImage_re = "registry.redhat.io/rhtas/client-server-re-rhel9@sha256:7254f4c94182d21159162ea850e1ed14332fa5dee987103d54e7e4096a6fea31"
	SegmentBackupImage   = "registry.redhat.io/rhtas/segment-reporting-rhel9@sha256:54be793ea9e2af996e5e5c6f9156ee02d5d915adb53b4ab028cb3030f64b1496"
)
```


7. Modify the deployment sample file (e.g. `config/samples/rhtas_v1alpha1_securesign.yaml`) to point to the correct OIDC issuer:

```
    OIDCIssuers:
      - ClientID: "trusted-artifact-signer"
        IssuerURL: "https://your-oidc-issuer-url"
        Issuer: "https://your-oidc-issuer-url"
        Type: "email"
```


8. Apply the resource to deploy the custom sample:

```
kubectl apply -f config/samples/rhtas_v1alpha1_securesign.yaml
```

[^1]: At the moment, this is typically done from the "main" branch, but is subject to change

[^2]: We typically use Quay for development, but it can be DockerHub as well, or even a local registry
