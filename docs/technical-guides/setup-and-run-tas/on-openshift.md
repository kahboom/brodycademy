# On OpenShift

How to install Red Hat Trusted Artifact Signer (RHTAS) on OpenShift

## Installing TAS on OpenShift through Operator Hub

**Scenario**: You want to install the latest release of TAS on OpenShift the way that customers do, with a (relatively) straightforward point-and-click install.

See official docs [here](https://docs.redhat.com/en/documentation/red_hat_trusted_artifact_signer/1/html/deployment_guide/installing-trusted-artifact-signer-using-the-operator-lifecycle-manager_deploy), but the general steps (assuming we will be using Keycloak/RH SSO) are:

# TAS - Step-By-Step

## Installation & Deployment in OpenShift cluster

### Create a ROSA cluster via Slack cluster bot

1. In Slack "apps" search for "Cluster Bot".
2. Slack: type `rosa lookup` to get the newest cluster version available.
3. Slack: type `rosa create <version number>` to spin up the cluster.
4. Wait until the cluster is ready. When it's ready there will be a message with the username,
   the password and a link to your console (wait a bit longer to get the link).

### Install TAS in the cluster

1. Log in to the console with the credentials cluster bot provided.
2. Go to "Administrator" view, from that expand the "Operators" navigation menu and click "Operator-Hub".
3. In the search field type "trusted" and click "Red Hat Trusted Artifact Signer" title.![grafik](https://gist.github.com/assets/54885993/62a16ba4-bb3f-4210-bc66-21787c155f09)
4. Click the "install" button - accept default values, click "install" again on the "Install Operator" page. This 
   step can take some time.

### Deploy the service

1. Expand "Operators" from navigation menu in the console and click "Installed Operators".
2. Select "trusted-artifact-signer" from project drop-down.![grafik](https://gist.github.com/assets/54885993/84b8ae69-3cad-4191-8673-63069ba9d513)
3. Click "Red Hat Trusted Artifact Signer" and go to the "securesign" tab.
4. Click the "Create Securesign" button and select the YAML view - leave it like that.![grafik](https://gist.github.com/assets/54885993/c2d814f2-dbfa-445e-9d35-1d247faf4988)![grafik](https://gist.github.com/assets/54885993/64783d1a-a2c5-4154-94c8-b8ae6635398e)
5. Terminal: Run oc login command from cluster bot
6. Terminal: Go to the root folder of the project and run the script `./ci/openshift/tas-keycloak-install.sh`. This step can take some time.

:::warning
The Keycloak script _must_ be run from the root of the securesign-operator directory, or it will not work
:::


7. Terminal: Keycloak realm is needed now:
    - run `BASE_DOMAIN=apps.$(oc get dns cluster -o jsonpath='{.spec.baseDomain}')`
    - run `OIDC_ISSUER=https://keycloak-keycloak-system.$BASE_DOMAIN/auth/realms/trusted-artifact-signer`
    - run `echo ${OIDC_ISSUER}`
8. Copy the URL and put it in the console in the securesign yaml, where it says "your issuer URL".
   This should be necessary in two places in that yaml file.
   ![grafik](https://gist.github.com/assets/54885993/2b0d398b-7d6c-446b-9d8e-aef5870f12a6)
9. Click on "Create" and wait for it to spin up everything and then TAS is ready to go!

## Sign a Docker image

- In the console click "Installed Operators", then on "Trusted Artifact Signer", then go to the "securesign" tab.
- Click on YAML view and scroll down to see the fulcio and rekor URLs (need them in the next step).
- Terminal: type `cosign sign -y --oidc-client-id=trusted-artifact-signer --fulcio-url=<Fulcio URL from console>
  --rekor-url=<rekor URL from console> --oidc-issuer=<OIDC issuer URL from echo command> IMAGE NAME`.
- This browser window will open up automatically.
  ![grafik](https://gist.github.com/assets/54885993/ff4b0d07-ceb2-4d15-9ac5-ee865f16835e)
- Login with your credentials.
- The image will be signed and this is the final result you will see:![grafik](https://gist.github.com/assets/54885993/e2784e8e-ae95-4283-a467-b3dbc4ebf7b2)




