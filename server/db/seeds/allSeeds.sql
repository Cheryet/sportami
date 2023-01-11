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
    'SportyDuder',
    'Ophelia',
    '12345',
    '123@gmail.com',
    'Just a cool kid who is bad at sports',
    'Vancouver',
    'Male',
    64,
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
    'Less Sporty Person',
    'Terrance',
    '12345',
    '1234@gmail.com',
    'Just a cool kid who is badder at sports',
    'Vancouver',
    'Male',
    19,
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
    'CoolKid',
    'Laurent',
    '12345',
    '12345@gmail.com',
    'Just a cool kid who is badder at sports',
    'Vancouver',
    'Female',
    25,
    'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg'
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

INSERT INTO matches ( challenger_id, opponent_id, location_id, sport_id, accepted) VALUES (1, 2, 1, 1, TRUE);
INSERT INTO matches ( challenger_id, opponent_id, location_id, sport_id, accepted) VALUES (1, 3, 1, 2, TRUE);
INSERT INTO matches ( challenger_id, opponent_id, location_id, sport_id, accepted) VALUES (2, 3, 1, 2, TRUE);
INSERT INTO matches ( challenger_id, opponent_id, location_id, sport_id, accepted) VALUES (1, 2, 1, 2, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location_id, sport_id, accepted) VALUES (3, 2, 1, 2, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location_id, sport_id, accepted) VALUES (2, 1, 1, 2, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location_id, sport_id, accepted) VALUES (3, 1, 1, 2, FALSE);

INSERT INTO reviews ( user_sport_id, winner_id, sportsmanship_rating ) VALUES ('1', '1', 5);
INSERT INTO reviews ( user_sport_id, winner_id, sportsmanship_rating ) VALUES ('2', '2', 3);