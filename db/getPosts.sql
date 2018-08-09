select p.*, u.name 
from posts p
join users u 
on p.user_id = u.id 