INSERT INTO users ( 
  username,
  first_name,
  password,
  email,
  bio,
  location,
  gender,
  age,
  profile_pic) 
  VALUES (
    'Vorotyna',
    'Alisa',
    '12345',
    'Vorotyna@LHL.com',
    'This is the bio for Alisa',
    'Oakville',
    'Female',
    22,
    'https://i.pinimg.com/originals/fb/c0/47/fbc047e678aaa3f4e09206c61c819d4f.jpg'
    );

INSERT INTO users ( 
  username,
  first_name,
  password,
  email,
  bio,
  location,
  gender,
  age,
  profile_pic) 
  VALUES (
    'ItsGentleB',
    'B',
    '12345',
    'ItsGentleB@LHL.com',
    'This is the bio for B',
    'Vancouver',
    'Other',
    29,
    'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    );

INSERT INTO users ( 
  username,
  first_name,
  password,
  email,
  bio,
  location,
  gender,
  age,
  profile_pic) 
  VALUES (
    'Cheryet',
    'Corbin',
    '12345',
    'CHeryet@LHL.com',
    'This is my Bio. I need to write some text in here so im stretching it out, Hello from my bio',
    'Lethrbidge',
    'Male',
    24,
    'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    );

INSERT INTO sports ( name ) VALUES ('Golf');
INSERT INTO sports ( name ) VALUES ('Tennis');
INSERT INTO sports ( name ) VALUES ('Bowling');
INSERT INTO sports ( name ) VALUES ('Squash');
INSERT INTO sports ( name ) VALUES ('Table Tennis');
INSERT INTO sports ( name ) VALUES ('Pickle Ball');

INSERT INTO users_sports ( user_id, sport_id, self_skill) VALUES (1, 1, 'Casual');
INSERT INTO users_sports ( user_id, sport_id, self_skill) VALUES (1, 2, 'Pro');
INSERT INTO users_sports ( user_id, sport_id, self_skill) VALUES (2, 1, 'Intermediate');
INSERT INTO users_sports ( user_id, sport_id, self_skill) VALUES (2, 2, 'Casual');
INSERT INTO users_sports ( user_id, sport_id, self_skill) VALUES (3, 2, 'Casual');
INSERT INTO users_sports ( user_id, sport_id, self_skill) VALUES (3, 1, 'Amatuer');
INSERT INTO users_sports ( user_id, sport_id, self_skill) VALUES (3, 4, 'Casual');

INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (1, 2, 'Vancouver', 1, TRUE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (1, 3, 'Vancouver', 2, TRUE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (1, 2, 'Lethbridge', 2, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (1, 3, 'Lethbridge', 2, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (2, 1, 'Lethbridge', 2, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (3, 1, 'Oakville', 2, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (2, 1, 'Vancouver', 1, TRUE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (2, 3, 'Vancouver', 2, TRUE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (2, 1, 'Lethbridge', 2, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (2, 3, 'Lethbridge', 2, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (1, 2, 'Lethbridge', 2, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (3, 2, 'Oakville', 2, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (3, 2, 'Vancouver', 1, TRUE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (3, 1, 'Vancouver', 2, TRUE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (3, 2, 'Lethbridge', 2, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (3, 1, 'Lethbridge', 2, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (2, 3, 'Lethbridge', 2, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (1, 3, 'Oakville', 2, FALSE);


INSERT INTO reviews ( user_sport_id, winner_id, sportsmanship_rating ) VALUES ('1', '1', 5);
INSERT INTO reviews ( user_sport_id, winner_id, sportsmanship_rating ) VALUES ('2', '2', 3);