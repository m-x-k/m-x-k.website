---
layout: single
title:  "AWS Shared Responsibility Model"
date:   2018-01-01 13:40:00 +0000
categories:
  - AWS
tags:
  - AWS
  - SharedResponsibilityModel
---



| Area | Responsibility |
| --- | --- |
| User Data | Organisation |
| Application | Organisation |
| Guest OS | Organisation |
| ====== | ====== |
| Hypervisor | AWS |
| Network | AWS |
| Physical | AWS |

The top three areas `User Data`, `Application` and `Guest OS` are all the responsibility of the organisation using AWS. Typically you would think of these three areas as the EC2 service. Below these areas organisation data is not visible to AWS which helps to ensure that your customer data is protected. 

### AWS Compliance

The areas of the Shared Responsibility Model that are not visible to the organisation using AWS are regularly checked as part of compliance.

* [AWS Compliance](https://aws.amazon.com/compliance) - provides detail from a number of 3rd Party audits that regularly go through the entire AWS stack to ensure compliance
