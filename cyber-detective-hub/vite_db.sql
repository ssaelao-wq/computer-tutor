-- MySQL reference queries for the student-facing L3 curriculum (see PRJ_KNOWLEDGE.md §2/§8).
-- This platform's OWN database is PostgreSQL/Supabase, created automatically by server.cjs's
-- createTables() on first run — this file does not set up or query the Cyber Detective Hub
-- app's own database. See db_setup.sql for the accompanying reference schema.
-- CREATE DATABASE IF NOT EXISTS vite_db;
-- ALTER USER 'root'@'localhost' IDENTIFIED BY 'Vtinroad87';
-- FLUSH PRIVILEGES;
USE vite_db;

select * from completed_quests;
select * from journal_entries;
select * from journal_versions;
select * from user_profile;

