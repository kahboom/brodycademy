# Quickly test a build

Some tips on how to quickly test a build--for example, if QE have run into an issue for the release and you need to test it.

Quickly testing a build will vary widely based on the component you are looking to test, so although we would not be able to cover all cases, feel free to use these as starting points.

## TAS operator on EKS

QE usually run their tests on AWS EKS, so it's often easier to spin up an EKS instance to try to reproduce any issues. You can do this with ClusterBot by messaging it with the following command instead of `rosa create`:

```
launch 4.15 aws
```

## TAS operator: testing a PR locally

We'll use the following PR as an example that we want to test locally: https://github.com/securesign/secure-sign-operator/pull/268

1. Log into your OpenShift cluster
2. Checkout the `dev` branch:

```
git fetch origin
git checkout --track origin/dev
```

3. In `controllers/constants/images.go`, update the Rekor Search UI container image to point to `rekor-search-ui` built from my most recent commit in [this PR](https://github.com/securesign/rekor-search-ui/pull/37).

Replace this line:

```
RekorSearchUiImage = "quay.io/redhat-user-workloads/rhtas-tenant/rekor-search-ui/rekor-search-ui@sha256:6ba83b2e09d77c0e3cc21739cb51c6639a9a8586de9b8e9924983795dad4f9ba"
```

With this:

```
RekorSearchUiImage = "quay.io/kahboom/rekor-search-ui@sha256:68a21610cd7de9c34466fed181fb3b26e527906e194f90657ab3c785b2151c85"
```

4. Proceed with [normal development instructions](https://github.com/securesign/secure-sign-operator?tab=readme-ov-file#local-development):

```
make install
make run
```
