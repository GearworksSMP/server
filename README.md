# server
This is the repo that manages Uberswe's Community Minecraft server

## Deployments

To update the server and to generate a client modpack you simply push to the production branch with the changes you want.

### Server deployments

Currently a server deployment shuts the minecraft server down but for some reason a manual ssh login is required to start
the minecraft server on both devevelopment and production environments.

### Ports

Some ports need to be opened for the different environments and mods to work

#### Minecraft Server

Production: 25585

Development: 26685

#### Simple Voice Chat

Production: 25586

Development: 26686

#### Bluemap

Production: 8100

Development: 8200

#### Create Track Map

Production: 3876

Development: 3886

### Special Mods

Some mods differ between environments

#### Discord Integration

A separate API Key is used for production and development environments to run as two separate bots in separate chat channels 
