# SimCollegeClassroom

## Test Question
A fullstack position in DME SYSTEM is set up to test your ability to clearly communicate technical concepts, maintain legacy software systems and build new systems.

Your acceptance task is to simulate the following:

There are four kinds of threads: students, visitors, monitor and a one Lecturer per classroom. students must wait to enter classroom if class is running, enter, and then sitDown. At some point, the Lecturer enters the classroom. When the Lecturer is in the classroom, no one may enter, and the students may not leave. visitors may leave. Once all students check in, the Lecturer can StartLecture. After some time, the Lecturer leaves and all students can leave.
### To make these requirements more specific, let’s give the threads some functions to execute, and put constraints on those functions.
- students must invoke enter, sit Down, and leave.
- The Lecturer invokes enter, start Lecture and leave.
- visitors invoke enter, sitDown and leave.
- While the Lecturer is in the classroom, no one may enter and students may not leave.
- The Lecturer cannot startLecture until all students who have entered have also sitDown.
- At any point of time any classroom may have only one lecturer.
- Classroom capacity should not exceed limit. Visitors are always low in count (less than 5).
- Add a monitor thread to keep printing the status of each class as follows

### Simulate a college with few classrooms

{W201 (capacity 60), W202(capacity 60), W101 (Capacity 20), JS101 Capacity (30)) and lecturers {Osama, Barry, Faheem, Alex, Aqeel, Waseem} that circulate between classes.

Hints: Lecturer can use a binary semaphore to access classroom so one lecturer in class at any time students and visitors can use counted semaphores to access classroom. You can use locks, barriers, semaphores.

You are expected to create a simple app in angular that helps visualise this thread processes as they happen. the UI/UX of this APP is not of paramount importance.

Submittion is by a github link and it should be the reply to this Mail.
and a hosted/deployed version of this will be a plus

The latest date of submittion is Monday 05/06/2023.

## Project Description

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deployment
Run `docker build -t dme-test-fe:latest .` To build a custom image to be used in the docker container

Run `docker compose up -d` To start the container

## Note
- The build from `ng build --prod` was added to git repo because of VM memory constraints 
- I was a little confused with the thread in the question. I was not certain if the thread implied web workers for browsers or not. But the test was done without web workers
