# 使用官方的 Nginx 镜像作为基础镜像
FROM nginx:latest

# 将本地的 Nginx 配置文件复制到镜像中
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露 Nginx 的默认 HTTP 端口
EXPOSE 80
