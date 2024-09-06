use studydb;
show tables;
drop table user;

drop table if exists user;
-- DDL (create, drop, alter,rename)
create table if not exists  user(
	idx int auto_increment primary key,
    name varchar(30) not null,
    userid varchar(20) not null,
    userpw varchar(20) not null,
    tel varchar(20),
    indate datetime default now()
);
show tables;
desc user;
-- insert into 테이블명(컬럼명1,...) values(값1,...)
insert into user(name,userid,userpw,tel)
values('홍길동','hong','123','010-1111-2222');

select * from user;

-- 데이터 4건이상 삽입하세요
insert into user(name,userid,userpw,tel)
values('김길동','kim','123','010-2111-2222');
insert into user(name,userid,userpw,tel)
values('김철수','kim2','123','010-3111-2222');
insert into user(name,userid,userpw,tel)
values('최희수','choi','123','010-4111-2222');

-- DCL (grant,revoke, commit,rollback)
commit;

select @@autocommit; -- 1 (true) : 자동커밋 
set autocommit=0; -- 수동 커밋으로 변경

select idx, name, tel from user;
-- 회원 인원수 : count(컬럼명)
select count(idx) from user;

insert into user(name,userid,userpw)
values('표길동','pyo','111');
commit;  -- DB 영구히 반영
select * from user;
insert into user(name,userid,userpw)
values('표영희','pyo2','111');
rollback; -- 취소

select * from user;

-- 데이터 삭제
-- delete from 테이블명; ===> 모든 데이터 삭제 
-- delete from 테이블명 where 조건절 ==> 조건에 맞는 레코드만 삭제
delete from user;
rollback;
delete from user where idx=1;

-- 이름이 홍길동인 데이터들을 삭제하세요alter
delete from user where name = "홍길동"; -- 중복된값 모두 삭제해줌
select * from user;

-- 이름이 길동으로 끝나는 회원정보 삭제
delete from user where name like '%길동';
rollback;

-- 성이 '김'씨인 회원정보를 삭제하세요
delete from user where name like '김%';


-- update:데이터 수정
/*
update 테이블명 set 컬럼명1=값1, 컬럼명2=값2,...; ==>모든 데이터를 수정
update 테이블명 set 컬럼명1=값1, 컬럼명2=값2, ...where 조건절; ==> 조건에 부하하는 데이터를 수정
*/

-- 회원번호가 2번인 회원의 userid를 'hong2'로 수정하세요.
update user set userid = 'hong2' where idx=2;
commit;

update user set name= '아무개',tel='02-3333-555'; -- where 조건절을 붙이지 않으면 전체가 업데이트 됨

select * from user;
rollback;

-- R: select문
-- select 컬럼명1,컬럼명2, ...from 테이블명;
-- select 컬럼명1,컬럼명2, ...from 테이블명 where 조건절;
select * from user;
select name from user;

-- userid가 'choi'인 회원의 이름,회원번호,등록일 가져와 보여주세요

select name,userid,indate from user where name='홍길동';

-- userid '0'자가 들어간 회원의 모든 정보를 보여주세요
select * from user where userid like '%o%';

-- 연락처가 없는 회원의 모든 정보 보여주세요
select * from user where tel is null;
select * from user where tel is not null;
-- 연락처가 없는 회원의 모든 저오 보여주세요
-- ==> 데이터를 가져오지 못한다.  null값을 비교할때는 등호가 아니라 is null , is not null로 비교한다.
select * from user where tel = null;

-- 회원의 번호,이름,등록일을 보여주되, 회원번호 내림차순으로 보여줘alter
select * from user order by idx desc;


-- 회원의 모든 정보 가져오되 이름 가나다 순으로 , 같은 이름이 있을경우에는 번호 내림차순임alter
select * from user;
insert into user (name,userid,userpw,tel) value ('홍길동','hong2',111,'12312-234');
select * from user order by name ASC ,idx desc; 

-- 회원의 번호,이름,등록일을 보여주되 등록일은 년월일만 보여주세요
-- %Y : 년도 4자리, %y: 년도 2자리
-- %m : 월, %d: 일 2자리 
-- %H : 시간24시간 형식, %h: 시간 12시간 형식
-- %i : 분 	%s:초 	%p:오전/오후 AM/PM

-- as별칭
select name,date_format(indate,'%Y-%m-%d %p %h:%i:%s') as joindate from user;

select * from user;
-- 회원번호가 5미만인 회원정보를 보여주되 번호,이름,아이디,등록일( 년2자리 월 일)을 가져와 보여주세요 단 회원번호는 내림차순으로 
select idx,name,date_format(indate, '%y-%m-%d') as indate from user where idx<=5 order by idx desc;

-- idx가 5미낭 이거나 userid에 'o'가 들어간 회원정보를 보여주세요
-- or 연산자,and 연산자

select * from user where userid like '%o%' and idx<5;

select * from user;
update user set indate= date_format('23-08-01','%y-%m-%d') where idx =3;

-- 23년도에 등록한 회원정보를 보여주세요
select* from user where indate like '2023%';
select *from user where date_format(indate,'%y') ='23';

-- 24년도 9월에 등록한 회원정보를 보여주되 날짜 내림차순으로 보여주세요
select *from user where date_format(indate,'%y') = '23' and date_format(indate,'%m')='08';
select *from user where date_format(indate,'%y-%m') = '23-08';

/*
book 테이블을 생성하세요
isbn int 자동증가 ==> pk
title varchar(50) ==>not null
publish varchar(50) ==> not null
price int
image varchar(100) 기본값 'noimage.jpg'
createdAt datetime 기본값 시스템 현재시간

*/

-- 참고록 ddl 문장은 commit의 개념이 없다. dlc 문장만 commit이 적용된다.

create table if not exists  book(
	isbn int auto_increment primary key,
    title varchar(50) not null,
    publish varchar(50) not null,
    price int,
	image varchar(100) default 'noimage.jpg',
    createdAt datetime default now()
);

show tables;
select* from book;
drop table book;

-- 컬럼 추가/변경/삭제
-- createdAt 컬럼 자료명을 char 수정
-- alter table 테이블명 modify  변경할 컬럼정보 ==>자료형변경
alter table book modify createdAt char(10);
desc book;

-- 컬럼명 변경
-- alter table 테이블명 rename column old_컬럼명 to new_컬럼명;
-- 컬럼명 createdAt을 indate로 수정하기
alter table book rename column createdAt to indate;
select *from book;

-- 컬럼 추가
-- alter table 테이블명 add 추가할 컬럼정보(컬럼명 자료형)
-- autor 컬럼을 추가하세요 varchar(30)

alter table book add author varchar(30) not null;

-- 컬럼 삭제
-- alter table 테이블명 drop column 컬럼명
-- author 컬럼을 삭제하세요

alter table book drop column author;
desc book;

-- indate의 자료형을 datetime으로 기본값을 now()사용하도록 수정하세요
alter table book modify indate datetime default now();

-- book 테이블에 도서정보 4건 삽입하세요 ==>commit 해두기
insert into book (title,publish,price) value ('book05','publish05',5000);
select* from book;
commit;  --  커밋을 잊지말라

select idx,name,userid,tel,indate from user where idx=1;

show tables;

commit;
select * from book;

set autocommit=1;

select @@autocommit;















