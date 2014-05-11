jChat
=====

A simple chatroom powered by JSON and jQuery.
This version has been created to be run as a [Chrome App](https://developer.chrome.com/apps/about_apps)

![jchat screenshot](https://raw.githubusercontent.com/daschwa/jchat/master/screenshots/day3.png)

# Installation
Launch Google Chrome and navigate to the the [Extensions](chrome://extensions/) page, either located under `Tools > Extensions` or `Window > Extensions`.
To install the app, click on `Load unpacked extension…` and select the `jchat` directory in the file browser.

Make sure you edit the `path/or/url/to/jchat` to correspond to your hosted files in the following places:

- `manifest.json`
- `chat.js`

You should now be able to run jChat from either the [Extensions](chrome://extensions/) page or from [chrome://apps/](chrome://apps/)


# Notes
`hosted_files` contains `chat.php` and `chat.json`, both of which need to be hosted on a webserver for the chatroom to function.

[GitHub Page](https://github.com/daschwa/jchat)

Author: Adam Schwartz

Created: 2013-06-25 03:04:42