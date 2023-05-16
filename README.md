## Installation API 

```bash
$ cd /api
```

```bash
$ yarn install
```

## Running the DB
If you start it first time you need to create docker container:

```bash
yarn run db:init
```
Then you can run it:
```bash
yarn run db:start
```

## Running the API
```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Installation Client

```bash
$ cd /client
```

```bash
$ yarn install
```

## Start Client
Develop mode
```bash
$ yarn dev
```

Prod
```bash
$ yarn build
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
