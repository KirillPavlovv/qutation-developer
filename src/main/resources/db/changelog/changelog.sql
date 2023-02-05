--liquibase formatted sql
--changeset quotation:202301261950

CREATE EXTENSION "uuid-ossp";
CREATE EXTENSION ltree;

CREATE TABLE users
(
    id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name   VARCHAR(50) NOT NULL,
    last_name    VARCHAR(50) NOT NULL,
    email        VARCHAR(50) NOT NULL,
    phone_number VARCHAR(50) NOT NULL
);


--liquibase formatted sql
--changeset quotation:202301261958

INSERT INTO users(first_name, last_name, email, phone_number)
VALUES ('Kirill',
        'Pavlov',
        'kirillp1988@gmail.com',
        '+3725539249');

--liquibase formatted sql
--changeset quotation:202301262055

CREATE TABLE customers
(
    id              uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    company_name    VARCHAR(150) NOT NULL,
    general_address VARCHAR(150) NOT NULL
);

INSERT INTO customers(company_name, general_address)
VALUES ('LOGISTIKA PLUSS OÜ',
        'Tallinn, Punane 73');


--liquibase formatted sql
--changeset quotation:202301262230

CREATE TABLE products
(
    id        uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    parent_id uuid,
    name      TEXT  NOT NULL,
    path      ltree NOT NULL
);

CREATE INDEX path_gist_idx ON products USING GIST (path);

--liquibase formatted sql
--changeset quotation:202301291930

CREATE TABLE persons
(
    id           uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    company_id   uuid REFERENCES customers (id),
    first_name   VARCHAR(30) NOT NULL,
    last_name    VARCHAR(30) NOT NULL,
    email        VARCHAR(50) NOT NULL,
    phone_number VARCHAR(20) NOT NULL
);

--liquibase formatted sql
--changeset quotation:202302052020
ALTER TABLE products ADD description VARCHAR(500);
ALTER TABLE products ADD image_path VARCHAR(150);
