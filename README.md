# front_team_07
Team Seven - Frontend Code. IT Generation Students

## Docker commands
### Build Docker image locally
> docker build -t front_team_07:latest .

### Run Docker container
> docker run -itd --name front_team_07 -p 8080:3000 front_team_07:latest

### Check that Docker container is up and running
> docker ps -f NAME=front_team_07

### Check the application
[http://localhost:8080](http://localhost:8080)

### Stop Docker container
> docker stop front_team_07

### Delete Docker container
> docker rm front_team_07

After that you can build the Docker image and start Docker container again
