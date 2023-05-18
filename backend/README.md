# Laravel Project

This is a Laravel project for test backend.

## Requirements

- PHP 8.1 or later
- Composer
- MySQL

## Installation
1. Clone the repository
2. Navigate to the project directory
3. Install the project dependencies:
```
composer install
```
4. Set up the database:
- Create a new database for the project
- Copy the `.env.example` file to `.env` and update the database credentials
- Run the database migrations: `php artisan migrate`
- Run the database seeder: `php artisan db:seed`
- Initial user information which is created by seeder is
```angular2html
[email] admin@gmail.com
[password] 123456
```
5. Start the local development server:
```
php artisan serve
```

The application should now be running at [http://localhost:8000](http://localhost:8000).

