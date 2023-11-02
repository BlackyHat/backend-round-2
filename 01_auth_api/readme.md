# 01: Auth API 🖥️ ⚓

# Environment Variables 🔗 ⚙️

To run this project, you will need to add the following environment variables to your .env file

```env
DB_HOST=localhost
DB_DATABASE=postgres
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_PORT=5432
PORT=8080
JWT_SECRET='your_secret'
ACCESS_TOKEN_TTL=1h
```

# Use API 💾 🌐

Run it:

```run
env $(cat .env | xargs) node server.js
```

# For using local PosgresSQL - you may use Docker 🏦 🌊

Make sure you have Docker installed (Docker is not supported by the Windows family of operating systems except Windows-Professional or Enterprise, as it requires Hyper-V, as stated on the company website Microsoft)
в [documentation](https://docs.microsoft.com/ru-ru/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v#check-requirements)

Execute the command:

```shell
docker-compose up
# -d - to run in the background
# --build - to rebuild the containers
```
