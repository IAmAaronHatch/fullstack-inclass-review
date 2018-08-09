create table users (
    id serial primary key, 
    auth_id text,
    name varchar,
    email varchar, 
    picture text
);

create table posts (
    id serial primary key,
    user_id integer references users,
    title varchar,
    content text
);