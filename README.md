<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Endpoints rápidos

- **GET /getConvertedAmount?from=USD&to=EUR&amount=100**
  - Convierte un monto de una moneda a otra usando OpenExchangeRates.
  - Ejemplo: `/get-converted-amount?from=USD&to=EUR&amount=100`

- **POST /getDaysUntilMyBirthday/addRindegastino**
  - Agrega una persona con nombre y fecha de nacimiento.
  - Body JSON: `{ "name": "Juan", "birthdate": "1990-12-20" }`

- **GET /getDaysUntilMyBirthday/all**
  - Lista todas las personas agregadas y los días que faltan para su cumpleaños.

- **GET /getDaysUntilMyBirthday/days?birthdate=YYYY-MM-DD**
  - Devuelve cuántos días faltan para el próximo cumpleaños de una fecha dada.

- **GET /getTheNumber?first=2&second=5**
  - Devuelve la concatenación de los productos de `first` por los números del 1 al `second` (máximo 9).

---

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

