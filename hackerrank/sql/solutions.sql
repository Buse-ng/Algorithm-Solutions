--? MySQL

-- Revising the Select Query I
select * from CITY where CountryCode="USA" and POPULATION>100000 

-- Revising the Select Query II
select NAME from CITY 
where COUNTRYCODE="USA" and POPULATION>120000

-- Select All
select * from CITY 

-- Select By ID
select * from CITY
where
(ID="1661")

-- Japanese Cities' Attributes
select * from CITY where COUNTRYCODE="JPN"

-- Japanese Cities' Names
select NAME from CITY
where COUNTRYCODE="JPN"

-- Weather Observation Station 1
select CITY,STATE from STATION;

-- Weather Observation Station 2
select ROUND(SUM(LAT_N),2) AS lat, ROUND(SUM(LONG_W),2) AS lon from STATION;

-- Weather Observation Station 3
select DISTINCT CITY from STATION
where ID % 2 = 0

-- Weather Observation Station 4 
select COUNT(CITY)-COUNT(DISTINCT CITY) from STATION