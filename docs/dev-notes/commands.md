# Common Commands

## git

Pull in changes from the remote repository (ie if your colleagues have made changes you need to pull into your local system):

```shell
git pull
```

Make changes locally in your IDE (e.g. VSCode, WebStorm), and commit the changes by first adding all the files to staging:

```shell
git add -A
```

And then committing them:

```shell
git commit -m "your commit message here"
```

Push changes when you're done:

```shell
git push
```

And, finally, you can open a pull request on GitHub for your colleagues to review.

If they are happy with it, they'll merge it. 

## Linux commands
How to get around in a Linux-based operating system.

### Change directory (folder)

Changing directories:
```shell
cd <name-of-directory>
```

### Change to parent directory
To change to the parent directory of the one you're in:

```shell
cd ..
```


### Create a file
I prefer to use Vim, an amazing text editor built into Linux systems. It will put you in Vim mode, though, be warned:

```shell
vim <name-of-file>
```



### Make a new directory
To make a new directory (or folder):

```shell
mkdir <name of directory>
```

### Delete a file
To delete a file:

```shell
rm <name of file>
```

You can also reference files in a different directory to the one you're in:

```shell
rm <path-to-file>/<filename>
```

### Deleting directories recursively
And you can delete directories recursively, which means delete their children directories too:

```shell
rm -rf <name-of-directory>
```

### Move files or rename them
You can do this with the `mv` command:

```shell
mv <name-of-file> <new-path-or-new-filename>
```

