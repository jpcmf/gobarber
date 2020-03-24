<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  GoBarber Full Application
</h3>

<p align="center">In this repository you will find the complete application of Rocketseat GoStack Bootcamp 9 🎓</p>

<p align="center">
  <a href="#coffee-back-end">Back-end</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-front-end">Front-end</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iphone-mobile">Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

# Build Setup

The project requires [Node.js](https://nodejs.org/) to run locally.

## :coffee: Back-end

After clone the repository go to the folder `backend` and install the dependencies.

```bash
# install dependencies
npm install
```

### create the Postgres database with Docker

```bash
# run this command
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
docker start database
```

### access the Postgres database

You need create a new database called `gobarber`. I suggest you to use the [Postbird](https://www.electronjs.org/apps/postbird) for OSX. After install you need set the configuration bellow and the create your database with `UTF8` client encoding.

```bash
# host
localhost

# port
5432 (the port you set in the docker run)

# username
postgres

# password
docker (the password you set in the docker run)
```

### create the Redis database

```bash
# run this command
docker run --name redisbarber -p 6379:6379 -d -t redis:alpine
docker start redisbarber
```

### change the .env file

Rename the `.env-example` to `.env` and configure with the database and redis details. Remember to set the `REDIS_HOST` to `127.0.0.1`.

### run sequelize migrate

```bash
# run this command
./node_modules/.bin/sequelize db:migrate
```

### run sequelize seed

```bash
# run this command
./node_modules/.bin/sequelize db:seed:all
```

### run server

```bash
# run this command
npm run dev
```

### run queue (mail server)

```bash
# run this command
npm run queue
```

## :computer: Front-end

After clone the repository go to the folder `frontend` and install the dependencies and run the project with the command `npm start`.

```bash
# install dependencies
npm install
```

```bash
# run at localhost:3000
npm start
```

## :iphone: Mobile

After clone the repository go to the folder `mobile` and install the dependencies and run the project with the command `npm start`. Note: The version of mobile app was development only for `iOS`. You need the Xcode client in your computer to run the application in the simulator or configure to use the app via USB. There is another options to run the app, for i.e. [Expo](https://expo.io/learn).

```bash
# install dependencies
npm install
```

```bash
# run react-native
react-native run-ios
```

# :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE.md) file for more details.

---

Made with :blue_heart: by João Paulo C M Fricks
