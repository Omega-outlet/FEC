# After fork and clone the repo:
1)git remote add upstream <URL> from Omega-outlet
to keep the fork synchronized with the Omega-outlet repo.

2) git checkout -b feature/XXX
to create a "feature" branch to keep it away from the main branch, which keeps the work isolated and organized.

3) Coding.

4) git pull upstream main (make regular updates to keep local copy up to date).

(After that you can also merge the changes from your local main branch into the feature branch:
  git checkout feature/xxx to make sure or switch to the feature branch
  git merge main  this will merge the changes from the local main branch into the currently checked-out feature branch.)

5) git push origin feature/XXX   to Push the feature branch to your fork on GitHub.
  
6) Create a Pull Request
  
7) ***Review and Merge: Before every merge, at least one group member other than the one who made the pull request should review the pull request, possibly requesting changes. Once approved, the changes can be merged into the main branch of the organization repository.
