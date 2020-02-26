#React auth system



[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://bugsminers.com)

>first run ->
```
npm install
```
This is a simple react authentication system.
No backend needed here but you can link it with node or other server related things.

Contains:
  - A login/register module (only login is functionnal but register works the same way)
  - Test user is : mail: test@test.test / psw: test
  - logout option when logged in
  - controlled form for connexion, button is disabled untl the form is valid


# Comming content

  - Register implementation


#How it works:
- Enter the email + psw in the form
- information are transmitted to the auth component in Auth.js
- if you're information matches with on user of the fake db then store this user in localStorage (warning because it's not optimized for real functionnals apps now the user's password is submited to the localStorage to, do not enter real personal informations)

