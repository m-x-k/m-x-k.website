---
layout: single
title:  "Kubernetes Administration Techniques"
date:   2017-08-11 11:00:00 +0000
categories:
  - Kubernetes
tags:
  - Kubernetes
  - Docker
---

>
This blog entry is intended as a guide to *some* of the Kubernetes Administration features. It is not exhaustive list but instead is intended to serve as an introduction to some of these commands and hopefully provide enough information to learn about more advanced features.

## Kubernetes Administration Techniques

Following on from my recent blog entry which provided an [Introduction into Kubernetes]({% post_url 2017-08-10-Introduction-to-kubernetes %}) this post outlines some of the basic concepts and techniques which can be used to administer and maintain your Kubernetes pods and services.

---

### Minikube Dashboard

You can get a simple Dashboard for your Minikube instance in your browser by running the following command:
```sh
minikube dashboard
```

From within your browser you should be able to inspect and maintain cluster concepts such as pods, services, namespaces, volumes, roles etc ... as well as workloads, storage, discovery and load balancing.

---

### Replicaset

In order to monitor `Pods` you need to know how many should be running at any given time. This is achieved through the concept of a replicaset. It is also the responsibility of the replicaset to create the pod instances for you rather than having to do this manually.

```yaml
apiVersion: extensions/v1beta1
kind: ReplicaSets
metadata:
  name: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      foo: bar
  template:
    metadata:
      name: nginx
      labels:
        foo: bar
    spec:
      containers:
      - name: nginx
        image: nginx
```

The `selector` here is used to help count the number of a particular set of `Pods` (e.g. 3) and we understand that these are associated with the nginx service according to the template specification.

There are different types of replicaset api's supported. The api version `extensions/v1beta1` here is the advanced beta version of Kubernetes which supports the concept of replica sets.

```sh
kubectl create -f rs.yaml     # Create a replicaset from the above yaml configuration
kubectl get replicaset        # List all replicasets
kubectl get pods              # List all pods - should now contain our 3 instances from the replicaset
```

With the replicaset in place if any of the pods should stop for whatever reason Kubernetes should create another pod instance as required.

If you need to manually adjust this replicaset to increase or decrease the number of running pod instances you can run:

```sh
kubectl scale rs nginx --replicas 5
kubectl get endpoints
```

---

### Kubernetes API

If you want to investigate the Kubernetes API from the command line you can run the following:
```sh
kubectl proxy
```

In another terminal you can then call the resulting endpoint locally with curl to get the list of Kubernetes API endpoints:
```sh
curl localhost:8001
```

Exmaple output:
```json
{
  "paths": [
    "/api",
    "/api/v1",
    "/apis",
    "/apis/",
    "/apis/admissionregistration.k8s.io",
    "/apis/admissionregistration.k8s.io/v1alpha1",
    "/apis/apiextensions.k8s.io",
    "/apis/apiextensions.k8s.io/v1beta1",
    "/apis/apiregistration.k8s.io",
    "/apis/apiregistration.k8s.io/v1beta1",
    "/apis/apps",
    "/apis/apps/v1beta1",
    "/apis/apps/v1beta2",
    "/apis/authentication.k8s.io",
    "/apis/authentication.k8s.io/v1",
    "/apis/authentication.k8s.io/v1beta1",
    "/apis/authorization.k8s.io",
    "/apis/authorization.k8s.io/v1",
    "/apis/authorization.k8s.io/v1beta1",
    "/apis/autoscaling",
    "/apis/autoscaling/v1",
    "/apis/autoscaling/v2beta1",
    "/apis/batch",
    "/apis/batch/v1",
    "/apis/batch/v1beta1",
    "/apis/batch/v2alpha1",
    "/apis/certificates.k8s.io",
    "/apis/certificates.k8s.io/v1beta1",
    "/apis/extensions",
    "/apis/extensions/v1beta1",
    "/apis/networking.k8s.io",
    "/apis/networking.k8s.io/v1",
    "/apis/policy",
    "/apis/policy/v1beta1",
    "/apis/rbac.authorization.k8s.io",
    "/apis/rbac.authorization.k8s.io/v1",
    "/apis/rbac.authorization.k8s.io/v1alpha1",
    "/apis/rbac.authorization.k8s.io/v1beta1",
    "/apis/scheduling.k8s.io",
    "/apis/scheduling.k8s.io/v1alpha1",
    "/apis/settings.k8s.io",
    "/apis/settings.k8s.io/v1alpha1",
    "/apis/storage.k8s.io",
    "/apis/storage.k8s.io/v1",
    "/apis/storage.k8s.io/v1beta1",
    "/healthz",
    "/healthz/autoregister-completion",
    "/healthz/etcd",
    "/healthz/ping",
    "/healthz/poststarthook/apiservice-openapi-controller",
    "/healthz/poststarthook/apiservice-registration-controller",
    "/healthz/poststarthook/apiservice-status-available-controller",
    "/healthz/poststarthook/bootstrap-controller",
    "/healthz/poststarthook/ca-registration",
    "/healthz/poststarthook/generic-apiserver-start-informers",
    "/healthz/poststarthook/kube-apiserver-autoregistration",
    "/healthz/poststarthook/start-apiextensions-controllers",
    "/healthz/poststarthook/start-apiextensions-informers",
    "/healthz/poststarthook/start-kube-aggregator-informers",
    "/healthz/poststarthook/start-kube-apiserver-informers",
    "/logs",
    "/metrics",
    "/swagger-2.0.0.json",
    "/swagger-2.0.0.pb-v1",
    "/swagger-2.0.0.pb-v1.gz",
    "/swagger.json",
    "/swaggerapi",
    "/ui",
    "/ui/",
    "/version"
  ]
}
```

---

### Utilities

If you need to run commands inside your cluster instance you can use [busybox](https://busybox.net/about.html):

```sh
kubectl run busy -ti --image busybox -- /bin/sh
```

This will open a shell where for instance you can run commands like `nslookup` against your service names. However most of this information is exposed via the usual kubectl commands (e.g. kubectl get svc).

A list of the busybox supported commands is currently available on wikipedia at the following link:
* [BusyBox commands](https://busybox.net/downloads/BusyBox.html)

---

### Namespaces

Namespaces can be created and assigned to a number of pods. This allows for greater flexibility and maintenance of your pods.

```sh
kubectl get namespaces              # Get all namespaces
kubectl get pods --all-namespaces   # Get all pods with their namespaces
kubectl get pods -n <NAMESPACE>     # Get all pods with the matching namespace
```

There many ways that you can use this feature. For instance you can assign namespaces per individual or you could assign a namespace for a particular environment such as dev, test or prod. Another option is to extend the concept of namespaces for a particular environment so for example in dev have a namespace for each individual team, in prod this might be at an application level due to the number of pods required for a live environment.

You can also use namespaces to determine quotas out-of-the-box with namespaces which you will see in the next section.

### Resource Quotas

```sh
kubectl create resourcequotas test --hard=pods=1 -n <NAMESPACE>
kubectl get resourcequotas -n <NAMESPACE>
```

Based on the above resource quota Kubernetes will complain when you next try to create a `pod` instance attached to the given namespace. The quota here is limited to `1` but the number can be whatever you require. You can even come back and `edit` the resourcequota if you need to:
```sh
kubectl edit resourcequota -n <NAMESPACE>
```

This will open your favourite editor and allow you to modify the yaml file configuration for your resource quota.

If you want to you can even use these quotas to determine network policies but that would require additional add-ons.

---

### Summary

Hopefully you've learnt a few new things about how Kubernetes administration. There are a lot of other topics that I haven't covered some of which may be redundant if you already know them from other orchestration tools or from container tools like Docker.
