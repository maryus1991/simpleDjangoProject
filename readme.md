# Simple Todo Application
A simple todo list app built with django that use the following technology :

<p align="center">
<img src="https://th.bing.com/th/id/R.bde2069143dd5c9da9632d2d32f65fbd?rik=HyJf1kgAzFk8dA&pid=ImgRaw&r=0" height="40px" width="60px">
<img src="https://th.bing.com/th/id/OIP.nsOfGAba5hOGx1kkyQAJOwAAAA?rs=1&pid=ImgDetMain" height="40px" width="60px">
<img src="https://cosasdedevs.com/media/posts/photos/realizar-busquedas-con-django-rest-framework.jpg" height="40px" width="60px">
<img src="https://th.bing.com/th/id/R.e10b9c4d55b6a7e0cb0588bda75ae1fb?rik=ms%2fwgCI1AgiHKA&pid=ImgRaw&r=0" height="40px" width="60px">
<img src="https://th.bing.com/th/id/R.20cfba0b3c95d1405f395462d917b03f?rik=Jwwyt6qPt93b7g&riu=http%3a%2f%2fnetloid.com%2fwp-content%2fuploads%2f2015%2f07%2fnetloid_postgresql.png&ehk=tFw89WZhW06yEW6ZzE13y%2brY3AO8T%2f5w%2f34c%2bM18PJ8%3d&risl=&pid=ImgRaw&r=0" height="40px" width="60px">
<img src="https://th.bing.com/th/id/OIP.i_07bGITzqzK3TqK9HVfdQHaEK?rs=1&pid=ImgDetMain" height="40px" width="60px">
<img src="https://th.bing.com/th/id/OIP.eqye8qb-Y9cZca36f_dpWwHaEW?rs=1&pid=ImgDetMain" height="40px" width="60px">
<img src="https://th.bing.com/th/id/R.7448044342419709f7db743f8b4b29b2?rik=4%2bbbyMMG839%2b2w&pid=ImgRaw&r=0" height="40px" width="60px">
</p>
<hr>

# features
### This projects build as API base and Render Base
so some picture from this app in Render Base :

<p align="center">

<img src="./docs/Screenshot%202025-01-30%20205732.png" height="200px" width="250px">
<img src="./docs/Screenshot%202025-01-30%20205748.png" height="200px" width="250px">
<img src="./docs/Screenshot%202025-01-30%20205754.png" height="200px" width="250px">
<img src="./docs/Screenshot%202025-01-30%20210446.png" height="200px" width="250px">
</p>

API Client picture (swagger and DRF):
<p align="center">

<img src="./docs/api/Screenshot%202025-01-30%20210716.png" height="200px" width="300px">
<img src="./docs/api/Screenshot%202025-01-30%20210734.png" height="200px" width="300px">
<img src="./docs/api/Screenshot%202025-01-30%20210742.png" height="200px" width="300px">
<img src="./docs/api/Screenshot%202025-01-30%20210810.png" height="200px" width="300px">
<img src="./docs/api/Screenshot%202025-01-30%20210828.png" height="200px" width="300px">
<img src="./docs/api/Screenshot%202025-01-30%20210750.png" height="200px" width="300px">
</p>

1. All this app is dockerize and its run on any platform 
2. This app is Django and python base 
3. API are totally complete and can use them in other template 
4. This project is render base too how is it in pictures
5. This app have Celery Worker for delete the done tasks of user 

# Installation
## 1 .Install Docker 
<h3> For Install Docker in linux or windows use this  <a href='https://docs.docker.com/desktop/setup/install/linux/'>link</a> </h3>
<br>

## 2. Get The project
### for get the project just clone it from Github or you can use the below code
#### Just copy and past in terminal or CMD
``` bash
git clone https://github.com/maryus1991/ADV_Blog.git
```
## 3. Start The project 
### For setup and Start the project just run the Below code in terminal or CMD
``` bash
docker-compose -f docker-compose-stage.yaml up
```
#### its may take a time to build and run the project 
#### NOTE : Run This code in the directory the cloned the project
<br>

## 4.Setup The Project
<br>

### First you need to migrate and by run migrate command project database will setup

```bash
docker compose exec blog sh -c 'python manage.py migrate'
```
### Then create the admin user for setup default setting for site
```bash
docker compose exec blog sh -c 'python manage.py createsuperuser'
```
### NOTE: After running the command you should enter email and password
<br>