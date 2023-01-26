--liquibase formatted sql
--changeset quatation:202301261950

CREATE TABLE users
(
    id UUID PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL ,
    last_name VARCHAR(50) NOT NULL ,
    email VARCHAR(50) NOT NULL,
    phone_number VARCHAR(50) NOT NULL
);


--liquibase formatted sql
--changeset quatation:202301261958

INSERT INTO users VALUES (
                             '146bdf6e-d01f-4d93-8b3a-eca30dc78f97',
                             'Kirill',
                             'Pavlov',
                             'kirillp1988@gmail.com',
                             '+3725539249'
                         );
