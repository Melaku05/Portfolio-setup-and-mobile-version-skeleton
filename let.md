![](https://img.shields.io/badge/Microverse-blueviolet)

# Booking-app-backend

This app uses a Rails back-end as an API to send doctor details and appointment data to the frontend of a booking application.

Enjoy your API!

## Link to Kanban
- [Kanban Board Link](https://github.com/users/Melaku05/projects/5)
- [Initial Kanban Board State](https://user-images.githubusercontent.com/81635839/185418057-3a0ccd96-262b-43e6-a7c1-d04c4b2d38e8.png) 

## Group Members
Our group consists of 4 members and we are:
@Melaku05 - Team Member #1
@aboongm - Team Member #2
@steveWDamesJr - Team Member #3
@Ismailco - Team Member #4


## Link to REACT FRONTEND

[REACT FRONTEND](https://github.com/Melaku05/booking-app-frontend)

## Built With

- Ruby
- Ruby on Rails
- Terminal
- IRB
- Rubocop (linters)
- PostgreSQL

## Milestones

[Project Requirements](https://github.com/microverseinc/curriculum-final-capstone/blob/main/projects/business_requirements.md) - distributed into milestones below:

### Booking-app-backend

- [x] Milestone 1: Setup the project for backend (group task) #1'
- [x] Milestone 2: Implement devise gem
- [x] Milestone 3: Rspec test user
- [x] Milestone 4: Generate table and model for the Doctor (Melaku)
- [x] Milestone 5: Generate table and model for the Reservation (Ranjit)
- [x] Milestone 6: Rspec for Reservation (Ranjit)
- [x] Milestone 7: Rspec for Doctor (Melaku)
- [x] Milestone 8: Implement Rspec gem (Steve)
- [x] Milestone 9: Create Documentation (steve)

### Booking-app-frontend

- [x] Milestone 1: Setup the project for the frontend (group task)
- [x] Milestone 2: Node package manager dependencies (group task)
- [x] Milestone 3: Create login page (group task)
- [x] Milestone 4: Create navigation panel (group task)
- [x] Milestone 5: Create main page (Ranjit)
- [x] Milestone 6: Create details page (Melaku)
- [x] Milestone 7: Create Reservation page (Steve)
- [x] Milestone 8: Create my reservation page (Ismail)
- [x] Milestone 9: Create the redux store (group task)
- [x] Milestone 10: Create the doctor reducer (group task)
- [x] Milestone 11: Create the reservation reducer (group task)
- [x] Milestone 12: Create the login reducer (group task)

- [x] Debug linter errors

## API Endpoints

[Live server: Rswag api documentations](https://booking-app.fly.dev/api-docs/index.html)

#### users/ endpoint

- GET /users/

  - Get the logged in user data
  - returns:

  ```
  {
    "id": 1,
    "username": "user",
    "created_at": "2022-08-28T21:31:51.962Z",
    "updated_at": "2022-08-28T21:31:51.962Z",
    "email": "user@email.com"
  }
  ```

- POST /users

  - Create a new user
  - e.g:

  ```
  {
    "username": "user",
    "email": "user@email.com",
    "password": "password"
  }
  ```

- DELETE /users/
  - Logged out the logged in user

#### doctors endpoint

- POST /doctors/

  - Create a new doctor
  - e.g:

  ```
  {
    "name": "Dr. doc",
    "detail": "Bio",
    "photo": "photo.jpg",
    "city": "London",
    "specialization": "Gynecologist",
    "fee": 100.00
  }
  ```

- GET /doctors/
  - Get all doctors
  - returns:
  ```
  [{
    "id": 1,
    "name": "Dr. doc",
    "detail": "Bio",
    "photo": "photo.jpg",
    "city": "London",
    "specialization": "Gynecologist",
    "fee": 100.0,
    "created_at": "2022-08-30T10:34:55.953Z",
    "updated_at": "2022-08-30T10:34:55.953Z"
  }]
  ```
- GET /doctors/:id

  - Get a doctor by id
  - returns:

  ```
  {
    "id": 1,
    "name": "Dr. doc",
    "detail": "Bio",
    "photo": "photo.jpg",
    "city": "London",
    "specialization": "Gynecologist",
    "fee": 100.0,
    "created_at": "2022-08-30T10:34:55.953Z",
    "updated_at": "2022-08-30T10:34:55.953Z"
  }
  ```

- DELETE /doctors/:id
  - Delete a doctor by id

#### reservations endpoint

- POST /reservations/

  - Create a new reservation
  - e.g:

  ```
  {
    "doctor_id": 1,
    "user_id": 1,
    "date": "2022-08-30",
    "city": "London",
  }
  ```

- GET /reservations/
  - Get all reservations
  - returns:
  ```
  [{
    "id": 1,
    "doctor_id": 1,
    "user_id": 1,
    "date": "2022-08-30",
    "city": "London",
    "created_at": "2022-08-30T10:34:55.953Z",
    "updated_at": "2022-08-30T10:34:55.953Z"
  }]
  ```
- GET /reservations/:id
  - Get a reservation by id
  - returns:
  ```
  {
    "id": 1,
    "doctor_id": 1,
    "user_id": 1,
    "date": "2022-08-30",
    "city": "London",
    "created_at": "2022-08-30T10:34:55.953Z",
    "updated_at": "2022-08-30T10:34:55.953Z"
  }
  ```

## Getting Started

To get a local copy up and running follow these simple example steps.

## Pre-requisites

Make sure you have Ruby and Rails installed on your computer. If not, you can follow this [tutorial](https://guides.rubyonrails.org/getting_started.html#creating-a-new-rails-project) to install them.

If you don't have PostgreSQL installed, you can follow this [tutorial](https://www.postgresql.org/download/) to install it.

## Usage

In your terminal, navigate to your current directory and run this code

`git clone https://github.com/Melaku05/booking-app-backend.git`

Then run:

`cd booking-app-backend`

Open the project in your favorite code editor. `code .` for VS Code.

- Use the command `bundle install` or just simply `bundle` to install all project dependencies.
- Run `rails db:create db:migrate` to create the database and run migrations.
- You might need to supply a username and password for your PostgreSQL database if you run into an error with the previous step.
- Simply navigate to `config/database.yml` and add your username and password to the `username` and `password` fields.

Start terminal

`rails s`

- Then click on `http://127.0.0.1:3000`

Enjoy your fantastic Doctoral bookings as your app opens in the web browser!

## Run Linters:

### To run rubocop we use:

`rubocop`

### To autocorrect offenses with rubocop we use:

`rubocop --auto-correct-all` or
`rubocop -A`

## Testing

### Run Test for models

`rspec spec/models`

### Run Test for views

`bundle exec rspec spec/views`

## Usage

- Login into Booking App with your username
- Click on the list of Doctors to see their specific detailed information
- From Navigation or from details page click 'Reserve' to book an appointment
- Click from Navigation panel, 'My Reservation' to view a list of your appointment details

Enjoy saving time on long appointment calls by using our top ranking appointment booking App!

## Author 1:

👤 **Melaku Eshetu**

- GitHub: [Melaku05](https://github.com/Melaku05)
- Twitter: [Melaku](https://twitter.com/melaku_mel)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/melaku-eshetu/)

## Author 2:

👤 **Ranjit Luwang**

- GitHub: [@aboongm](https://github.com/aboongm)
- Twitter: [@John_luang1](https://twitter.com/John_luang1)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/aboongm)

## Author 3:

👤 **STEVE W DAMES JR**

- GitHub: [@githubhandle](https://github.com/steveWDamesJr)
- Twitter: [@twitterhandle](https://twitter.com/Steve88312331)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/steve-w-dames-jr/)

## Author 4:

👤 **Ismail Courr**

- GitHub: [@ismailco](https://github.com/ismailco)
- Twitter: [@ismailcourr](https://twitter.com/ismailcourr)
- LinkedIn: [Ismail courr](https://www.linkedin.com/in/ismailcourr)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Melaku05/booking-app-backend/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Original design idea by [Murat Korkmaz on Behance.]('https://www.behance.net/muratk')

## 📝 License

This project is [MIT](./MIT.md) licensed.
