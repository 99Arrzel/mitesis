#Prerequisitos:

-Docker

#Instalación

docker-compose up -d

#Verificar el estado del VPN (La instancia de docker)

docker exec -it wireguard wg

#Archivos de peers y configuración en

/opt/wireguard-server/config

#Para conectar, wireguard tiene sus propios clientes.

https://www.wireguard.com/install/