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
    id          SERIAL PRIMARY KEY,
    parent_id   numeric,
    name        TEXT          NOT NULL,
    path        ltree         NOT NULL,
    description VARCHAR(500),
    image_path  VARCHAR(150),
    price       numeric(6, 2) NOT NULL
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
--changeset quotation:202302052058
INSERT INTO products (parent_id, name, path, description, image_path, price)
VALUES (0, 'MECALUX', 'Mecalux', 'Hispaania toode', '/products/Mecalux', 25.95);



--liquibase formatted sql
--changeset quotation:202302202058
INSERT INTO products (parent_id, name, path, description, image_path, price)
VALUES (0, 'LINDE', 'LINDE', 'Saksa toode', '/products/LINDE', 300.95);
INSERT INTO products (parent_id, name, path, description, image_path, price)
VALUES (0, 'TOYOTA', 'TOYOTA', 'Jaapani toode', '/products/TOYOTA', 10.20);
INSERT INTO products (parent_id, name, path, description, image_path, price)
VALUES (1, 'FRAME', 'MECALUX.FRAME', 'Talad', '/products/MECALUX/FRAME', 1.20);

--liquibase formatted sql
--changeset quotation:202302202116
INSERT INTO products (parent_id, name, path, description, image_path, price)
VALUES (4, '100x60', 'MECALUX.FRAME.100x60', '100 x 60 mm', '/products/MECALUX/FRAME/100x60', 0.20);
