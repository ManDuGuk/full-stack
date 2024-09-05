use studydb;
select database();
-- 주석
-- 전체 실행도 있다.위에 벼락표시가 그거임  
/*
멀티 주석

테이블명: 회원 -member
idx: 회원번호(pk) - 자동증가
name: 이름
userId: 아이디
userPw: 비밀번호
tel: 연락처 
indate: 등록일 --> 등록한 날짜로 자동으로 설정 

create table 테이블명(
	컬럼명 자료형, 
	primary key(컬럼명)
);



*/


create table user(
	idx int auto_increment primary key,
    name varchar(30) not null,
    userid varchar(20) not null,
    userpw varchar(20) not null,
    tel varchar(20), 
    indate datetime default now()
);

show tables;

/*데이터 삽입(creat)
insert into 테이블명 (컬럼명1,컬럼명2,...)
values('값1',숫자값,'값3',...);
commit;
*/

insert into user(name,userid,userpw,tel)
values('홍길동','hong','123','010-1234-1111');
commit;
-- mysql은 기본설정이 auto commit , oracle은 commit을 해야만 db에 저장된다.

select *from user;

insert into user(name,userpw,userid)
values('김철수','123','kim');

insert into user (name,userid,userpw,tel) value('이영희','lee','111','010-4545-7878');
select name,userid from user;

/* 데이터 삭제
	delete from 테이블명; ==> 모든 데이터 삭제
    delete from 테이블명 where 조건절;

*/

delete from user where idx=2;

-- delete from user where name='홍길동'; 다른 db에서는 되는데 mysql에서는 안됨
drop table user;
show tables;




