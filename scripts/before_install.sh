#!/bin/bash

#_Change_Working_Directory
mkdir -p /web/lms
cd /web/lms

#_Update_&_Set_Node_Version
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash -

#_Download_Node_&NPM
yum -y install nodejs npm

#_Download_PM2
npm install pm2@latest -g
