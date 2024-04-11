# Example hello world app
![GitHub License](https://img.shields.io/github/license/javierlopezdeancos/example-hello-world-app)
![Docker Image Size](https://img.shields.io/docker/image-size/javierland/example-hello-world-app)

## Description and purpose
An app with a webserver run under [nodeJs](https://nodejs.org/en), [fastify](https://fastify.dev/) and 
[ejs](https://ejs.co/) as embedded JavaScript templating that expose 2 endpoints:

```
GET "/" 
That returns an html with a simple basic view with all necesary to do some playwright tests
```

```
GET "/health" 
That returns a 200 OK code when the server is ready
```

This app could be dockerized as image with the `.Dockerfile` file running
```
docker build . -t example-hello-world-app 
```

And could be run as container with
```
docker run -p 3000:3000 example-hello-world-app
```

## Pull image from docker hub
This app is push on my docker hub registry 
[javierland/example-hello-world-app](https://hub.docker.com/repository/docker/javierland/example-hello-world-app) and 
you can pull it with

```
docker pull javierland/example-hello-world-app:latest
```