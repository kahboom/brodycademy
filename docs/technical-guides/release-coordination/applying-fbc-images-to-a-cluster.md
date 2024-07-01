# Applying FBC images to a cluster

We provide testing resources in the [releases](https://github.com/securesign/releases) repository to help facilitate development. Be sure to check the following path for the directory: `releases/x.x.x/testingResources`

To apply an FBC image to a running cluster with TAS already installed on it:

1. Copy the `catalogSource.yaml` file (for the version you want) into your local system.
2. In your terminal, navigate to the file and apply it. For example:

```
oc apply -f catalogSource_4_15.yaml
```

3. On the OpenShift Console, go into OperatorHub and type "RHTAS"

:::warning
You may need to refresh the page to see the changes
:::

If everything went well, you should see there are two duplicate RHTAS operators available. If you look closely, the differ by the name of the author:

![](./assets/applying-fbc-images.png 'Searching for "RHTAS" operator in OperatorHub on the Red Hat Developer Console')

The "TAS" one is the FBC image. The "Red Hat" one is the one customers see in production.

When you click on it, you need to change the "Channel" (top-left dropdown menu), which is like a group of versions, to candidate-x. Once you do that, the versions will be updated.

You won't be able to install right now because the image is not available yet as it's not been released, but you can see it.
