--liquibase formatted sql
--changeset quatation:202301261950

CREATE EXTENSION "uuid-ossp";

CREATE TABLE users
(
    id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name   VARCHAR(50) NOT NULL,
    last_name    VARCHAR(50) NOT NULL,
    email        VARCHAR(50) NOT NULL,
    phone_number VARCHAR(50) NOT NULL
);


--liquibase formatted sql
--changeset quatation:202301261958

INSERT INTO users(first_name, last_name, email, phone_number)
VALUES ('Kirill',
        'Pavlov',
        'kirillp1988@gmail.com',
        '+3725539249');

--liquibase formatted sql
--changeset quatation:202301262055

CREATE TABLE customers
(
    id              uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    company_name    VARCHAR(150) NOT NULL,
    general_address VARCHAR(150) NOT NULL
);

INSERT INTO customers(company_name, general_address)
VALUES ('LOGISTIKA PLUSS OÜ',
        'Tallinn, Punane 73');
