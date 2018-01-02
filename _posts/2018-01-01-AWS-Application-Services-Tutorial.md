---
layout: single
title:  "AWS App Services and Dev Tools Overview"
date:   2018-01-01 11:40:00 +0000
categories:
  - AWS
tags:
  - AWS
  - DeveloperTools
---

## [AWS API Gateway](https://aws.amazon.com/api-gateway)

A fully managed service to assist developers when creating, publishing, maintaining, monitoring, and securing APIs at scale.

Organisations can leverage this API Gateway to gain access to application specific API's. This can be used for public facing API's or restricted access to for instance background services.

| Benefit | Detail |
| --- | --- |
| Performance at scale | Traffic management, throttling rules etc ... |
| Monitoring | Monitor traffic, latency, error rates |
| Streamline API | Run multiple API versions at the same time |
| Security Controls | Various API Authorisation mechanisms supported |
| Serverless support | Ability to utilise AWS Lambda functions without the need for expensive server resource |

## [AWS Step Functions](https://aws.amazon.com/step-functions)

* Step Functions are based on the concepts of tasks and state machines.
* You define state machines using the JSON-based Amazon States Language

```json
{
  "Comment": "Hello World Example",
  "StartAt": "HelloWorld",
  "States": {
    "HelloWorld": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:REGION:ACCOUNT_ID:function:FUNCTION_NAME",
      "End": true
    }
  }
}
```

>
This provides a convenient orchestration tool for complex workflow systems. Especially if those workflows  change frequently over time. Hopefully tools like this can have a positive impact over those older enterprise workflow systems. Only time will tell if teams will continue to have a sense of ownership of the product development here.

---

## AWS Developer Tools

Includes:

| AWS Developer Tool | Description |
| --- | --- |
| [Code Pipeline](https://aws.amazon.com/codepipeline/) | release automation service |
| [Code Commit](https://aws.amazon.com/codecommit/) | source control service leveraging private Git repositories with secure commits |
| [Code Build](https://aws.amazon.com/codebuild/) | build and test execution service |
| [Code Deploy](https://aws.amazon.com/codedeploy/) | deployment orchestration service |
| [Code Star](https://aws.amazon.com/codestar/) | continuous delivery toolchain service |

Using the above Developer Tools AWS suggest that businesses can benefit form the same release cycle for Continuous Delivery that they follow. In order to deliver faster customer releases and get continuous feedback.

### Is it worth the effort?

In most software development companies each of those developer tools would probably already exist in some form. Whether it be Git source control or pipelines using software like Jenkins or TravisCI. Many development teams may not want to fully align to the AWS development suite just to achieve that ultimate Continuous Delivery goal. After all the more these tools are used the more your business will be locked into the AWS products suite lifecycle. Ultimately the question still remains `Whats in it for us?` and thats a question really for the development team members so that they can take responsibility.

When assessing these developer tools in your own organisation a good place to start would be to look at what products your development teams are supporting:

| Question | Check |
| --- | --- |
| Do you have any public facing systems? (current/future) | <input id="checkBox" type="checkbox"> |
| Do you have any internal systems? (current/future) | <input id="checkBox" type="checkbox"> |
| You you have any Open Sourced code? (current/future) | <input id="checkBox" type="checkbox"> |
| Do you require any coordinated application deployments? | <input id="checkBox" type="checkbox"> |
| Do you have other development tools not supported out-of-the-box by the AWS Developer Tools? | <input id="checkBox" type="checkbox"> |

You will likely have additional questions specific to your organisation and ultimately unless you are a startup organisation you will need to assess the time it will take to migrate to use the AWS Developer Tools. If you can start with one system you should be able to predict the time it will take to migrate the others.

Once you have a better idea of any possible negative impact its worth assessing what benefits this is going to bring to your organisation over your current setup. A single product tool set should in theory be quicker to setup and work with. Also the ability to secure access to your code and deployment configuration would give a stronger argument towards using an all-in-one solution. I particularly like the additional security features provided by the likes of `Code Commit` and the option to use Git Hooks to trigger Push Notifications and AWS Lambda functions.

---

#### A word of caution:
At this point I wish I could say one way or another whether these tools can live up to the hype. Amazon use them internally so they should already be tried and tested. Most organisations I know are only investing in them for deployment of their AWS Lambda functions but not for their more complex applications.

Personally I would urge some caution when depending on too many different deployment tools within your organisation in order to avoid unnecessary complexity and confusion and over time. Otherwise it could leave your organisation with a lot of potential technical debt to sort out down the line.
