# Smart House With Rapsberry pi 3

This is project can help you manage your led turn on or turn off by your voice. It's using the PHP and javascript languages.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

### Installing

A step by step series of examples that tell you how to make this project running

First, you install the php on your Raspberry Pi 3. The steps will be : 


```
sudo apt-get update
```

```
sudo apt-get install sqlite3 libsqlite3-dev
```

```
sudo apt-get update
```

```
sudo apt-get install mysql-server mysql-client libmysqlclient-dev
```

```
sudo gem install mysql2
```

```
sudo apt-get update
```

```
sudo apt-get install phpmyadmin
```

Then you need to install ssl on your Raspberry. If you don't want to setup an microphone device, you should access the localhost of Rapsberry on the other device in same network by local ip.

Last, you clone this project and run in the folder: 
```
/var/www/html
```

## Running

You can add new command voice in the the data.js file.

```
{led : "1", gpioPort : 17, turnOn : "Turn on light one", turnOff : "Turn off light one"}
```
- led is the name of the led
- gpioPort is the port number of GPIO on your raspberry
- turnOn is the voice command to turn on light
- turnOff is the voice command to turn off light
## Authors

* **Cuong Pham** - *Initial work* - [CuongPhamDev](https://github.com/cuongphamdev)