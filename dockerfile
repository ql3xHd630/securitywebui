FROM nginx:latest
WORKDIR /app
RUN [ "npm","i" ]
RUN ["npm","run","build"]
COPY build/ /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
