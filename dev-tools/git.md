## How to read this

- `Recommendation`: Take your time and start from the top
- Unfortunately I was writing notes while studying and coding so most of the examples will build upon the previous sections
- If you just want to quickly see what something is and what’s the syntax for it is, then feel free to hop between sections.

## Introduction

- Git is a distributed version control system, VCS.
- Instead of the traditional centralized control system where even checking out a file required admin privileges, git allows any work to be locally and may diverge as much as you want.
- In Git, commands are divided into high level ("porcelain") commands and low level ("plumbing") commands.

## Key Terms in Git

| **Term** | **Description** |
| --- | --- |
| **Repository/Repo** | A project being tracked by git. Initialized using `git init` |
| **Commit** | A point in time representing the project in its entirety. A commit is represented as the SHA calculated from the contents of change, author, time and more metadata. This is done using `git commit` |
| **Index** | Staging area |
| **Squash** | Merge several commits into one single commit. (More specifically, it is mapping N commits to 1 commit). |
| **Working Tree** | This is your git repo where the files and directories represent your project. |
| **Untracked Files** | Files are not indexed and tracked by git (easy to accidentally lose progress if you haven’t tracked your files. |
| **Staged Files** | Files added to the staging area for committing using `git add` |
| **Tracked Files** | Files which are being watched by git for changes. A file could be both tracked and staged for changes. |
| **Remote** | Same git repo on another computer or directory. You can accept changes from OR push changes to the remote (think Github). |

![Untitled](Git%20ee49e1792ae9452294b0c444b5dca70c/Untitled.png)

## Some things about Git

- Git is an acyclic graph
- Each commit is a node in the graph, and each pointer is the child to parent relationship.
- Commit early, commit often, you can always change history to make it one commit.
- Everything needed for git to function is stored in the `.git` folder.

## Creating a new git repo

- `cd` into your preferred directory.
- `mkdir` a new directory and `cd` into it.
- run `git init` command.
- To see what’s inside of the git repo expand the following:
- `.git` folder contents

    ```tsx
    tree .git
    .git
    ├── HEAD
    ├── config
    ├── description
    ├── hooks
    │   ├── applypatch-msg.sample
    │   ├── commit-msg.sample
    │   ├── fsmonitor-watchman.sample
    │   ├── post-update.sample
    │   ├── pre-applypatch.sample
    │   ├── pre-commit.sample
    │   ├── pre-merge-commit.sample
    │   ├── pre-push.sample
    │   ├── pre-rebase.sample
    │   ├── pre-receive.sample
    │   ├── prepare-commit-msg.sample
    │   ├── push-to-checkout.sample
    │   ├── sendemail-validate.sample
    │   └── update.sample
    ├── info
    │   └── exclude
    ├── objects
    │   ├── info
    │   └── pack
    └── refs
        ├── heads
        └── tags
    ```


## Log changes in the Repository

- We can see the various commits that lead to changes in the repo using
`git log`
- You can use `—-graph —-decorate —oneline` options as well
    - `graph` just shows a visual representation of the commit history.
    - `decorate` is used to preserve some visual aids when redirecting output to a file.
    - `oneline` is used to just show the SHA and the commit log along with the reference.
- This will print out some information such as:

    ```
    $ git log --graph --decorate

    * commit 802e186501de939bf8f24e445fb461a256fea435 (HEAD -> master)
      Author: Priyanshu Bharti <46714242+priyanshu-bharti@users.noreply.github.com>
      Date:   Wed Jun 12 02:35:30 2024 +0530

          add first markdown
    ```

- commit 802… is the SHA of the commit
- (HEAD → Master) is the reference of the commit with respect to the branch name
- Author, date and commit messages are shown below
- And there is this * (asterisk) before the commit which means that graph only has one node in the output.

## How git stores your changes internally

- We already saw what happened when you executed `git log`
- Go ahead and run `git cat-file -p <SHA>`
- Following will be the output

    ```
    $ git cat-file -p 802e186501de939bf8f24e445fb461a256fea435

    tree c165c5fb0245d50ac93a02c02dbf27d5aa6e58fc
    author Priyanshu Bharti <46714242+priyanshu-bharti@users.noreply.github.com> 1718139930 +0530
    committer Priyanshu Bharti <46714242+priyanshu-bharti@users.noreply.github.com> 1718139930 +0530
    ```

- Here, the details about the author and committer is pretty straightforward
    - But what’s this `tree`?
        - It is a directory, containing a set of files or more directories.
- Now let’s execute this command again, but with the SHA of the tree.

    ```
    $ git cat-file -p c165c5fb0245d50ac93a02c02dbf27d5aa6e58fc

    100644 blob e69de29bb2d1d6434b8b29ae775ad8c2e48c5391	first.md
    ```

- Now, we see some number which kinda looks like file permission in linux, and this blob thing, another `SHA` and look, there’s our filename from the commit we have made.
    - Now, what’s this `blob` thing? Its called a binary large object
        - In our case, it is basically a file.
- Let’s execute this `SHA` one final time and see what happens.

    ```
    $ git cat-file -p e69de29bb2d1d6434b8b29ae775ad8c2e48c5391

    Hello, World!
    ```

- This “Hello, world” string is the change I had committed.

Why go digging through the file system all of a sudden you might ask?

- This could be useful for finding the information from any deleted file which was committed in the past.
- Having a knowledge of these internal workings can be helpful in restoring contents.
- What would happen if we added a second commit?
- We’ll see that now `git cat-file` prints out:

    ```
    $ git cat-file -p ea4ca2e8eca45e90142c39a395b516d7cf0017a9

    tree e6637a8bf8a89f9bc0fb372fb0b0396dd31c31d5
    parent 802e186501de939bf8f24e445fb461a256fea435
    author Priyanshu Bharti <46714242+priyanshu-bharti@users.noreply.github.com> 1718144314 +0530
    committer Priyanshu Bharti <46714242+priyanshu-bharti@users.noreply.github.com> 1718144314 +0530
    ```

- And when we dive deep it lists out:

    ```
    $ git cat-file -p e6637a8bf8a89f9bc0fb372fb0b0396dd31c31d5

    100644 blob e69de29bb2d1d6434b8b29ae775ad8c2e48c5391	[first.md](http://first.md/)
    100644 blob d675fa44e50606caa705c3f48de02cf129c7f9a2	[second.md](http://second.md/)
    ```

- So, one thing is clear, git doesn’t store the diffs of the changes you made, instead it compresses and stores your actual file in entirety.
- As long as your file has not changed, git won’t create a separate version of your tracked file, notice that the `802` commit is still there being referenced as the parent commit.
- So you can rebuild entire codebase using a single commit as everything is going to be linked together.

![Untitled](Git%20ee49e1792ae9452294b0c444b5dca70c/Untitled%201.png)

If you’re wondering what happens on the file system level, git creates a new directory under the objects folder and places a symlink to the parent commit directory. Rest (newer) changes are kept in the newly created directory, while old changes are only preserved and referenced.

## Configuring Git

### Adding values to config

- We can configure our name and email using the following commands

    ```
    git config --add --global user.name "Priyanshu"
    git config --add --global user.email "priyanshu@orkut.com"
    ```


### Modify values in config

- The configuration which we modify or add consists of 2 parts `section` and `keyname`

    ```
    // To add a new key value to a section
    git config --add <--local|--global> <section>.<keyname> <value>

    // To modify existing key value
    git config <--local|--global> <section>.<keyname> <value>

    // To delete entire sections
    git config --remove-section <section>
    ```

- Suppose if we had to create section `foo` and add `bar` and `baz` as key names, we could do

    ```
    git config --add foo.bar value
    git config --add foo.baz value2
    ```


### Listing out values in config

- To list the values in the config, we can use the following commands

    ```
    // To list everything
    git config --list

    // To list something specific
    git config —-get foo.drake

    // To list something in a section
    git config --get-all foo
    ```

- To be honest `git config —list | grep <thing>` is more friendly to me.

### Multiple keys with same name

- BTW, Keys are not unique in git. Meaning if you add another value for user.name, then it won’t be overwritten, instead the value will simply get added alongside the previous value (if any).

    ```
    foo.dev certified
    foo.drake loverboy
    foo.git certified
    foo.drake pedophile
    ```

- If you use `git config --get foo.drake` then you’ll see the latest value of the key.

### Unsetting a value

- If you want to unset a value use the following command

    ```
    git config --unset foo.dev
    ```

- Notice that you won’t be able to delete a key with multiple values, in that case you’d need to `unset-all` the values

    ```
    git config --unset-all foo.drake
    ```


<aside>
💡 BTW all your config is stored inside of `.git/config` directory.

- Also, Git by default looks at the local config.
- Also also, Git grabs the config from more specific to less specific
- Also also also, Git gets the latest value from the most specific category
</aside>

- Coming back to the configuration, if we wanted to change the default name of the branch, we could execute:

    ```
    // If you want to follow Github's naming conventions for default branch.
    git config —global init.defaultBranch main
    ```

    - All of a sudden this doesn’t look all that complicated.

## Branching

- You don't always want to be developing on the `main` branch.
- Sometimes you need a feature that is developed off the main line, such that you can return to the `main` line, update the code, branch off, and perform some immediate needed fix.
- This is where git branches come in. They are *cheap*, virtually free, to create.
- With our of understanding git internals this will become much more clear throughout this section

### Creating a branch

- Creating a branch is as easy as writing its name

    ```
    git branch <name>
    ```


### Viewing all Branches

- Here is how to view all branches

    ```
    // View local branches
    git branch

    // View ALL branches
    git branch --all
    ```


### Branch just points to the same commit you’re on.

- You’d expect that after creating a branch, you’d be on the new branch but you’re not
- This is because git creates a new branch which points to the commit you’re currently on.
- Also git doesn’t automatically switches between branches, you need to do that manually when you `checkout`
- If you `cat` out the value inside `cat .git/refs/heads/<branch>` you’ll see:

    ```
    $ hello-git git:(master) cat .git/refs/heads/dev
    cb75afebfac407bfc860dd854b626322a6dc8345

    $ hello-git git:(master) cat .git/refs/heads/master
    cb75afebfac407bfc860dd854b626322a6dc8345
    ```

- Notice that both point to the same commit SHA.

### Switching between branches

- You can use `git checkout` or `git switch` to switch between branches.

    ```
    git switch <branch>
    git checkout <branch>
    ```

- `checkout` is a more versatile operation, but you can use whatever you like.

### Deleting Branches

- If you wish to delete a branch use git branch `-d`
- If you wish to force delete a git branch use `-D`

```
git branch -d <branch>
```

```jsx
---
command: git merge <origin> <localbranch>
description: Merges 2 branches
---
```

## Merge

- On  `master` branch, create [`first.md`](http://first.md) and write A on a line and commit it with message `"A"`

    ```
    git init
    touch first.md

    echo "A" >> first.md
    git add .
    git commit -m "A"
    ```

- Create and switch to another branch called `foo`, create [`second.md`](http://second.md) and write `"B"` in it and commit with a similar message

    ```
    git checkout -b foo
    touch second.md

    echo "B" >> second.md
    git add .
    git commit -m "B"

    echo "C" >> second.md
    git add .
    git commit -m "C"
    ```

- Switch back to the master branch and make a few more commits.

    ```
    git checkout -

    echo "D" >> first.md
    git add .
    git commit -m "D"

    echo "E" >> first.md
    git add .
    git commit -m "E"
    ```

- Your commit history should look like this:

    ```
       B --- C     foo
     /
    A --- D --- E  master
    ```

- As we can see, we have diverged histories for both the foo and master branch from some common point in the past.
- This common point is called as the `best common ancestor` or `merge base`
    - In this case since both branches diverged after `A`, `A` is the `merge base`.
- Git then merges the sets of commits onto the merge base and creates a new commit at the tip of the branch that is being merged on with all the changes combined into a single commit.

    ```
    // Currently on master

    // We switch to the new branch master-merge foo
    git checkout -b master-merge-foo

    // We marge foo onto the master-merge-foo after the merge base commit (A)
    git merge foo
    ```

    ![Untitled](Git%20ee49e1792ae9452294b0c444b5dca70c/Untitled%202.png)

    - Now, if I run git log with a few options, I will see all the commits from recent to oldest (top to bottom).

    ```
    $ git log --graph --oneline --decorate --parents

    *   98a3c84 789fdc1 2b7eea4 (HEAD -> master-merge-foo) Merge branch 'foo' into master-merge-foo
    |\
    | * 2b7eea4 5b1e6a7 (foo) c
    | * 5b1e6a7 0ef1437 b
    * | 789fdc1 649fcd2 (master) e
    * | 649fcd2 0ef1437 d
    |/
    * 0ef1437 a
    ```

- Another thing to notice is that when we merged these branches, we were asked for a commit message. This is due to both branches being diverged.

### Fast-Forward vs 3-way Merge

- When we have a commit history like this, where the master and bar have not diverged,
- Instead, the only changes we’ve made exists in bar, In such cases, Git can just merge using the fast forward strategy.

![Untitled](Git%20ee49e1792ae9452294b0c444b5dca70c/Untitled%203.png)

- Notice what happens when we merge bar onto master.

    ```
    $ git merge bar

    Updating 789fdc1..f850194
    Fast-forward
     bar.md | 2 ++
     1 file changed, 2 insertions(+)
     create mode 100644 bar.md
    ```

- Git did not ask us for a commit message due to this:

    ```
    $ git log --graph --oneline --decorate --parents

    * f850194 9951068 (HEAD -> master, bar) y
    * 9951068 789fdc1 x
    * 789fdc1 649fcd2 e
    * 649fcd2 0ef1437 d
    * 0ef1437 a
    ```

- Git simply added those commits onto the master branch. Our commit history now looks like:

![Untitled](Git%20ee49e1792ae9452294b0c444b5dca70c/Untitled%204.png)

- The best common ancestor was the tip of the branch you were merging onto.
- Git just took the commits from bar, and updated the pointers on the master branch.
- You don’t need to resolve conflicts on any linear history with no divergence.

## Rebase

- Rebase just updates the commit where the branch originally points to.
- Allows you to update underneath your set of changes.
- Rebase is changing the history in some same sense, as you could have your current reality and then your changes as opposed to some previous reality which no longer holds true.
- Let’s look at our commit history so far:

![Untitled](Git%20ee49e1792ae9452294b0c444b5dca70c/Untitled%205.png)

- Simple and straightforward (insert sarcasm here…)
- Notice that `master` has the last commit of `Y` and `foo` is still way behind on merge base `A`.
- With Rebase, we can move `foo` all the way to the `latest` commit on the `master` branch

![Untitled](Git%20ee49e1792ae9452294b0c444b5dca70c/Untitled%206.png)

- Checkout to the `foo` branch and create and `switch` to a new branch named `foo-rebase-master`
- Once you’re on the new branch, execute `git rebase master`

### What Rebase actually does

- When we execute `git rebase master` on the `foo-rebase-master` branch, we’re telling git to move the `foo-rebase-master` branch to the tip of the `master` branch.
- Then git will temporarily switch to the `master` branch and checkout its latest commit.
- Git will then take the commits from the `foo-rebase-master` branch and reapply them on top of the master branch one commit at a time.
- Once all the commits from the `foo-rebase-master` branch have been `replayed` on the `master` branch, Git will update the `foo-rebase-master` branch to point to this new series of commits.
    - Note that replay means that new commits are created and history is changed.
- This effectively moves the `foo-rebase-master` branch to be on the tip of the `master` branch but still include all the changes from its own branch.

## HEAD

- You should rarely use it as it can cause problems if you don’t know what you’re doing.
- Lets do some basic experimenting first

    ```
    // Switch to the master branch
    $ git checkout master
    Already on 'master'

    // View all the commits
    $ git log --oneline
    f850194 (HEAD -> master, bar) y      // What's this HEAD?
    9951068 x
    789fdc1 e
    649fcd2 d
    0ef1437 a

    // Switch to another branch
    $ git checkout foo
    Switched to branch 'foo'

    // View all the commits
    $ git log --oneline
    2b7eea4 (HEAD -> foo) c              // What's this HEAD? Also, it changed.
    5b1e6a7 b
    0ef1437 a
    ```

- Head points to whatever branch or commit we have checked out.
- If you execute `ls .git` you’ll see it exists as a top level item.
- If you `cat .git/HEAD` you’ll see it references the `refs/heads/foo` pointer to the branch.
- If you `cat .git/refs/heads/foo` you’ll see that it is just the SHA of the latest commit on the branch.

### Reflog

- You can watch how the references have changed or how you’ve moved using `git reflog`
- Reflog is just a file in .git/logs/HEAD
- If you only want to view the last K lines you can run `git reflog -<K>`

#### Recovering a deleted file using Reflogs and Cherry-picks

- Suppose you created a new branch `baz`, and you commit a change on it.
- Then you `checkout` to the `master` branch, and accidentally delete the branch `baz` instead of `bar`
- You can get the change back using `git reflog` and using `git merge <SHA for deleted commit>`
- The problem with merge is that if the branches were diverged, then all the commits post the best common ancestor will also be replayed and merged back.
- Luckily there’s another way of doing things.
- You can use `git cherry-pick <SHA>` to only get the changes you want.

## Remotes and Origins

- Sometimes we need code changes created by other people.
- We can pull their and push our changes to the repo.

### Creating a new remote

- Remote repo doesn’t have to be on Github or other git storage platforms
    - It can be a simple directory with `git init` done.
    - A remote is simply a copy of the repo somewhere else
- To add a new remote to your project, run `git remote add <remoteName> <uri>`
    - Common convention for the remote name for the centralized git store such as GitHub or gitlab is `origin`
    - If you have forked another repo, that repo should be named `upstream` and your fork is still called `origin`

    ```
    // Add a new remote
    $ git remote add origin ../remote-repo

    // View the remote repos in your project
    $ git remote -v
    ```


### Fetching and merging data from the remote

- Till now, we’ve only created the repo and done nothing with it.
- To fetch and copy the changes from the remote repo to ours, we can use `git fetch`
- This will retrieve all the changes (but not apply them)
    - To prove my point we can execute `git log` and git will tell us there is no commit in the repo since we just created it.

        ```
        $ git log
        fatal: your current branch 'master' does not have any commits yet
        ```

    - To see the changes that we just pulled use `git log origin/brachName`
- To view all the branches that came down with fetch, we execute `git branch -a` to see all branches that exists.

    ```
    $ git branch -a
      remotes/origin/bar
      remotes/origin/foo
      remotes/origin/foo-rebase-master
      remotes/origin/master
      remotes/origin/master-merge-foo
    ```

    - This will show you branches starting with `remotes/origin/branchName`
        - This means that it is the last known state of the remote repo’s branch `branchName`
- In order to apply the changes we need to apply it to our branches
    - Now, since we already have `fetched` those changes, we can simply `merge` the changes and our empty branch will be `fast-forwarded` to the latest change from the remote repo.

        ```
        // While being on the master branch of the local repo
        $ git merge origin/master
        ```

- Now, this is what git log shows up.

    ```
    $ git log --oneline
    fc58578 (HEAD -> master, origin/master) z
    f850194 (origin/bar) y
    9951068 x
    789fdc1 e
    649fcd2 d
    0ef1437 a
    ```

    - All of our commits have been applied.

### Git pull

- A more convenient way of doing is using `git pull` it automatically fetches and merges the branch from the remote’s branch.
- But there’s a problem. Just because we have our master branch named `master`, and there is also a `master` branch in the `remote`, git doesn’t automatically determines that this master from the remote should be merged with the local master.

    ```
    $ git pull
    remote: Enumerating objects: 5, done.
    remote: Counting objects: 100% (5/5), done.
    remote: Compressing objects: 100% (2/2), done.
    remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
    Unpacking objects: 100% (3/3), 279 bytes | 279.00 KiB/s, done.
    From ../hello-git
       fc58578..fc224a0  master     -> origin/master
    There is no tracking information for the current branch.
    Please specify which branch you want to merge with.
    See git-pull(1) for details.

        git pull <remote> <branch>

    If you wish to set tracking information for this branch you can do so with:

        git branch --set-upstream-to=origin/<branch> master
    ```

    - We need to specify the `master` branch as shown in the error.
    - We need to do: `git branch —set-upstream-to=origin/master master`
- This way, we would tell git to track `origin/master` for changes and then apply them on local `master`.
- Now when we execute git pull, this is what we see:

    ```
    $ git pull
    Updating fc58578..fc224a0
    Fast-forward
     first.md | 1 +
     1 file changed, 1 insertion(+)
    ```


### Rebase while you pull

- Whenever you pull changes from the remote repo, you should rebase the changes you have made.
- Rebase is different from a merge, which creates a single commit that combines the histories of the branches.
- There are several benefits for doing this:
    - When you rebase, you rewrite the commit history so that your changes appear as if they were made on top of the latest changes from the remote repository.
        - This avoids creating additional merge commits that can clutter the commit history.
    - A long-lived feature branch with many merge commits can become complex and difficult to manage.
        - Each merge commit represents a point where two histories were combined, which can make reverting changes problematic if things go wrong.
        - If you rebase and keep your feature branch linear, each change is a single commit. Reverting a single commit is straightforward and clean.
    - By rebasing your changes onto the latest state of the master branch (or main branch), you ensure that your feature branch is always up-to-date with the latest changes.
        - This means you are testing your changes against the current state of the codebase, not an outdated state.
        - This reduces the likelihood of integration issues and ensures that your feature works well with the latest code.

    ```
    // Fetch the latest changes from the remote repository
    $ git fetch origin

    // Switch to your feature branch
    $ git checkout feature-branch

    // Rebase your feature branch onto the latest master branch
    $ git rebase origin/master

    // Resolve any conflicts that arise during the rebase process
    $ git add <file>

    // Once conflicts are resolved, continue the rebase
    $ git rebase --continue
    ```


### Git push

- When you want to save and sync the changes in the remote repo, you can do so using `git push` command.
- Git is going to push the changes from the currently checked out branch.
- If you want to push changes to a repo with files (non-bare repo) then you might need to push to a temporary branch which would be merged or rebased in the remote repo.
    - You can do so using `git push origin branch:branch-temp` command.

## Stashing

- Stash is a stack which saves your tracked changes and stores it like a temporary commit.
- You can add the currently made changes to the stash and then safely pull the new changes from the remote.
- Once you’ve pulled all changes, you can then pop and remove a stash, resolve any conflicts and get your changes to the latest pull of the remote repo.

    ![Untitled](Git%20ee49e1792ae9452294b0c444b5dca70c/Untitled%207.png)


```
// Push changes to stack
$ git stash

// Push with a message
$ git stash -m "your message goes here"

// List all stashes
$ git stash list

// Show the contents of a stash
$ git stash show [--index <i>]

// Pop changes
$ git stash pop

// Pop a specific stash at index
$ git stash pop --index <i>
```

## Rebasing is complex - Running into conflicts

- We already know that we can use rebase to shift where the branch point exists for one branch onto another.

    ```
          E - F - G    topic
        /
    A - B - C - D      master

    // While on the topic branch
    $ git rebase master

    // Assuming everything went smoothly, you'll have this working tree

                  E - F - G    topic
                 /
    A - B - C - D              master
    ```


### Interactive Rebasing and Squashing

- Sometimes you’d be required to squash your commits
- What this means is to do the following

    ```
                  E - F - G    topic
                 /
    A - B - C - D              master

    // After squashing your commits the working tree should look like this

                  // notice this is one commit
                  EFG          topic
                 /
    A - B - C - D              master
    ```

- Along with squashing, interactive rebasing also allows you to edit your commit messages.

### Merge Conflicts

- Conflicts happen when the same line is changed at 2 different places at the same time.
- The following message is shown when a conflict occurs

    ```
    Auto-merging first.md
    CONFLICT (content): Merge conflict in first.md
    Automatic merge failed; fix conflicts and then commit the result.
    ```


#### Resolving Merge Conflict

- When a single line has been changed by both remote and the downstream repo, you’ll see this in `git status`

    ```
    On branch master
    Your branch and 'origin/master' have diverged,
    and have 1 and 1 different commits each, respectively.
      (use "git pull" if you want to integrate the remote branch with yours)

    You have unmerged paths.
      (fix conflicts and run "git commit")
      (use "git merge --abort" to abort the merge)

    Unmerged paths:
      (use "git add <file>..." to mark resolution)
    	both modified:   first.md

    no changes added to commit (use "git add" and/or "git commit -a")
    ```

- There are key takeaways from this message
    - Unmerged paths contains a file `first.md` and it says it was modified by both up and downstream.
    - You can abort the merge due to the conflict by using `git merge --abort`
- Luckily resolving is simple and straightforward
- Open the conflicting file in the text editor, and you’ll see:

    ```
       1 <<<<<<< HEAD
    │  2 A + 2
    │  3 =======
    │  4 A + 1
    │  5 >>>>>>> origin/master
       6 a
       7 d
       8 e
       9 remote change
      10 conflicting stuff
    ```

    - This presents you with some important information:
        1. Any `>>>>`, `======`, `<<<<<` denote parts of the conflict.
        2. `<<<<<<< HEAD` means that HEAD’s conflicted change starts here until you see the `======` line.
            - The A + 2 Line was added by us and the A + 1 line was added by the remote.
        3. At the end of the `>>>>>>` is the name of the branch or the SHA of the change.
    - To resolve the commit delete or keep the things you wanna keep. (Mostly you’d be merging both versions together).
        - You need to delete the `>>>>`, `======`, `<<<<<`

    ```
      1 A + 2
      2 A + 1
      3 a
      4 d
      5 e
      6 remote change
      7 conflicting stuff
    ```


#### No Changes when accepting incoming change

- Sometimes when you just accept the incoming change and discard yours, you’d be required to make a merge commit, but the status would show that no changes were done, as you’re not actually making changes, but rather, accepting them.

### Rebase Conflicts

- Suppose that we use `git pull --rebase` on our repo to get the changes and instead of merging them, we want to rebase them.
- This will ensure that the changes are applied in a linear way instead of making it acyclic.

#### Confusing Scenario

- Suppose the same line was changed in both remote and our version of the repo.
    - On the first line of the `first.md` file, we have 2 different versions of the same line
        - Remote: A + 3
        - Ours: A + 4
- Now, when we rebase the changes and a conflict happens this is the diff we’re shown.

    ```
       1 <<<<<<< HEAD
    │  2 A + 3
    │  3 =======
    │  4 A + 4
    │  5 >>>>>>> d01c45e (A + 4)
       6 A + 1
       7 a
       8 d
       9 e
      10 remote change
      11 conflicting stuff
    ```

    - Notice something weird?
        - `HEAD` is showing REMOTE’s  changes as OUR changes.
        - Commit SHA is showing OUR changes as REMOTE’s changes.
    - This might look strange but is very simple to understand if you remember how rebase works.
        - Rebase temporarily checks out to the `origin/master` branch
        - Rebase then replays the commit from our `master` one by one.
    - Then this means
        - Git checked out to `origin/master` in our repo which means that we’re now looking through the perspective of the origin
        - Our commit was shown as an incoming change since were on the `origin/master` branch and not `master`.

### RERERE

- Stands for **`RE**use **RE**corded **RE**solution`.
- It stores the way you resolved your last rebase conflict and will be used automatically by git the next time you rebase and some conflict occurs.
- To enable `rerere` run this command: `git config rerere.enabled true`
- After enabling RERERE, the next time you run into a conflict, git will automatically resolve the conflict based on the action you took previously.

### Ours vs Theirs

- If you run into merge conflict and you want to accept ALL changes from their side or your side you can do so using `git checkout —ours <filename>`
    - When you do this and see `git status` it will still say that both sides modified it
    - You need to just cat and see that one side of the changes were applied
- This could save time if you want to accept all the changes from one side.
    - If there are lots of changes then you’d need be careful as you’ll end up accepting everything from a single side.

<aside>
💡 **If you’re using this in Rebase, you’d need to flip ours with theirs and vice-versa (due to how rebase works)**

</aside>

### Interactive Rebase

- Rebasing can be useful in scenarios when you need to combine or squash several changes into one.
- You can also edit individual commits and do more than this, but squashing is the most common usecase for interactive rebase.
- To begin an interactive rebase we need to see how many commits we first want to move back to and then replay.
    - Use `git log --oneline` to check how many commits to move back from the `HEAD`
    - Then use `git rebase -i HEAD~<N>` where N is the number of commits to go back to.
    - This `HEAD~<N>` thing is called a `commit-ish`
    - Once executed you’ll see this open:

    ```
    pick 9ebedbd Added 1 to the end
    pick 8456d89 Added 2 to the end
    pick f000c2e Added 3 to the end

    # Rebase 9f67690..f000c2e onto 9f67690 (3 commands)
    #
    # Commands:
    # p, pick <commit> = use commit
    # r, reword <commit> = use commit, but edit the commit message
    # e, edit <commit> = use commit, but stop for amending
    # s, squash <commit> = use commit, but meld into previous commit
    # f, fixup [-C | -c] <commit> = like "squash" but keep only the previous
    #                    commit's log message, unless -C is used, in which case
    #                    keep only this commit's message; -c is same as -C but
    #                    opens the editor
    # x, exec <command> = run command (the rest of the line) using shell
    # b, break = stop here (continue rebase later with 'git rebase --continue')
    # d, drop <commit> = remove commit
    # l, label <label> = label current HEAD with a name
    # t, reset <label> = reset HEAD to a label
    # m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
    # .       create a merge commit using the original merge commit's
    # .       message (or the oneline, if no original merge commit was
    # .       specified); use -c <commit> to reword the commit message
    #
    # These lines can be re-ordered; they are executed from top to bottom.
    #
    # If you remove a line here THAT COMMIT WILL BE LOST.
    #
    # However, if you remove everything, the rebase will be aborted.
    #
    ```

- This means if we replace pick with s we will squash that commit with the previous commit.

```
pick 9ebedbd Added 1 to the end
squash 8456d89 Added 2 to the end
squash f000c2e Added 3 to the end
```

- Then you can just create a new commit message

```
# This is a combination of 3 commits.
# This is the 1st commit message:

1, 2, and 3 combined

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Sun Feb 25 08:50:40 2024 -0700
#
# interactive rebase in progress; onto 9f67690
# Last commands done (3 commands done):
#    squash 8456d89 Added 2 to the end
#    squash f000c2e Added 3 to the end
# No commands remaining.
# You are currently rebasing branch 'trunk' on '9f67690'.
#
# Changes to be committed:
#    modified:   README.md
#
```

- And, Look at that! Our three commits became one! Squashing can be quite an effective technique to keep the history clean and allow you to make many small commits throughout your dev cycle, preventing loss work, and then one clean commit for reviewers.
- I personally think this is one of the best ways to go about developing.

#### My general workflow

1. many small commits with a message `"SQUASHME: "`
2. at the end of the dev cycle, i squash and give a proper message
3. PR with a singular commit
4. before i PR i ensure i am at the tip of the branch and that any CI runs against latest master changes

## Finding which commit caused a bug

- Sometimes we run into issues where somewhere in the lat 500 commits, something went wrong.
- Running tests and ensuring that something has gone wrong takes several minutes or even longer.
- In the real world, this isn’t a common problem, but you will run into this situation albeit rarely.

### Searching Git logs

- One obvious strategy to check where a bug popped up is to manually review the logs and identify when a file was changed.
    - This is a good way of finding bugs if you have a general idea which file/module contains the bug, and file gets changed infrequently.
    - This is build on the premise that your team puts out good commit messages which helps understand what they did, and why did they do what they did.
    - The downside to this approach is,
        - The file changes very frequently.
        - The commit messages are poor
        - You can’t narrow down a bug to a single keyword (like widget or component)
        - If there are too many commits that match the keyword
        - You don’t know any keywords to reduce the search area to begin with.

#### Searching a token

- Suppose you could run tests and something fails. If you know the function or a token name you could do `git log -p --grep foo`
- But this is a scenario which falls apart when there are too many changes which reference the function foo.

#### Searching a filename

- Search via token might not be the most efficient way of sifting through the logs, usually we have a good idea which file might contain the bug.
- To track which change caused the bug in a file we can do `git log -p —- file1 file2…`

### Git Bisect

- Bisect searches the git commits for you, you have to decide if the commit is good or bad.
- It can help us find a bad commit when
    - We know that all commits are ordered by time.
    - We know that 2 changes one being the most recent bad commit and the other (no matter how far back we did it) is good.
- Say, if we’re on the latest commit where the test fails, but we know that about 500 commits ago, the test was passing.
    - We don’t know where in between did the bad commit happened.
    - Well, since we know the rough range between those commits git can do something like a binary search to find the bad commit.

    ![Untitled](Git%20ee49e1792ae9452294b0c444b5dca70c/Untitled%208.png)

    - What can we say about this? Well we know that something went wrong in betwixt these commits.
    - Git will move the HEAD to the middle of the commits.

    ![Untitled](Git%20ee49e1792ae9452294b0c444b5dca70c/Untitled%209.png)

    - If the middle commit is a good commit, we know that we can then narrow the range of bad commits by half.

    ![Untitled](Git%20ee49e1792ae9452294b0c444b5dca70c/Untitled%2010.png)


#### Manually Bisecting

- This process is fairly simple
    - Start with git bisect start
    - Then set the current bad commit git bisect bad
    - Then set the range for the last known good commit git bisect good <SHA>
    - Test your code
        - If the test passes, mark it using git bisect good
        - If test fails, mark it with git bisect bad
    - Keep testing until git tells you which commit started the test failure.

    ```
    // Start bisecting
    $ git bisect start

    // Set the latest bad commit
    $ git bisect bad

    // Set the last good commit
    $ git bisect good <sha>

    // Test
    $ pnpm test // or something similar...

    // Mark the current commit.
    $ git bisect <good|bad>
    ```


#### Automated Bisecting

- Note that in the manual way, we were running our test every single time our HEAD changed.
- We can automate the testing and marking process.

```
// Start bisecting
$ git bisect start

// Set the latest bad commit
$ git bisect bad

// Set the last good commit
$ git bisect good <sha>

// Automate the testing and marking process
$ git bisect run ./node_modules/.bin/vitest --run

// ---- This is the output ----

 FAIL  src/index.spec.js > foo
AssertionError: expected 140 to deeply equal 138

- Expected
+ Received

- 138
+ 140

 ❯ src/index.spec.js:6:20
      4| test("foo", async () => {
      5|     await (new Promise(res => setTimeout(res, 5000)));
      6|     expect(foo(2)).toEqual(2 * 69);
       |                    ^
      7| }, 35000);
      8|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯

 Test Files  1 failed (1)
      Tests  1 failed (1)
   Start at  03:19:09
   Duration  5.15s (transform 10ms, setup 0ms, collect 7ms, tests 5.01s, environment 0ms, prepare 35ms)

972fa2ab45e5041a1fe8c95f31b520bc62d7af85 is the first bad commit
commit 972fa2ab45e5041a1fe8c95f31b520bc62d7af85
Author: mpaulson <mpaulson@netflix.com>
Date:   Fri Feb 16 13:20:31 2024 -0700

    this commit is certainly not about foo

 README.md | 1 +
 1 file changed, 1 insertion(+)
bisect found first bad commit
```

## Pushing forward or rolling back changes

- Often you have one of two choices to make: push forward or roll back. Rolling back can often require you to revert changes made to the main branch.
- In case you are confused about revert and restore
- This is different than `git restore` since we are not restoring a file to a previous commit, but instead we are commiting an inverted commit to the graph to effectively "remove" a commit.

### Revert

- When we revert, we are creating a commit that undoes the changes which we did previously
- It does NOT removes the said commit we’re trying to revert from the history
- To revert a commit use `git revert <SHA>`
- You’d need to resolve any conflicts that might appear
- Then you’d need to add the files changed using `git add <file>`
- Then you’d need to run `git revert —-continue` and add a nice revert message
- Your changes will be saved as a new commit on top of the old ones.

### Reset

- If you want to walk back a commit you can use `git reset`.
- Git reset can be performed in 2 ways:
    - `--soft`: Preserves the changes and undoes the commit.
        - Allows you to retain the changes you have currently done, and just removes the previous commit from the history.
        - Could be useful if you forgot to add or do something.
    - `—-hard`: It discards the changes you’ve done (all changes that git is tracking or you’ve staged) except the untracked changes.
        - Allows you to discard changes and move back to the previous commit.
        - Could be useful if you fucked up.

    ```
    // Unstages the files added to the staging area
    git reset

    // Moves back to the specified commitish.
    git reset [--soft|--hard] <commitish>
    ```

- In addition to `git reset —-soft`, we also have `git commit --amend` which allows you to meld the current changes into the previous commit and edit the commit message.

#### Hard Resetting a commit, and recovering it

```
// Hard reset to a previous commit
git reset --hard HEAD~2

// HEAD is moved 2 commits back

// Get the SHA for the changes that we "lost"
git reflog

// Checkout to the lost change
git checkout <SHA>

// HEAD is detached, so delete your branch, & recreate it with lost commit
git branch -D <branch>
git checkout -b <branch>

// Boom!
```

## Worktree

- You are working on feature branch `foo_bar`. You are making great progress and you are in flow state.

    Just then, slack pings, lo and behold an emergency investigation is needed on `main`.

    1. You can `git add .` any non tracked files to the index (staging area) and then stash this change then change branches to do the investigation.
    2. You can commit this change and change branches
- Just use `worktrees`
- Generally when we say `worktree` we mean a `linked working tree`
- When you `git init` a repo it creates the `main working tree`.
- A `linked working trees` is a just another tree much like main working tree just without all the git history within the `.git` directory.
- In fact, the `.git` directory is not a directory at all, but just a file pointing to the `main working tree` directory.

```
// Create a new worktree
$ git worktree add ../emergency-fix

// View all the worktrees
$ git worktree list

// Delete a worktree
$ git worktree remove ../emergency-fix

// Remove an already deleted worktree
$ git worktree prune

// Switch to your worktree
$ cd ../emergency-fix

// Pull Changes from upstream
$ git pull origin master

// Investigate and fix bugs
// Commit your changes
$ git commit -m "fixed"

// Go back to your original repo
$ cd -

// Merge changes from the worktree
$ git merge emergency-fix
```

![Untitled](Git%20ee49e1792ae9452294b0c444b5dca70c/Untitled%2011.png)
