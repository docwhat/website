---
title: Per-user credentials in a Jenkins pipeline
date: 2019-05-20
slug: jenkins-per-user-credentials
id: d7402a4d-5fd9-49c0-92fb-6d56ad0cdd04
draft: true
---

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
