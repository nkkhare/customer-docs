---
title: Kandji-configured device policy
id: define-kandji-configured-device-policy
description: ''
slug: /define-kandji-configured-device-policy
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 02/08/2022
   author: Patricia McPhee
draft: false
doc_type: how-to
displayed_sidebar: secureWorkforceSidebar
---

Writing Policies Specific to a Kandji-configured Device
==================
To write poliicy specific to a Kandji device:

1.  From the [Admin Console](../../platform/admin-console.md), select the **Policy** tab.
2.  From the [Policy page](../define-policies.mdx), click **Edit Policy**. 
2.  From the Policy page, select Edit **Policy > Add Rule**.
3.  Refer to [Write a Kandji Connection Policy](kandji-connection-policy.md) or [Write a Kandji MDM Policy](kandji-mdm-policy.md) to configure policy to suit your requirements. 

:::note
Beyond Identity uses the serial number of each device to perform a real-time lookup against Kandji’s API when making policy decisions and evaluating Beyond Identity policy attributes. Beyond automatically obtains the serial number for macOS devices. For iOS devices, the serial number must be pushed to the Platform Authenticator via Kandji using iOS AppConfig. See **Step 4, Push the iOS device serial number using AppConfig**.
:::