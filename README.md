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
To do so, we need to go to the repo's settings and then go to the `Branches` section. In this section, we need to check the `Protect this branch` checkbox and also
the `Lock branch` and `Do not allow bypassing the above settings` and lastly, to apply these rules
to the `main` branch, we will type the name `main` in the `Branch name pattern` field.

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
