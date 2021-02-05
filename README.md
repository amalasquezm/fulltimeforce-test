# GithubCommits

This project was generated with Angular and Nestjs

## Nestjs project
This project was created using the Nestjs framework. It's a REST API. Added some abstractions: Validator, controller, service, simple architecture. 

## Angular project
This project was created using Angular 11. Added some abstractions: components, shared components, lazy loading, services, angular material, unit tests, reactive programming, modular architecture.

## Unit Test
Added unit tests to cover the 100% of the GithubCommitsService functionality. To see the tests run: `ng test`

## Run Containers
Run `docker-compose up` to run both backend and frontend projects, then go to `http://localhost:8080/` .

## Run each projects 
If containers fail, then run each project individually. 

### Run backend
```sh
cd github-commits-backend
npm i
npm start
```

### Run frontend
```sh
cd github-commits-frontend
npm i
npm start
```

Then open the browser: [http://localhost:4200/](http://localhost:4200/)
