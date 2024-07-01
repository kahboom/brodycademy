# Locally

Running Sigstore locally without a cluster can sometimes be a bit of a challenge, as there are several parts that need to be able to work together. It will also vary widely based on the environment it's been installed on.

## Installing with CRC

:::info
TBD, these instructions need to be verified. If you have experience with CRC please get in touch.
:::

## Running individual components

While it is possible to run individual components, it can be difficult to do properly and to document.

We've found that we have the best luck when we stand up the whole TAS stack together and then to swap out the images 
for the component in the TAS operator for an image that's been modified locally and deployed. For an example of this workflow, see [here](locally.md#installing-tas-on-openshift-with-a-modified-component).

## Installing TAS on OpenShift with a modified component

**Scenario**: You want to install TAS on OpenShift, but you want to use a custom operator. For example, you might be working on the Rekor Search UI locally, and you want to test deploying that instance of it with the rest of TAS.

The easiest way to do this is as follows:

1. Ensure you have access to a running cluster
2. Build an image for your local changes (i.e. `rekor-search-ui`)
3. Modify the code of the [`securesign-operator`](https://github.com/securesign/secure-sign-operator/tree/main) to use that custom image by updating it in the [`constants/images.go`](https://github.com/securesign/secure-sign-operator/blob/main/internal/controller/constants/images.go) file
4. Modify the deployment sample file (e.g. `config/samples/rhtas_v1alpha1_securesign.yaml`) to point to the correct OIDC issuer
5. Deploy the modified `securesign` YAML onto an existing cluster

For an example workflow, see [here](../onboarding/example-workflow.md).
