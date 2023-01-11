1: In the sportami folder in your terminal type

psql

2: Copy and paste the following commands into your terminal

CREATE DATABASE sportami;
\c sportami;
\i server/db/schema/create.sql

\i server/db/seeds/users.sql
\i server/db/seeds/sports.sql
\i server/db/seeds/users_sports.sql
\i server/db/seeds/matches.sql
\i server/db/seeds/reviews.sql
or 
\i server/db/seeds/allSeeds.sql

3: Copy and paste the following commands into your terminal to confirm the tables were created

\dt

4: Either remove '.example' from '.env.example' or copy the contents of '.env.example' to a new file called '.env'
