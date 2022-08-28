#!/bin/bash

docker stop Website

docker rm Website

docker rmi website

docker build -t website .

docker run -p 80:3000 --sig-proxy=false --name Website website
