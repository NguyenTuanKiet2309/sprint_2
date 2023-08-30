create database rolex;
use rolex;

create table `role`(
role_id int not null auto_increment primary key,
role_name varchar(55)
);

create table `account`(
account_id int not null auto_increment primary key,
user_name varchar(55) unique,
email varchar (60) unique,
role_id int not null,
foreign key(role_id) references `role`(role_id)
);

create table `user`(
id_user int not null auto_increment primary key,
name_user varchar(100) not null,
phone_number varchar(20),
address varchar(100),
date_of_birth date not null,
gender bit(1) not null,
account_id int not null,
foreign key(account_id) references `account`(account_id)
);

create table category (
category_id int not null auto_increment primary key,
category_name varchar(100) not null
);
create table type_product(
type_id int not null auto_increment primary key,
type_name varchar(100) not null
);
create table `product`(
product_id int not null auto_increment primary key,
product_name varchar(100) not null,
price double not null,
quantity int not null,
descriptions varchar(200) not null,
image varchar(100) not null,
size int not null,
color varchar(50),
date_at datetime not null,
product_status bit(1) not null,
category_id int not null,
foreign key(category_id) references category(category_id),
type_id int not null,
foreign key(type_id) references type_product(type_id)
);

create table `order`(
order_id int not null auto_increment primary key,
date_order datetime not null,
order_status bit(1) not null,
id_user int not null, 
foreign key (id_user) references `user`(id_user)
);

create table order_detail(
order_detail_id int not null auto_increment primary key,
quantity_order_detail int not null,
product_id int not null,
foreign key (product_id) references product(product_id),
order_id int not null,
foreign key (order_id) references `order`(order_id)
)