# Developer Workflow

Depending on the size of the team you're working in, you might have to work with a version control system (VCS). One of the most popular is called git, and it was created by the same person who created Linux, Linus Torvalds.

## Day-to-Day

On a day-to-day basis, I'll wake up, open up my project, pull in any changes from my colleagues, and continue working locally until I'm ready to push my committed changes.

### Pull in changes from upstream

In the terminal, I usually pull in any new changes from the remote `upstream` repository (if I'm working with forks):

```shell
git pull upstream main
```

To see which remotes you have configured:

```shell
git remote -v
```

And you can add/remove remotes with `git remote add <url>` or `git remote remove <label> <url>`, where `<label>` is something like `origin` or `upstream`.

### Make my changes locally

### Add and commit changes with git

### Push changes & create a PR

Then I update my fork by pushing my changes:

```shell
git push
```

Then, in the browser, I go to GitHub to the upstream repository and into Pull Requests > Create Pull Request.

Click the "compare across forks" link in the text, selecting the appropriate fork and branch.

Press the Create Pull Request button, filling in any details. Finally, press Submit.


## SSH & Key-Pairs

You can connect to GitHub using the Secure Shell Protocol (SSH), which provides a secure channel over an unsecured network.

Using the SSH protocol, you can connect and authenticate to remote servers and services. With SSH keys, you can connect to GitHub without supplying your username and personal access token at each visit. You can also use an SSH key to sign commits.

:::info
This is the same method we used in [Day 1](../../work-experience/day-1) when I tried to log into the Thinkpad laptop from my MacBook, and that you used on [Day 2](../../work-experience/day-2) to log into the GitHub servers, so you wouldn't have to provide your username and password every time!
:::

You only have to set this up once for the server you're trying to connect to and then the same configuration can be used for future projects.

:::tip
Always try to use the SSH URL instead of the HTTPS url when cloning a repository locally. In other words, it should start with `git:` instead of `https://`.
:::


https://docs.github.com/en/authentication/connecting-to-github-with-ssh





