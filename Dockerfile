# === Stage 1: Build Frontend (Svelte) ===
FROM node:20 AS frontend

WORKDIR /frontend

COPY package*.json ./
RUN npm install

COPY . .  # copy semua (src/, public/, dll)
RUN npm run build

# === Stage 2: Build Backend (PocketBase Go) ===
FROM golang:1.22 AS backend

WORKDIR /app

COPY pocketbase/ ./pocketbase/
COPY --from=frontend /frontend/dist ./public/  # hasil build Svelte
COPY go.mod go.sum ./ 2>/dev/null || true      # optional, if used
RUN go mod init example.com/mamasafe || true   # optional jika belum ada
RUN go mod tidy || true                        # optional jika belum ada

RUN go build -o main ./pocketbase/main.go

# === Stage 3: Final Image ===
FROM debian:bookworm-slim

WORKDIR /app

COPY --from=backend /app/main .
COPY --from=backend /app/public ./public/

# Expose port (ubah jika perlu)
EXPOSE 8090

CMD ["./main"]
