---
layout: single
title:  "AWS IAM Overview"
date:   2018-01-01 12:40:00 +0000
categories:
  - AWS
tags:
  - AWS
  - IAM
---

Over at the AWS Training center they provide a set of tutorials, which in some cases are free.
I recently registered to and watched the IAM tutorial `Authentication and Authorization with AWS Identity and Access Management`.

In an attempt to capture some of the detail for future reference and learning I have provided the following synopsis:

### User:
- Represent permanent accounts for a user
- Will remain in place until a forced rotation: e.g. a change to the user name, password, Access Key ...
- Provides authentication for named users in the system

### Group:
- A collection of users
- Users can belong to many groups (i.e. Many-to-Many association)

### Role:
- *Roles are not permissions!!!*
- A role is an `Operator`. This could be human or machine
- A role provides an `Authentication Method`
- Roles are Temporary!

### Policy Doc:
- This is the Authorization process
- Policy Docs attach to any of:
  - Permanent `User`
  - `Group` APIs
  - Role
- The Policy Doc performs validation against those credentials to ensure the User, Role, Group exist
- All API actions are checked against the Policy Docs to see if the action is allowed to proceed

<img style="width: 50%;" src="/assets/images/postimage/UserGroupRolePolicyDocs.png">

---

### Additional points to note:
* In AWS everything is an API
* Every API action is recorded in Cloud Trail. This includes successes or failures. For example if a user attempts to stop a running image with revoked credentials this will be recorded
* System Admin's can remove / disable Policy Docs across all Users, Groups, Roles in the event of compromised credentials being used to perform an attack against your systems

---

## Summary

What impressed me was the way that the content was delivered in this tutorial.
The course presenter `Blaine Sundrud` working against a dark backdrop to provide an overview from the reverse angle of the viewer. You can find more free online AWS developer tutorials [here](https://aws.amazon.com/training/path-developing/).
