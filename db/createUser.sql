insert into users (
    auth_id, name, email, picture
) values (
    ${sub}, ${name}, ${email}, ${picture}
) returning *;