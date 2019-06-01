alter table address ADD houses_id_seq int;
alter table address ADD CONSTRAINT
fk_houses_id_seq FOREIGN KEY (houses_id_seq) REFERENCES houses(id) ;

select *
from address;