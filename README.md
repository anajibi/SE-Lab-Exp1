# SE-Lab-Exp1
### Student Numbers:
- Ali Najibi - 98106123
- Alireza Honarvar - 98102551

## About the project:
This project is the back-end part of a google-cloud like service. This service is
responsible for managing the storage of the user's files and also the user's
resources.

## Report:
### 1. Create the git repo and clone it into your local machine
To achieve this, we first need to create a new git repository in [github](githbu.com) and then clone it into our local machine. To do so, we need to run the following commands in the terminal:
```bash
git init
git clone <<url>>
```
Now, since we have the repo in our local machine, we can start working on it.
### 2. Protect the `main` branch
To do so, we need to go to the repo's settings and then go to the `Branches` section. In this section, we need to check the `Protect this branch` checkbox.
It will navigate us to a page where we can select the rules we want to apply to this
branch, we will select the following:
- Require pull request before merging
    - Require approval
- Do not allow bypassing the above settings

And then we will click on the `Save changes` button. Now, we have protected the `main` branch.


### 3. Create different branches for each feature
We have 3 features that are independent of each other, these features and their
corresponding branches are as follows:
1. Architecture: `main-arch`
2. Database connection and respective migrations: `feature/database`
3. A sample service and respective endpoints: `feature/sample-service`

It's important to know that since the architecture branch is the foundation for the
whole project, it's initialized first and after it's merged into the `main` branch,
the other two branches are initialized and then merged into the `main` branch when their development is done.
To do that, we first run the following command:
```bash
git checkout -b main-arch
```
After implementing the bedrock of the project, we need to push the changes to the
remote repo. To do so, after adding the required files with 
```bash
git add <<file-name>>
```
we run the following commands:
```bash
git commit -m "Complete the architecture of the project"
git push origin main-arch
```
Now, we need to create a pull-request to transfer these changes to 
the main branch.
The image for this part is the following:
![img.png](main-archTOmain.png)

Now, we need to complete the pull request.
After that, we will create a new branch from `main` named 
`feature/database` and then we will implement the database connection and the
respective migrations. After that, we will push the changes to the remote repo and
then create a pull request to transfer these changes to the `main` branch.

Now, we only need to create the third branch and then implement the sample service.

### 4. Create two merge conflicts and resolve them
To create a merge conflict, we will create a new branch named `feature/sample-service-conflict`
and in this branch, we will change a specific file and then push the changes to the
remote repo. After that, we will create a pull request to transfer these changes to
the `main` branch. Now, we will change the same file (in a way that git cannot resolve the conflict by itself)
and then push the changes to the remote repo. After that, we will create a pull request
to transfer these changes to the `main` branch. Now, we will go to the pull requests
and see that there is a merge conflict.

After firstly merging branch `feature/sample-service-conflict` using a pull request,
we will try to merge branch `feature/sample-service` using a pull request. And we see 
the following in the pull request page in github:
![img.png](merge-conflict-1.png)

Since it is much easier to resolve conflicts on the idea, we try to merge `main` into
our local feature branch `feature/sample-service` and we see the following:
![img.png](merge-conflict-1-idea.png)
After resolving these conflicts, we push the branch `feature/sample-service` to the remote repo
and see the following in the pull request page:
![img.png](merge-conflict-1-after-resolve.png)
This indicates that the merge conflict is resolved and we can merge the branch `feature/sample-service`
into the `main` branch.

#### Merge conflict 2
To create the second merge conflict, we will 
do the same thing as the first merge conflict. I would like to take a moment 
and explain more about merge conflicts and how they are caused and how we create them:
A merge conflicts happens when git cannot decide how a file should look like
after a merge, it usually happens when two branches start from the same commit
and change the same file. In this case, git cannot decide which changes should
be kept and which ones should be discarded. To resolve this, we need to manually
resolve the conflict and then push the changes to the remote repo.

Now, lets walk you through what I do, I firstly sync both branches
`feature/sample-service-conflict` and `feature/sample-service` with the `main` branch so 
the branches are up to date and start from the same commit. After that, I change the same file
in both branches and then push the changes to the remote repo. Then, I create a pull request
to transfer the changes from `feature/sample-service-conflict` to the `main` branch. Now, when the other
branch (`feature/sample-service`) tries to merge the `main` branch, it will see a merge conflict since
the file has been already changed in the `main` branch (due to the fact that the commit 
containing the change exists in the `main` branch because of the pull request from the
`feature/sample-service-conflict` branch).

Images for the second merge conflict is as follows:
- The following is the image of the conflict:
![img.png](merge-conflict-2.png)
- The following is the image of the step where we try to merge `main` into 
my local branch `feature/sample-service-conflict` and we see the conflict:
![img.png](merge-conflict-2-idea-merge.png)
![img.png](merge-conflict-2-conflict-shown.png)
- The following is the image of the conflict after resolve:
![img.png](merge-conflict-2-after-resolve.png)
