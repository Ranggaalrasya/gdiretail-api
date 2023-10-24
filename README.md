<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Documentation

REGISTRATION AND USER MANAGEMENT

http://localhost:3000/user "{POST} user registration, {GET} get all user"
http://localhost:3000/user/(id) "{GET} get user by id, {PATCH} update user by id, {DELETE} delete user by id"

json format and validation to make or update user
{
    "name" : "Shaun McNugget", 		-> string
    "gender" : "Pria", 			-> unset, Pria, Wanita
    "email" : "Shaun@gmail.com", 	-> string, must be email
    "password" : "12345", 		-> string
    "alamat" : "JL. Lah kepo", 		-> string
    "no_telp" : "085678910", 		-> string
    "posisi" : "Sales", 		-> unset, SuperAdmin, Admin, Sales
    "status" : "Active" 		-> Active, Inactive
}

LOGIN

http://localhost:3000/auth/login "{POST} Login and getting jwt token"

json format to login
{
    "email" : "Shaun@gmail.com",
    "password" : "12345"
}


PURCHASE MANAGEMENT

http://localhost:3000/purchase "{POST} make a purchase, {GET} get all purchase"
http://localhost:3000/purchase/(id) "{GET} get purchase by id, {PATCH} update purchase by id, {DELETE} delete purchase by id"

json format and validation to make a or update purchase
{
    "supplier_id"       : 1, 		-> Integer
    "code"              : "prcs-01", 	-> String
    "shipping_cost"     : 20000, 	-> Integer
    "shipping_info"     : "", 		-> String
    "other_cost"        : 30000, 	-> Integer
    "other_info"        : "", 		-> String
    "total"             : 100000, 	-> Integer
    "payment"           : "paid", 	-> String
    "payment_method"    : "cash", 	-> String
    "status"            : "approved" 	-> String
}

SALE MANAGEMENT

http://localhost:3000/sale "{POST} make a sale, {GET} get all sales"
http://localhost:3000/sale/(id) "{GET} get sales by id, {PATCH} update sales by id, {DELETE} delete sales by id"

json format and validation to make or update a sale
{
    "sales_id" 		: 1, 		-> Integer
    "customer_id" 	: 23, 		-> Integer
    "code" 		: "Sls-00999", 	-> String
    "shipping_cost" 	: 20000, 	-> Integer
    "shipping_info" 	: "",  		-> String
    "other_cost" 	: 30000, 	-> Integer
    "other_info" 	: "", 		-> String
    "payment_method" 	: "Cash", 	-> String
    "status" 		: "Approved", 	-> String
    "total" 		: 1000000 	-> String
}

PRODUCT MANAGEMENT 

http://localhost:3000/sale "{POST} make a product, {GET} get all products"
http://localhost:3000/sale/(id) "{GET} get products by id, {PATCH} update products by id, {DELETE} delete products by id"

json format and validation to make or update a product
{
    "product_name" 	: "Pencil", 	-> String
    "product_price" 	: 20000, 	-> Integer
    "product_quantity" 	: 100, 		-> Integer
}

SUPPLIER MANAGEMENT 

http://localhost:3000/sale "{POST} make a supplier, {GET} get all supplier"
http://localhost:3000/sale/(id) "{GET} get supplier by id, {PATCH} update supplier by id, {DELETE} delete supplier by id"

json format and validation to make or update a supplier
{
    "supplier_name" 	: "Pencil", 	-> String
    "supplier_address" 	: "kalimantan", -> String
    "product_quantity" 	: "0847563846", -> String
}


