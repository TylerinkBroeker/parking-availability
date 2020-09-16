
-- Managers
INSERT INTO managers VALUES (1, "Manager", "Mann"," ManMan@gmail.com", 123, "2020-07-08 00:33:41", "2020-07-08 00:33:41");
INSERT INTO managers VALUES (2, "WoManager", "WoMann"," WoWo@gmail.com", 456, "2020-07-08 00:33:41", "2020-07-08 00:33:41");
INSERT INTO managers VALUES (3, "AManager", "AMann"," AMan@gmail.com", 789, "2020-07-08 00:33:41", "2020-07-08 00:33:41");

-- Users
INSERT INTO users VALUES (1, "Ty", "Bro", "TyBro@gmail.com", 123, "2020-07-08 00:33:41", "2020-07-08 00:33:41");
INSERT INTO users VALUES (2, "An", "Will", "AnWill@gmail.com", 456, "2020-07-08 00:33:41", "2020-07-08 00:33:41");
INSERT INTO users VALUES (3, "Ry", "Sim", "RySim@gmail.com", 789, "2020-07-08 00:33:41", "2020-07-08 00:33:41");

-- Lots
INSERT INTO parkinglots VALUES (1, "A", 92110, 6, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 1);
INSERT INTO parkinglots VALUES (2, "B", 92110, 6, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 2);
INSERT INTO parkinglots VALUES (3, "C", 92111, 6, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 3);
INSERT INTO parkinglots VALUES (4, "D", 92111, 6, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 1);
INSERT INTO parkinglots VALUES (5, "E", 92112, 6, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 2);
INSERT INTO parkinglots VALUES (6, "F", 92112, 6, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 3);
INSERT INTO parkinglots VALUES (7, "G", 92112, 6, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 1);
INSERT INTO parkinglots VALUES (8, "H", 92113, 6, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 2);
INSERT INTO parkinglots VALUES (9, "I", 92111, 6, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 3);
INSERT INTO parkinglots VALUES (10, "J", 92110, 6, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 1);

-- Spaces 						Id, space#, available, createdat,     updatedat,       lotId, UserId
INSERT INTO parkingspaces VALUES (1, 1, true, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 1, 1);
INSERT INTO parkingspaces VALUES (2, 2, true, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 1, 2);
INSERT INTO parkingspaces VALUES (3, 3, true, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 1, 3);
INSERT INTO parkingspaces VALUES (4, 4, true, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 1, null);
INSERT INTO parkingspaces VALUES (5, 5, true, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 1, null);
INSERT INTO parkingspaces VALUES (6, 6, true, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 1, null);

INSERT INTO parkingspaces VALUES (7, 1, false, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 2, 1);
INSERT INTO parkingspaces VALUES (8, 2, true, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 2, 2);
INSERT INTO parkingspaces VALUES (9, 3, false, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 2, 3);
INSERT INTO parkingspaces VALUES (10, 4, true, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 2, null);
INSERT INTO parkingspaces VALUES (11, 5, true, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 2, null);
INSERT INTO parkingspaces VALUES (12, 6, false, "2020-07-08 00:33:41", "2020-07-08 00:33:41", 2, null);

