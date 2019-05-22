---
title: User credentials in a Jenkins pipeline
date: 2019-05-20
id: d7402a4d-5fd9-49c0-92fb-6d56ad0cdd04
banner:
    sourceUrl: 'https://unsplash.com/photos/mhUsz2ezlXQ'
    credits: 'Photo by Crystal Kwok'
    image: 'crystal-kwok-487022-unsplash.jpg'
---

The
[_Credentials User Guide_](https://github.com/jenkinsci/credentials-plugin/blob/master/docs/user.adoc)
implies you can use _user credentials_. These are credentials that are owned
and managed by a user instead of the administrator or the owner of a folder.

The guide explains how to use them with _Freestyle_ jobs (classic
[Jenkins](https://jenkins.io/) jobs) but not how to use them with the newer
[_declarative pipeline_](https://jenkins.io/doc/book/pipeline/syntax/#declarative-pipeline)
jobs.

In this post, I'll show you how to:

-   Set up a job to ask for credentials when triggered.
-   Allow users to provide their _user credentials_ as a parameter.
-   Configure the pipeline job to use the passed in credentials.

<!-- more -->

## Setup

To use _user credentials_ the user kicking off the build needs to have the
`Credentials/UseOwn` permission.

By default this is inherited by `Item/Build` (AKA `Job/Build`) _but not
recursively_!

This means that if "MyGroup" has the permission `Item/Build` then the user
isn't given `Credentials/UseOwn`. You have to give the user `Item/Build`
directly.

Managing permissions without groups is hard. Instead, you can run this groovy
(via the Script Console or via the CLI):

```groovy
// Give everyone "Credentials/UseOwn"
System.setProperty("com.cloudbees.plugins.credentials.UseOwnPermission", "true")
```

To make it permanent put it in an `init.groovy.d` file.

## Steps

In a
[_declarative pipeline_](https://jenkins.io/doc/book/pipeline/syntax/#declarative-pipeline):

1.  Add a
    [`parameters`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)
    section if one doesn't exist already.
2.  Within the `parameters` section, add a `credentials` section.

    ```groovy
    /* EXAMPLE */
    parameters {
        credentials(
            credentialType: 'com.cloudbees.plugins.credentials.impl.UsernamePasswordCredentialsImpl',
            defaultValue: '',
            description: 'The credentials needed to deploy.',
            name: 'deployCredentialsId',
            required: true
        )
    }
    ```

3.  Within a [`steps`](https://jenkins.io/doc/book/pipeline/syntax/#steps)
    section, use the
    [`withCredentials()`](https://jenkins.io/doc/pipeline/steps/credentials-binding/)
    method, using the credentialsId specified above wrapped with `${...}`.

    ```groovy
    /* EXAMPLE */
    steps {
        withCredentials([usernamePassword(
            credentialsId: '${deployCredentialsId}',
            usernameVariable: 'DEPLOY_USERNAME',
            passwordVariable: 'DEPLOY_PASSWORD',
        )]) {
            sh './my-command.bash --username="${DEPLOY_USERNAME}" --password="${DEPLOY_PASSWORD}"'
        }
    }
    ```

## Caveats

`withCredentials` can only use the _user credentials_ if the user kicks off
the build.

Builds triggered remotely (via URL) or via a cron specification won't work.

This is because the build runs (by default) as `ACL.SYSTEM`. `ACL.SYSTEM`
doesn't have permission to read any user's credentials.

The `${<parameter_name>}` is a
[bit of magic](https://github.com/jenkinsci/credentials-plugin/blob/3817b35/src/main/java/com/cloudbees/plugins/credentials/CredentialsProvider.java#L882)
that fetches the credentials as stored in the parameter, by passing the
permission check.
