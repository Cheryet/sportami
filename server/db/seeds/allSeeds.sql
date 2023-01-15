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
    'RollinRinger',
    'Ryan',
    '12345',
    'RollinRinger@LHL.com',
    'Hi, my name is Ryan and I''m an avid bowler and pickle ball player. I''m not competitive player, I just love to have fun and enjoy the camaraderie of the game. I''m available to play most evenings and weekends, and I''m always looking for new friends to play with. So if you''re looking for a fun match in bowling or pickleball, let''s connect and hit the lanes or the court!',
    'Vancouver',
    'Male',
    41,
    'https://media.istockphoto.com/id/94741325/photo/intergalactic-champion.jpg?s=612x612&w=0&k=20&c=vd0H5JaV7spC42b1Z9mZXg2gpFoLUbOaG6RWh-X-cYM='
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
    'CausingARacquet',
    'Alex',
    '12345',
    'flargunstow@LHL.com',
    'Hi, I''m Alex, a passionate bowler, tennis enthusiast, and golf lover. I''m always looking for new opponents to challenge. I enjoy playing in both friendly and competitive matches! I would like to believe I''m a friendly and sportsmanlike player who is always looking to improve her skills and have a good time on the court or alley. If you''re looking for a fun and competitive match, I''m is the perfect opponent for you!',
    'Oakville',
    'Female',
    22,
    'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/10/06/Photos/Processed/tyes-kdED--621x414@LiveMint.jpg'
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
    'MysteryMan',
    'Fred',
    '12345',
    'MysteryMan@LHL.com',
    'Heya, what''s good? I''m Fred, a sports enthusiast who loves to play Bowling, Golf and Tennis. I''m a pro at all three, but a master of none. Looking for opponents to show me who''s boss and make me laugh. Let''s hit the lanes, course or court and make it a good time!',
    'Lethbridge',
    'Male',
    24,
    'https://publish.one37pm.net/wp-content/uploads/2022/06/GettyImages-1233702796-1-e1655407870708.jpg?fit=1360%2C897'
    );

INSERT INTO sports ( name ) VALUES ('Golf');
INSERT INTO sports ( name ) VALUES ('Tennis');
INSERT INTO sports ( name ) VALUES ('Bowling');
INSERT INTO sports ( name ) VALUES ('Squash');
INSERT INTO sports ( name ) VALUES ('Table Tennis');
INSERT INTO sports ( name ) VALUES ('Pickle Ball');

INSERT INTO users_sports ( user_id, sport_id, self_skill) VALUES (1, 6, 'Intermediate');
INSERT INTO users_sports ( user_id, sport_id, self_skill) VALUES (1, 3, 'Advanced');
INSERT INTO users_sports ( user_id, sport_id, self_skill) VALUES (2, 1, 'Intermediate');
INSERT INTO users_sports ( user_id, sport_id, self_skill) VALUES (2, 2, 'Advanced');
INSERT INTO users_sports ( user_id, sport_id, self_skill) VALUES (2, 3, 'Beginner');
INSERT INTO users_sports ( user_id, sport_id, self_skill) VALUES (3, 2, 'Beginner');
INSERT INTO users_sports ( user_id, sport_id, self_skill) VALUES (3, 1, 'Intermediate');
INSERT INTO users_sports ( user_id, sport_id, self_skill) VALUES (3, 3, 'Beginner');

INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (1, 2, 'Vancouver', 3, TRUE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (1, 3, 'Vancouver', 3, TRUE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (1, 2, 'Lethbridge', 3, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (1, 3, 'Lethbridge', 3, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (2, 1, 'Lethbridge', 3, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (3, 1, 'Oakville', 3, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (2, 1, 'Vancouver', 3, TRUE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (2, 3, 'Vancouver', 3, TRUE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (2, 1, 'Lethbridge', 3, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (2, 3, 'Lethbridge', 3, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (1, 2, 'Lethbridge', 3, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (3, 2, 'Oakville', 3, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (3, 2, 'Vancouver', 3, TRUE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (3, 1, 'Vancouver', 3, TRUE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (3, 2, 'Lethbridge', 3, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (3, 1, 'Lethbridge', 3, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (2, 3, 'Lethbridge', 3, FALSE);
INSERT INTO matches ( challenger_id, opponent_id, location, sport_id, accepted) VALUES (1, 3, 'Oakville', 3, FALSE);


INSERT INTO reviews ( user_sport_id, winner_id, sportsmanship_rating ) VALUES ('1', '1', 5);
INSERT INTO reviews ( user_sport_id, winner_id, sportsmanship_rating ) VALUES ('2', '2', 3);
INSERT INTO reviews ( user_sport_id, winner_id, sportsmanship_rating ) VALUES ('3', '2', 5);
INSERT INTO reviews ( user_sport_id, winner_id, sportsmanship_rating ) VALUES ('4', '2', 5);
INSERT INTO reviews ( user_sport_id, winner_id, sportsmanship_rating ) VALUES ('5', '3', 5);
INSERT INTO reviews ( user_sport_id, winner_id, sportsmanship_rating ) VALUES ('6', '3', 3);
INSERT INTO reviews ( user_sport_id, winner_id, sportsmanship_rating ) VALUES ('7', '3', 4);