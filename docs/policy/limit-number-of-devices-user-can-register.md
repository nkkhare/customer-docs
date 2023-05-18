---
title: Limit number of registered devices policy
id: limit-number-registered-devices
description: ''
slug: /limit-number-registered-devices
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 03/29/2023
   author: Patricia McPhee
draft: false
doc_type: how-to
displayed_sidebar: secureWorkforceSidebar
---


System administrators can write policy to limit the number of devices a user can register. To limit the number of devices:

1.  From the Admin Console, select the **Policy** tab.
2.  From the Policy page, click **Edit Policy**. 
3.  From the **Add Rule** dialog, click **Add attribute** next to **Any user**.
4.  The `has registered device(s)` attribute should be displayed in the field. If not, select it from the drop-down menu.
5.  Select the appropriate attribute for the next field from the drop-down menu. By default, the `is` attribute is displayed.
6.  Type the appropriate number in the third field or use the up/down arrows to scroll through to find the number. 
7.  Set any other applicable attributes.
8.  Under **Then**, select `Deny`.
9.  Add an optional customized notification, if desired.
10.  Click **Add** when done.  
    ![](/images/policy/add_rule_deny_registered_devices.PNG)
11.  The rule is added to the **Edit Policy** page. Create additional rules as needed or click Publish Rule to permanently save it.
