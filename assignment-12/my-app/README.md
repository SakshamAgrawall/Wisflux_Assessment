docker build -t my-app-image .


docker volume create my-app-volume


docker run -it -p 3000:3000 -v ${PWD}:/app -v my-app-volume:/app/node_modules my-app-image





-it: starts the container in interactive mode
-p 3000:3000: maps the container's port 3000 to the host's port 3000
-v ${PWD}:/app: mounts the current working directory as a volume inside the container at /app
-v my-app-volume:/app/node_modules: mounts a new Docker volume my-app-volume inside the container at /app/node_modules
my-app-image: the name of the Docker image to run