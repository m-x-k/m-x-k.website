---
layout: single
title:  "Introduction to Kubernetes"
date:   2017-08-10 11:00:00 +0000
categories:
  - Kubernetes
tags:
  - Kubernetes
  - Docker
---

>
Note: it is recommended to read up on how Docker works before trying to understand Kubernetes!

# Introduction to Kubernetes

Kubernetes is open-sourced software for automating deployment, scaling and management of containerised applications.

The term `kubernetes` is actually Greek and stands for the steersman or helmsman, further building on the concept of shipping containers.

## Origin

Kubernetes was the result of 15 years of research at Google. The concept was originally built from the `Google Borg` system which was a large scale cluster manager that would run hundreds of thousands of jobs ranging from different applications across clusters with tens of thousands of machines. This resulted in a white paper in 2015 which outlined the foundation for Kubernetes. Underlying `Borg` techniques such as `cgroups` and `linux namespaces` formed the heart of containers as part of the open-sourced Linux kernel.

### MacOS install

At the time of writing this is the setup for working with Kubernetes on a MacOS machine.

#### [Minikube](https://github.com/kubernetes/minikube)

Minikube is a tool that makes it easy to run Kubernetes locally. Minikube runs a single-node Kubernetes cluster inside a VM on your laptop for users looking to try out Kubernetes or develop with it day-to-day.

```
brew cask install minikube    # Install
minikube start                # Start
minikube dashboard            # Open dashboard browser
```

#### [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

Kubectl is the Kubernetes command-line tool used to deploy and manage applications on Kubernetes.

Download the latest Kubectl instance, make it executable and move it into you MacOS PATH.

```
curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/darwin/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl
```

For a list of different resources that you can get with kubectl run:
```sh
kubectl get
```

### Kubernetes Pod

>
At a basic conceptual level you can think of a `Pod` as an abstraction around the concept of a machine. In other words it has an IP address, a set of processes, a set of volumes etc ... While this is similar to what a `container` is, a `Pod` (as in a pod of whales) also is a group of one or more containers, with shared storage/network and a specification for how to run the containers. In other words the contents of a pod are co-located and co-scheduled and run a shared context. The "one-container-per-Pod" model is the most common Kubernetes use case.

Simple `Redis` example of a Kubernetes pod:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myredispod
spec:
  containers:
  - image: redis
    name: redis
```

Create and run this pod inside the minikube vm:
```
kubectl create -f pod.yaml      # Create the pod
kubectl get pods                # View all pods
```

Enter the running pod `redis` instance:
```
kubectl exec -it myredispod -- redis-cli
```


### Kubernetes Service

>
Kubernetes can also define a `service` which in this case is an abstraction around the concept of a Microservice.

The following is an example service yaml file:
```yaml
apiVersion: v1
kind: service
metadata:
  name: nginx
spec:
  selector:
    foo: bar
  type: NodePort
  ports:
  - port: 80
    protocol: TCP
```

You can see from the example service above that the `Service` is made up of the `Pod` foobar.

Creating a Kubernetes service:
```sh
kubectl create -f service.yaml      # Create a service with the above specification
kubectl get services                # List all services
kubectl get endpoints               # List all endpoints
kubectl label pods nginx foobar     # Tag the nginx serivce
kubectl get pods --show-labels      # List all the pods with their labels
minikube service nginx              # Start the nginx service
```

>
Labels are a key part of how we can attach and monitor pod's etc in Kubernetes.

---

## Alternatives

There are many orchestration tools designed to manage containers at scale. There are many pros and cons to consider when trying to determine which is ideal for your organisation.

Some alternatives include:
* Docker Swarm
* Hashicorp Nomad
* Apache Mesos
* Rancher
* OpenShift
