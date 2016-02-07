ghk-branch-nocommit
===================

git hook to prevent commits on specified branches

plugin for **[ghk](https://www.npmjs.com/package/ghk)** package


#### installation

```
$ npm install --save-dev ghk-branch-nocommit
```

#### usage

inside your project's `.ghkrc` (or the one in your root directory):

```
{
    "pre-commit": {
        "branch-nocommit": {
            "branches": ["master"]
        }
    }
}
```

#### options

- **branches**: a list of branch names where committing in them is not allowed
