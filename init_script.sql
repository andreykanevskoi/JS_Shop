CREATE DATABASE SHOP;
USE SHOP;

CREATE TABLE USER
(
	USER_ID              INTEGER NOT NULL AUTO_INCREMENT,
	USER_EMAIL           VARCHAR(50) NOT NULL,
	USER_PASSWORD        VARCHAR(30) NOT NULL,
	CONSTRAINT PK_USER_USER_ID PRIMARY KEY (USER_ID)
);

CREATE UNIQUE INDEX PK_USER_USER_ID ON USER
(
	USER_ID ASC
);

CREATE UNIQUE INDEX PK_USER_USER_EMAIL ON USER
(
	USER_EMAIL ASC
);

CREATE TABLE CART
(
	USER_ID              INTEGER NOT NULL,
	CART_ID              INTEGER NOT NULL AUTO_INCREMENT,
	CONSTRAINT PK_CART_CART_ID PRIMARY KEY (CART_ID),
	CONSTRAINT R_1 FOREIGN KEY (USER_ID) REFERENCES USER (USER_ID)
);

CREATE UNIQUE INDEX PK_CART_CART_ID ON CART
(
	CART_ID ASC
);

CREATE INDEX FK_USER_ID_CART ON CART
(
	USER_ID ASC
);

CREATE TABLE PRODUCT
(
	PRODUCT_ID           INTEGER NOT NULL AUTO_INCREMENT,
	PRODUCT_DESC         NVARCHAR(500) NOT NULL,
	PRODUCT_NAME         NVARCHAR(100) NOT NULL,
	CONSTRAINT PK_PRODUCT_PRODUCT_ID PRIMARY KEY (PRODUCT_ID)
);

CREATE UNIQUE INDEX PK_PRODUCT_PRODUCT_ID ON PRODUCT
(
	PRODUCT_ID ASC
);

CREATE TABLE CART_TO_PRODUCT
(
	CART_ID              INTEGER NOT NULL,
	PRODUCT_AMOUNT       INTEGER NULL,
	PRODUCT_ID           INTEGER NOT NULL,
	CONSTRAINT XPKCART_TO_PRODUCT PRIMARY KEY (CART_ID,PRODUCT_ID),
	CONSTRAINT R_2 FOREIGN KEY (CART_ID) REFERENCES CART (CART_ID),
	CONSTRAINT R_3 FOREIGN KEY (PRODUCT_ID) REFERENCES PRODUCT (PRODUCT_ID)
);

CREATE UNIQUE INDEX XPKCART_TO_PRODUCT ON CART_TO_PRODUCT
(
	CART_ID ASC,
	PRODUCT_ID ASC
);

CREATE INDEX XIF1CART_TO_PRODUCT ON CART_TO_PRODUCT
(
	CART_ID ASC
);

CREATE INDEX XIF2CART_TO_PRODUCT ON CART_TO_PRODUCT
(
	PRODUCT_ID ASC
);
