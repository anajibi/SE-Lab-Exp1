/*
Windows:
& 'C:\Program Files\PostgreSQL\14\bin\psql.exe' -f .\create_db.sql postgres postgres
*/

CREATE DATABASE sharifdrive
    WITH
    OWNER = postgres
    TEMPLATE = template0
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

ALTER DATABASE sharifdrive SET default_transaction_isolation TO 'read committed';

CREATE ROLE sharifdrive_mainservice WITH
    LOGIN
    NOSUPERUSER
    INHERIT
    NOCREATEDB
    NOCREATEROLE
    NOREPLICATION
    PASSWORD 'sharifdrive_mainservice_password';

ALTER ROLE sharifdrive_mainservice SET search_path TO mainservice;
ALTER ROLE sharifdrive_mainservice SET default_transaction_isolation TO 'read committed';

\connect sharifdrive

CREATE SCHEMA mainservice
    AUTHORIZATION sharifdrive_mainservice;
