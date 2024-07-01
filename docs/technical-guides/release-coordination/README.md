# 📦 Release Coordination

Notes on coordinating a release for RHTAS

This guide is based on the original doc for the [RHTAS Release Process](https://docs.google.com/document/d/1ko9762__FySOq2-_Ehd8Z3pgUf89Auk88chgev7U5hc/edit).

## Tasks and Responsibilities

The release coordinator plays a critical role in managing and orchestrating the release for TAS.

Though not an exhaustive list, some important things you might do as a release coordinator could include:

* Defining scope, objectives, and the timeline of the release
* Regularly communicating with stakeholders (e.g. product and program managers)
* Identifying potential areas of risk, which often includes chatting with the QE team about expectations and developing an appropriate timeframe to allow for testing prior to the release without overwhelming
* Assisting with any relevant technical documentation, and continuing to add to notes for future release coordinators that could help improve the process

## Prerequisites

In order to do the RC role you'll need a few things:

* Ensure you have access to the [RHTAS workspace](https://console.redhat.com/preview/application-pipeline/workspaces/rhtas/applications) in Konflux. (If not you must request access in [#konflux-users](https://redhat.enterprise.slack.com/archives/C04PZ7H0VA8))
* Configure your environment so you can access Konflux and the RHTAS workspace, using the CLI, instructions can be found [here](https://docs.google.com/document/d/1hFvQDH1H6MGNqTGfcZpyl2h8OIaynP8sokZohCS0Su0/edit#heading=h.olhho0rpp8t5)
* Ensure all pull requests needed for this release are merged into main or the release branch.
* Ensure the application is passing enterprise contract.

Ensure you have access to this [repository](https://github.com/securesign/releases).

## Component Matrix

We use the Component Matrix spreadsheet to determine how our components are structured in Konflux, and ultimately what the repository URI will be for the images.

* [TAS Component Matrix](https://docs.google.com/spreadsheets/d/1R02GS2wPElVC3yzxhPqtJaKh-dX1wFvd31Pu3MBOCmo/edit#gid=745312958) (thread [link](https://redhat-internal.slack.com/archives/C05M2GGKU7Q/p1707790049882829))


## Konflux

Konflux is a platform for building integrated software that streamlines, consolidates, and secures the development lifecycle. It's the system that we (Red Hat) deploy and use for our own internal secure supply chain.

TAS was one of the first teams to onboard to [Konflux](https://redhat-appstudio.github.io/appstudio.docs.ui.io/) security build system.

You can view all of our [Konflux applications on the Red Hat Console](https://console.redhat.com/preview/application-pipeline/workspaces/rhtas/applications) (you will need access).

Here are some helpful links for getting started with Konflux:

* [Getting started video tutorial](https://videos.learning.redhat.com/media/Red+Hat+Trusted+Application+Pipeline/1_8ql30mb7/324517582)
* [Konflux Technical & Architectural Docs](https://github.com/konflux-ci/architecture/tree/main) ([web view](https://konflux-ci.dev/architecture/))
* [Get into the console](https://console.redhat.com/beta/hac/stonesoup)
* [Onboarding RH Products to Konflux](https://docs.google.com/document/d/1bKE4pmrufEb1QROo7XhMVEmUClc--WtAmX1__rxNscc/edit#bookmark=id.aj3a36s375ak)
* [Onboarding to Konflux: FAQ](https://docs.google.com/document/d/11YEK2YuZZd0cMGYXzZ5d_cKgue_fa44kvPpHaj3Z0cU/edit?usp=sharing)
* [Accessing RHTAP via CLI](https://docs.google.com/document/d/1hFvQDH1H6MGNqTGfcZpyl2h8OIaynP8sokZohCS0Su0/edit?usp=sharing)
* [RHTAP Support Kb](https://docs.google.com/document/d/1T1HborFd1t3BqbD_9z0FHGBONzmL8NZjomYCqGVG5FY/edit?usp=sharing)

For Konflux-related queries, your best bet is to open a support request through the [#konflux-users](https://redhat.enterprise.slack.com/archives/C04PZ7H0VA8) Slack channel. At the top of the channel they have relevant links pinned, such as docs and how to create a support request.

### RHTAP

Where Konflux is the system used for Red Hat's internal supply chain, Red Hat Trusted Application Pipeline, or RHTAP, is the name used for Red Hat's customer facing product launch.

RHTAP includes Red Hat Developer Hub, Red Hat Trusted Artifact Signer, Red Hat Trusted Profile Analyzer + Enterprise Contract and specialized deployment and configuration automation. For more information about the difference between RHTAP and Konflux, please see the following doc: [RHTAP/Konflux announcement](https://docs.google.com/document/d/1fFxCtQd35X7Lww3NmCZcFdzaGRgTdvPJXpiOM_CdPrc/edit)

:::info
Side note: RHTAS is also part of the RHTAP SKU so will be integrated into whatever RHTAP ends up shipping. It will _also_ be used internally as part of Konflux at some point, though this is not customer facing. RHTAS is what will be used _to sign artifacts_ of all Tekton chain pipelines for Red Hat products.
:::


## Enterprise Contract (EC)

The [Enterprise Contract](https://enterprisecontract.dev/) is a set of tools for maintaining software supply chain security, and for the definition and enforcement of policies related to how container images are built and tested.


## Snapshots

When we do any build in RHTAP, or any build or PR or push request at all, a snapshot is created of all the components in the app and are piled together.

For the release to happen, it has to be a successful build for _all_ the components in order to create a successful snapshot. To do that, we need to get the most recent snapshot from Konflux, that's passing EC. There are a few ways to do this:

1. Using the Konflux UI, navigate to `RHTAS Workspace -> application_name -> Deployments -> Select the default Deployment` and you can see the most recent snapshot that has passed EC.
2. Using the CLI, run the following command:


```
oc get snapshots -l appstudio.openshift.io/application=$application_name,pac.test.appstudio.openshift.io/event-type=push --sort-by=.metadata.creationTimestamp --no-headers | tail -n 1 | awk '{print $1}
```


3. Using a script like [this one](https://github.com/securesign/helper-scripts/blob/main/get-quay-images.sh), can be used to grab all the most recent snapshots.

:::info
Tip: It’s never a bad idea to inspect the snapshot being used for the release, to check things such as creationTimestamp, make sure it passed EC, etc.
:::


## Creating a Release PR

In Trusted Artifact Signer, we track the current as well as previous releases in this repo: [https://github.com/securesign/releases](https://github.com/securesign/releases), to create a release pr simply clone down the repo, checkout a branch named after the current release, eg `release-1.0.1`, and open a pr as a draft against main. This pull request will act as a base for tracking the snapshots and release objects for the current release, any changes made to this pull request must be made through a pr from another branch named after the release for example `release-1.0.1#1`.

* Example release pull request: [https://github.com/securesign/releases/pull/16](https://github.com/securesign/releases/pull/16)
* Example change pull request: [https://github.com/securesign/releases/pull/17](https://github.com/securesign/releases/pull/17)



## Generating a new build of the operator

* Ensure all the images being used in the operator match the images in the release pr, all images being used can be found [here](https://github.com/securesign/secure-sign-operator/blob/main/controllers/constants/images.go). If they don’t, create a PR to rectify this.

:::info
The only thing you should need to change here is the digest for the image the coordinates should remain.
:::

* Next, Once a new build is generated from the above, grab the image using a method described in [#SnapshotGeneration](https://docs.google.com/document/d/1ko9762__FySOq2-_Ehd8Z3pgUf89Auk88chgev7U5hc/edit#heading=h.nm7x7z8i5ext), and update the bundle, to do this:
  * Update the digest [here](https://github.com/securesign/secure-sign-operator/blob/main/Makefile#L37) & [here](https://github.com/securesign/secure-sign-operator/blob/main/config/manifests/bases/rhtas-operator.clusterserviceversion.yaml#L7)
  * Run `make bundle` & inspect the diff to make sure your changes took effect and nothing unnecessary got changed.
  * Commit, push and merge before moving on.
* Next, update the FBC images, to do this:
  * Replace the image used for the bundle with the `quay.io` one generated from the previous step [here](https://github.com/securesign/secure-sign-operator/blob/main/fbc/v4.13/graph.yaml#L26) or whichever release we are currently working on. (In this case it needs to be the quay images, as when generating the catalog file it will try to pull the bundle image) &#x20;
  * Using opm, which can be found [here](https://github.com/operator-framework/operator-registry/releases/tag/v1.26.4), regenerate the catalog.json files using the command `opm alpha render-template basic ./graph.yaml > catalog/RHTAS-operator/catalog.json` (NOTE: This specific version of opm should be use, more info [here](https://redhat-internal.slack.com/archives/C05M2GGKU7Q/p1708487721634919))
  * Any change to a previously released bundle should be reverted.
  * Ensure all images in the [related images](https://github.com/securesign/secure-sign-operator/blob/main/fbc/v4.13/catalog/rhtas-operator/catalog.json#L341) section match the ones used in the [operator](https://github.com/securesign/secure-sign-operator/blob/main/controllers/constants/images.go).
  * It's important to revert any `quay.io` coords back to their respective `registry.redhat.io` once the process is finished. (The sha should still be different)
  * Repeat the process for different versions of OCP.
  * Commit, push and merge..



VID: [FBC-and-bundle-handover.mov](https://drive.google.com/file/d/1COpELuofN4ubwR4w55I7_SB2gCUMgZfH/view)

:::danger
Note: All these changes need to happen in different pull requests, if not the snapshots used in the release will be out-of-sync and will fail QE structural testing.
:::


## Release Notes

We track release notes in a single Jira task for each release, which you can add engineering Jiras to. For  example, see the Jira tracker we have [here for 1.0.2](https://issues.redhat.com/browse/SECURESIGN-1035). This usually gets shared with the team on Slack once its ready.

* [Release Notes Process/Workflow](https://docs.google.com/document/d/18vyZbcLQB81KW2EJeRryYh4OCvB6X8D4GK1qAYalTbo/edit)

## Releasing

In order for a release to proceed, there needs to be some things in place, in the following order:

1. [ReleasePlanAdmission](https://gitlab.cee.redhat.com/releng/konflux-release-data/-/blob/main/config/stone-prd-rh01.pg1f.p1/OP/ReleasePlanAdmission/rhtas/stack.yaml?ref_type=heads)
2. [ReleasePlan](https://github.com/securesign/releases/blob/main/1.0.0/releasePlans/rekor-search-ui.yaml)
3. [Release](https://github.com/securesign/releases/blob/main/1.0.0/releases/rekor-search-ui.yaml)

The `ReleasePlan` and `Release` objects should be updated and maintained in the release PR, and the `ReleasePlanAdmission` is maintained in this [repo](https://gitlab.cee.redhat.com/releng/konflux-release-data).

Once all is in place, and updated for the current release, releasing itself is a straightforward process:

* Run the cmd `oc apply -f <path/to/releasePlan>` to create/update the release plan in our Konflux cluster
* Run the cmd `oc apply -f <path/to/release>` to create the release pipeline.
* If, for whatever reason you need to re-run a release, use the cmd `oc delete release <release_name>` to delete the release, then reapply the release object.

You can view and monitor the release pipeline using the following command&#x20;

```
oc get releases
```

Please make sure to run the release in this order:

* Components -> Operator -> FBC images

:::info
To view the actual logs of the release you will need to ask to join the ``rhtap-releng`` workspace in Konflux, you can ask for access in [#konflux-users](https://redhat.enterprise.slack.com/archives/C04PZ7H0VA8)
:::

When running the release for the FBC images, make sure to run the staging pipelines first to make sure everything succeeds, then run the production pipelines.


