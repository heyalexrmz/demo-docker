
Build the image 

docker build -t demo-app .

Start the app:
docker compose up
Start in detached mode (background):
docker compose up -d
Rebuild and start (after code changes):
docker compose up --build
Stop the app:
docker compose down
View logs:
docker compose logs -f