# React Starter Kit in TypeScript

## Node のインストール方法

本アプリケーションは [Node.js](https://nodejs.org/) を前提としています。

    $ wget -P /tmp https://nodejs.org/download/release/v12.18.4/node-v12.18.4.pkg
    $ sudo installer -pkg /tmp/node-v12.18.4.pkg -target /
    installer: Package name is Node.js
    installer: Upgrading at base path /
    installer: The upgrade was successful.
    $ node -v
    v12.18.4

## アプリケーションの起動方法(Dockerを使用しない場合)

以下の手順でアプリケーションを起動できます。

    $ wget https://github.com/DiveIntoHacking/react-starter-kit-in-javascript-with-node-v12.18.4/archive/v1.1.tar.gz
    $ tar zxvf v1.1.tar.gz
    $ cd react-starter-kit-in-javascript-with-node-v12.18.4-1.1
    $ yarn install
    $ yarn start

## アプリケーションの起動方法(Dockerを使用する場合)

    $ wget https://github.com/DiveIntoHacking/react-starter-kit-in-javascript-with-node-v12.18.4/archive/v1.1.tar.gz
    $ tar zxvf v1.1.tar.gz
    $ cd react-starter-kit-in-javascript-with-node-v12.18.4-1.1
    $ touch .bash_history
    $ docker-compose build
    $ docker-compose run --rm app yarn install
    $ docker-compose up
