drop table if exists houses;

create table
if not exists houses
(id serial primary key,
name varchar
(30) not null,
img text not null,
mortgage decimal not null,
rent decimal not null);


drop table if exists address;

create table
if not exists address
(id serial primary key,
address varchar
(100) not null,
city varchar
(100) not null,
state varchar
(2) not null,
zip int not null);