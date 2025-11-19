
## Development Mode (with hot-reload)

Start with watch mode (auto-reload on file changes):
docker compose up --watch

Start in detached mode:
docker compose up --watch -d

Stop the app:
docker compose down

View logs:
docker compose logs -f

## Production Mode

Build the production image:
docker build -t demo-app .

Build with docker-compose:
docker compose -f docker-compose.prod.yml up --build

## Useful Commands

Rebuild after dependency changes:
docker compose up --build

Remove containers and volumes:
docker compose down -v

Access container shell:
docker exec -it demo-app-container sh