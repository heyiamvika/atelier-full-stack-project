DROP DATABASE IF EXISTS Atelier;
CREATE DATABASE Atelier;

USE Atelier;

CREATE TABLE fabrics
(
	fabric_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    width DECIMAL(5,1) NOT NULL,
    square_meter_price DECIMAL(5,2) NOT NULL,
    meters_left INT NOT NULL DEFAULT 0
);

CREATE TABLE garment_accessories
(
	garment_accessories_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    price_per_item DECIMAL(5,2) NOT NULL,
    items_left INT NOT NULL DEFAULT 0
);

CREATE TABLE models
(
	model_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    fabric_id INT NOT NULL,
    fabric_consumption INT NOT NULL,
	fabric_cost DECIMAL(5,2) NOT NULL,
	garment_accessories_id INT NOT NULL,
    garment_accessories_consumption INT NOT NULL,
	garment_accessories_cost DECIMAL(5,2) NOT NULL,
    work_rate DECIMAL(5,2) NOT NULL,
    retail_price DECIMAL(5,2) NOT NULL,
    FOREIGN KEY fk_models_fabrics (fabric_id) 
		REFERENCES fabrics (fabric_id)
        ON UPDATE CASCADE 
        ON DELETE RESTRICT,
	FOREIGN KEY fk_models_garment_accessories (garment_accessories_id) 
		REFERENCES garment_accessories (garment_accessories_id)
        ON UPDATE CASCADE 
        ON DELETE RESTRICT
);

CREATE TABLE employees
(
	employee_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE orders
(
	order_id INT PRIMARY KEY AUTO_INCREMENT,
    client_name VARCHAR(255) NOT NULL,
    model_id INT NOT NULL,
    employee_id INT NOT NULL,
	order_date DATETIME NOT NULL,
	fitting_date DATETIME,
    fulfillment_date DATETIME,
	is_paid BOOLEAN NOT NULL DEFAULT FALSE,
    order_node VARCHAR(255),
    FOREIGN KEY fk_orders_employees (employee_id) 
		REFERENCES employees (employee_id)
        ON UPDATE CASCADE 
        ON DELETE RESTRICT,
	FOREIGN KEY fk_orders_models (model_id) 
		REFERENCES models (model_id)
        ON UPDATE CASCADE 
        ON DELETE RESTRICT
);

