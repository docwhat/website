---
id: '673'
title: 'Gerrit: Rename a Project'
date: '2011-03-30'
template: post
slug: /gerrit-rename-a-project/
image: /files/2011/03/diffy-250x232.png
tags:
    - Gerrit
    - SQL
---

At work we've been trying out Gerrit. It is awesome in many ways, and yet in
others it is sorely lacking.

One of the more obvious problems is the lack of administration functionality.
For example, there is no administration interface for deleting or renaming a
project.

However, I needed to rename a project and here is how I did it.<!-- more -->

**WARNING**: This was done against `schema_version` 47. I make no promises
that it works for other versions.

This is a SQL script. Replace the words `NEW` and `OLD` with your new and old
project names. Since I did it for multiple projects, I used Perl to
programmatically replace the values.

```sql
BEGIN;
UPDATE account_project_watches
   SET project_name = 'NEW'
 WHERE project_name = 'OLD';

UPDATE projects
   SET name = 'NEW'
 WHERE name = 'OLD';

UPDATE ref_rights
   SET project_name = 'NEW'
 WHERE project_name = 'OLD';

UPDATE changes
   SET dest_project_name = 'NEW'
 WHERE dest_project_name = 'OLD';

COMMIT;
```

This is enough to hold me over until
[issue 560](http://code.google.com/p/gerrit/issues/detail?id=560) is finished.

Ciao!
