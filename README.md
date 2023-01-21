# Sportami

Created by [Alisa Vorotyntseva](https://github.com/vorotyna), [Corbin Heryet](https://github.com/Cheryet), and [B Stolb](https://github.com/ItsGentleB)

Sportami is an online geosocial networking application utilizing the PERN stack to allow people to find an opponent for their next game of their, and your, favourite sport. Become a part of a vast community of people and find some amis to turn into your enemies!



### Registration Pages

https://user-images.githubusercontent.com/97066398/213570084-502bba6f-6d07-47c5-a6d0-44ab5a8cbdc2.mov


### Main Page

https://user-images.githubusercontent.com/97066398/213569867-5bcccb07-6035-4d83-9afe-bab2f6eb191d.mov


## How It's Made:

**Tech used:** PostgreSQL, Express, React, Node, Material UI
Sportami utilizes the PERN stack to cover front-end, back-end and database management.


## Setup:

- On your terminal, clone the repo via `git@github.com:Cheryet/sportami.git`
- On your preferred code editor, open the root project folder, i.e. the main `sportami` folder
  - duplicate the `.env.example` file located in `sportami/server`, then remove `.example` from its filename
    - in this newly-created `.env` file, provide the variables with relevant values
    - save your changes
- On your terminal, enter `psql`
  - then `\c sportami`
  - then `\i server/db/schema/create.sql`
  - and finally `\i server/db/seeds/allSeeds.sql`
- On your terminal, navigate to `sportami/server`
  - then `npm i`
  - then `npm start`
- On a **separate** terminal, navigate to `sportami/client`
  - then `npm i`
  - then `npm start`
- Keep the 2 terminals up and running
- On your browser, navigate to `http://localhost:3000/` and start exploring the app!
