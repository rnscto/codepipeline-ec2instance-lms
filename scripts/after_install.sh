#!/bin/bash

#_Change_Working_Directory
cd /home/ec2-user/lms

#_Remove_Unused_Code
rm -rf node_modules
rm -rf build

#Install_node_modules_&_Make_React_Build
npm  install
npm run build
cp -rf /home/ec2-user/lms/build/* /web/lms
