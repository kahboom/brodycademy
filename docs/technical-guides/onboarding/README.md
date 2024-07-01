# 🛳️ Onboarding

_A guide for onboarding new team members to the Secure Sign / TAS project_

:::warning
This page is a work in progress. If you find anything that may be useful to the onboarding process please feel free to add to the doc.
:::

:::info[Note]
All of these documents should be available to all team members. If you do not have access to a document listed here, please reach out to the team.
:::


## Communications

The team mostly communicates via Slack:

* Team chat [#team-trusted-artifact-signer](https://redhat.enterprise.slack.com/archives/C05M2GGKU7Q)
* Internal Red Hat [#forum-trusted-artifact-signer](https://redhat.enterprise.slack.com/archives/C05G8TKPN7P)

:::tip
When in the Slack channel make sure to add Cluster bot for spinning up Openshift clusters.
:::

* Secure Sign Team Travel & PTO [Calendar](https://calendar.google.com/calendar/u/0?cid=Y19iMGZiZDE3Zjc5MGM2Mjk4OWY4MjAzYTdjNTkxY2E4MjA3MDVhMzJmYzExMzE5MWZkYTU5MGNmNWNmY2E3Y2ZkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20)
* Team Roster Link [Here](https://docs.google.com/spreadsheets/d/1GCDaEoiTw8os2H6dAl-OiWJG915pBTHnK3RTeWhcKII/edit#gid=0) (May have to request access)
* Mailing list: [team-secure-sign@redhat.com](mailto:team-secure-sign@redhat.com)

## General information and use cases

* JIRA Sigstore Epic [Kanban](https://issues.redhat.com/projects/SECURESIGN/summary)
* The Source [product page](https://source.redhat.com/communities/communities_of_practice/applications/integration_cop/integration_community_of_practice_forum/sigstore_productization)
* [Red Hat Trusted SecureSign Use Cases](https://docs.google.com/document/d/1ZpFy6nlwFC9sYAW9T4nfZAGuvME_wYXrk0FKYaDoTXY/edit?usp=sharing)

## Productization

* [RHTAP](https://console.redhat.com/preview/application-pipeline/workspaces/rhtas/applications)
* [Component matrix](https://docs.google.com/spreadsheets/d/1R02GS2wPElVC3yzxhPqtJaKh-dX1wFvd31Pu3MBOCmo/edit?usp=sharing)

## Upstream

* Upstream Website: [sigstore.dev](https://www.sigstore.dev/)
* Upstream Repos: [github.com/sigstore](https://github.com/sigstore)
* Upstream Docs: [docs.sigstore.dev](https://docs.sigstore.dev/)

## Midstream

Where most of our work takes place.

* [github.com/securesign](https://github.com/securesign)

### Running the service locally

* A [guide](https://github.com/redhat-et/sigstore-ocp) to running Sigstore on Openshift

### Updating versions within the image factory

[https://drive.google.com/file/d/1mYF5shjrHqEJNRK8sYrxBRP4UKQahpEf/view?usp=sharing](https://drive.google.com/file/d/1mYF5shjrHqEJNRK8sYrxBRP4UKQahpEf/view?usp=sharing)

### Ansible Podman Securesign

[https://drive.google.com/file/d/1ruLaqCUwHCfPMgTNFEUL7HcPvc1GOgLl/view?usp=sharing](https://drive.google.com/file/d/1ruLaqCUwHCfPMgTNFEUL7HcPvc1GOgLl/view?usp=sharing)



## Product security

* [Security Training Required for Software Engineers and Quality Engineering](https://docs.engineering.redhat.com/display/PRODSEC/Secure+Development+training)&#x20;
* [Offering registry](https://product-security.pages.redhat.com/offering-registry/offerings/red-hat-trusted-securesign/)

### RH-SDL

* [Info](https://docs.engineering.redhat.com/pages/viewpage.action?pageId=330178595)
* [Schedule](https://docs.google.com/document/d/1Ud-QFcx7NODWy_9hY6NvHJGnmIixdmkHOpCgpW0GghM/edit?usp=sharing)



## Long Running Systems

* [ROSA](https://console-openshift-console.apps.open-svc-sts.k1wl.p1.openshiftapps.com/dashboards)
* If you do not have access to the rosa cluster and need it make and issue here: [https://github.com/redhat-et/rosa-apps](https://github.com/redhat-et/rosa-apps) and tag `@gregory-pereira`
* [AAP](https://sigstore-aap.apps.open-svc-sts.k1wl.p1.openshiftapps.com/#/home%20admin:9ULZTDt0peR6clnHEkUvVo7T33fsQB8s)



## Relevant technologies

Technologies relevant to the project

* Golang
* Openshift / Kubernetes
* Yaml
* Podman
* Sigstore
* Cosign
* Helm
* Keycloak
* Ansible
* Cluster Bot
* Git
* OperatorSdk



## Overviews

:::warning
NOTE: This section needs review
:::

### Securesign repo branches

Branches: the midstream branch, e.g. midstream-v2.1.1 is analogous to main. While main is our collection of overlays and patches for release-next the midstream-v2.1.1 branch is our collection of overlays and patches for a specific release line, e.g. redhat-2.1.1 which may differ from the latest stuff on main.

| Our branch       | Purpose                           | Tracking upstream       |
| ---------------- | --------------------------------- |-------------------------|
| main             | overlays/patches for release-next | <p><br/></p>            |
| release-next     | pulls in upstream changes         | HEAD                    |
| midstream-vx.y.z | overlays/patches for redhat-x.y.z | <p><br/></p>            |
| redhat-x.y.z     | pulls in upstream changes         | Specific release branch |



### Documentation

* [TAS Deployment Guide](https://access.redhat.com/documentation/en-us/red_hat_trusted_artifact_signer/2023-q4/html-single/deployment_guide/index) on the Customer Portal.
* To view documentation preview builds on the Customer Portal:

1. Open a web browser.
2. Go to the [Customer Portal](https://access.redhat.com), and login using your Red Hat SSO account.
3. Go to [Pantheon](https://pantheon.cee.redhat.com), and click Login. By logging in again, this creates your user account (if one does not already exist) in the Customer Portal preview and stage environments.
4. On the Titles page, type Trusted in the filter dialog box.
5. Click the Red Hat Trusted Artifact Signer product.
6. On the Red Hat Trusted Artifact Signer page, click the globe icon for the chosen environment: Preview, Stage, or Prod, from the published titles (currently just the Deployment Guide).

* A quick [video](https://drive.google.com/file/d/1730j-DQbe9QTeQUv64fv4DnEFY9DY1ZJ/view?usp=drive_link) demonstration on how to access the Customer Portal preview environment to view the latest documentation builds.
* Downstream documentation [Git repository](https://gitlab.cee.redhat.com/software-supply-chain-documentation/doc-rhtas).
* Upstream document [Git repository](https://github.com/securesign/sigstore-ocp).


### Image Build Overview

RHTAS is made up of a lot of images created across our repos. All of which are built from dockerfiles using the Konflux System.

1. Advised Reading
   1. [Component Matrix](https://docs.google.com/spreadsheets/d/1R02GS2wPElVC3yzxhPqtJaKh-dX1wFvd31Pu3MBOCmo/edit#gid=2049575423) (RHTAS Image List)
   2. [Konflux Docs](https://redhat-appstudio.github.io/docs.appstudio.io/Documentation/main/getting-started/get-started/)
   3. Access to Konflux
   4. #TODO Konflux Repo Onboarding Video
2. Build Overview
   1. Each of our repos has a distinct dockerfile for each image we are building. [TrillianLogserver example](https://github.com/securesign/trillian/blob/main/Dockerfile.logserver.rh)
   2. Once a Dockerfile is created and is building correctly we then would onboard it to Konflux.



## Setting up your environment

Let's add some docs here, or a link to docs for our teammates to be able to set up their environments easily.

## Other things to know

* We have a daily standup (only required for engineering)
* Weekly meetings: Program call, Jira triage

:::info[Note]
Always refer to the RHTAS Google Calendar for the most up-to-date information about team meetings
:::

The original Google doc, from which this guide is based off of, is located [here](https://docs.google.com/document/d/1mXB-jaR0fQpJenPfeusLUcpTLjuyEl9HvWGwyESBZoU/edit#heading=h.fx7f3qkl5khy).

