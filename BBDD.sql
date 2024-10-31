CREATE USER 'nombre_usuario'@'localhost' IDENTIFIED BY 'contraseña';
create database webcomic;
GRANT ALL PRIVILEGES ON webcomic.* TO 'nombre_usuario'@'localhost';
FLUSH PRIVILEGES;
use webcomic;
