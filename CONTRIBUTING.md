# TLTR: Create a Pull Request

1. Fork this repository.
2. Clone your new repository to your system.
3. Create a new branch (i.e. `type/issue-<id>-very-short-issue-name`) from branch `develop`.
4. Commit changes and push the new branch.
5. Open and submit a PR.

If you have never opened a PR and need direction, read more below.

# Contributor's Guide

Feedback, bug reports, and pull requests are welcome. Feel free to ask for [help](https://github.com/dhruvilrathod/Angular-Master-Portfolio/issues).

Working on your first Pull Request? You can learn how from this _free_ series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

This guide has been modified from [freeCodeCamp's Contributors Guide](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/CONTRIBUTING.md)

## Forking the Project

### Setting Up Your System

1. Install [Git](https://git-scm.com) or your favorite Git client.
2. (Optional) [Setup an SSH Key](https://help.github.com/articles/generating-an-ssh-key) for GitHub.

### Forking Angular Master Portfolio

1. Go to the top-level page of this [repository](https://github.com/dhruvilrathod/Angular-Master-Portfolio)
2. Click the "Fork" button in the upper right-hand corner of the interface ([More Details Here](https://help.github.com/articles/fork-a-repo))
3. After the repository (repo) has been forked, you will be taken to your copy of the Angular Master Portfolio repo at <https://github.com/yourUsername/Angular-Master-Portfolio>

### Cloning Your Fork

1. Open a Terminal / Command Line / Bash Shell in your project's directory (_i.e.: `/yourprojectdirectory/`_)
2. Clone your fork of `Angular Master Portfolio`

```shell
git clone https://github.com/yourUsername/Angular-Master-Portfolio.git
```

**(make sure to replace `yourUsername` with your GitHub username)**

This will download the entire `Angular Master Portfolio` repo to your project's directory.

### Setup Your Upstream

1. Change directory to the new directory (`cd ./Angular-Master-Portfolio`)
2. Add a remote to the original `Angular Master Portfolio` repo:

```shell
git remote add upstream https://github.com/dhruvilrathod/Angular-Master-Portfolio.git
```

Congratulations, you now have a local copy of the `Angular Master Portfolio` repo!

### Create a Branch

Before you start working, you will need to create a separate branch specific to the issue/feature you're working on. You will push your work to this branch.

#### Naming Your Branch

There are several strategies for naming branches.

You could name the branch something like `fix/issue-<id>-xxx` or `feature/issue-<id>-xxx` where `xxx` is a short description of the changes or feature you are attempting to add. For example `fix/email-login` would be a branch where you fix something.

Your branch must be created from branch `develop`

### Syncing `develop` branch
If you don’t have a develop branch locally yet, you can create it by checking it out from the upstream develop branch:
```
git checkout -b develop upstream/develop
```
If you already have a develop branch, just switch to it:
```
git checkout develop
```
Fetch the latest changes for develop from the upstream:
```
git fetch upstream
```
Rebase your local develop branch with the upstream develop branch:
```
git pull --rebase upstream develop
```

#### Adding Your Branch

To create a branch on your local machine (and switch to this branch):

```shell
git checkout -b [branch-name]
```

and to push to GitHub:

```shell
git push origin [branch-name]
```

**If you need more help with branching, take a look at [this](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches).**

### Creating a Pull Request

#### What is a Pull Request?

A pull request (PR) is a method of submitting your new site to the `Angular Master Portfolio` (or any repo, for that matter). You will make changes to copies of the files in a personal fork, then apply to have them accepted by the original repo.

#### Need Help?

Feel free to ask for [help](https://github.com/dhruvilrathod/Angular-Master-Portfolio/issues), we are here to help.

#### Important: ALWAYS EDIT ON A BRANCH

Take away only one thing from this document: Never, **EVER** make edits to the `develop` or `master` branches. ALWAYS make a new branch BEFORE you edit files. This is critical, because if your PR is not accepted, your copy of staging will be forever sullied and the only way to fix it is to delete your fork and re-fork.

#### Methods

There are two methods of creating a pull request for 'Angular Master Portfolio':

- Editing files on a local clone (recommended)
- Editing files via the GitHub Interface

##### Method 1: Editing via your Local Fork _(Recommended)_

This is the recommended method. Read about [How to Setup and Maintain a Local Instance](#maintaining-your-fork).

1.  Perform the maintenance step of rebasing `master`.
2.  Ensure you are on the `master` branch using `git status`:

        $ git status
        On branch master
        Your branch is up-to-date with 'origin/master'.

        nothing to commit, working directory clean

3.  If you are not on `master` or your working directory is not clean, resolve any outstanding files/commits and checkout `git checkout master`

4.  Create a branch off of `develop`.

5.  Edit your file(s) locally with the editor of your choice.

6.  Check your `git status` to see unstaged files.

7.  Add your edited files: `git add path/to/filename.ext` You can also do: `git add .` to add all unstaged files. Take care, though, because you can accidentally add files you don't want to be added. Review your `git status` first.

8.  Resolve any merge conflicts before commiting.

9.  Commit your edits. `git commit -m "your-commit-message"`

Please make sure to write a commit message that summarizes the changes. If you find yourself in the need to use `and` it might be better to do two separate commits.

See [Useful Tips for writing better Git commit messages](https://code.likeagirl.io/useful-tips-for-writing-better-git-commit-messages-808770609503) for inspiration.

As a note, use the present tense for your commit messages (i.e. `Add` instead of `Added`).

10. If you would want to add/remove changes to the previous commit, add the files as in Step 5 earlier, and use `git commit --amend` or `git commit --amend --no-edit` (for keeping the same commit message).

11. Push your commits to your GitHub Fork: `git push origin [branch-name]`

12. Once the edits have been committed, you will be prompted to create a pull request on your fork's GitHub Page.

13. By default, all pull requests should be against the `Angular Master Portfolio` main repo, `develop` branch.
    **Make sure that your Base Fork is set to Angular-Master-Portfolio/master when raising a Pull Request.**

14. Submit a pull request from your branch to the `Angular Master Portfolio`'s `develop` branch.

15. The title (also called the subject) of your PR should be descriptive of your changes and succinctly indicate what is being fixed.

### Next Steps

#### If your PR is accepted

Once your PR is accepted, you may delete the branch you created to submit it. This keeps your working fork clean.

You can do this with a press of a button on the GitHub PR interface. You can delete the local copy of the branch with: `git branch -D branch/to-delete-name`

#### If your PR comes back

Don't despair! You are probably being asked to make a formatting change. If you have a local copy of the repo, you can make the requested changes, commit them and push them to your fork.