create database exam3;
use exam3;

create table companies(
id int auto_increment,
name varchar(255) not null,
primary key(id)
);

create table servers(
id int auto_increment,
name varchar (255) not null,
IP varchar (255) not null,
hosting_company_id int not null,
status bool,
date_time datetime default now(),
primary key(id),
foreign key(hosting_company_id) references companies(id)
);

insert into companies
(name)
values("Microsoft"),
      ("IBM"),
      ("GoDaddy"),
      ("DigitalO");

insert into servers
(name, IP, hosting_company_id, status)
values ("mock_server_1", "192.168.1.1",2,1),
	   ("mock_server_2", "192.264.1.1",4,0),
       ("mock_server_3", "172.16.254.1",1,1),
	   ("mock_server_4", "172.168.1.1",3,0),
       ("mock_server_5","192.16.254.1",2,0),
       ("mock_server_6","172.16.154.1",4,1);