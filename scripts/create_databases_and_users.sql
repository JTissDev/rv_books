
-- Create databases
CREATE DATABASE rv_books_prod;
CREATE DATABASE rv_books_dev;
CREATE DATABASE rv_books_test;
CREATE DATABASE rv_books_show;

-- Create users and grant permissions

-- Production user
CREATE USER 'JTissDev_prod'@'localhost' IDENTIFIED BY 'RvB00ks@JTissDev_prod@p@55w0rd';
GRANT ALL PRIVILEGES ON rv_books_prod.* TO 'JTissDev_prod'@'localhost';

-- Development user
CREATE USER 'JTissDev_dev'@'localhost' IDENTIFIED BY 'Jti55D3v_d3v@p@55w0rd';
GRANT ALL PRIVILEGES ON rv_books_dev.* TO 'JTissDev_dev'@'localhost';

-- Test user
CREATE USER 'JTissDev_test'@'localhost' IDENTIFIED BY 'JTissDev_test@p@55w0rd';
GRANT SELECT ON rv_books_test.* TO 'JTissDev_test'@'localhost';

-- Show user
CREATE USER 'JTissDev_show'@'localhost' IDENTIFIED BY 'JTi55D3v_sh0w@p@55w0rd';
GRANT SELECT ON rv_books_show.* TO 'JTissDev_show'@'localhost';

-- Apply changes
FLUSH PRIVILEGES;
