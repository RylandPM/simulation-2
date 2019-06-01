delete from houses where id =$1;

delete from address where houses_id_seq =$1;

select *
from houses inner join Address on houses.id=address.houses_id_seq;