
DROP  DATABASE IF EXISTS web_aueba;
CREATE DATABASE IF NOT EXISTS web_aueba;
USE web_aueba;

CREATE TABLE IF NOT EXISTS users (
    user_id       INT AUTO_INCREMENT PRIMARY KEY,
    user_name     VARCHAR(100) NOT NULL,
    user_email    VARCHAR(100) NOT NULL UNIQUE,
    user_password VARCHAR(20)  NOT NULL
);
