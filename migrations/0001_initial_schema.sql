-- Migration: Sync schema to match DB Information.md
-- USERS TABLE
CREATE TABLE IF NOT EXISTS users (
    user_id TEXT PRIMARY KEY,
    user_name TEXT
);

-- GUILDS TABLE
CREATE TABLE IF NOT EXISTS guilds (
    guild_id TEXT PRIMARY KEY,
    guild_name TEXT
);

-- SECURITY TABLE
CREATE TABLE IF NOT EXISTS security (
    guild_id TEXT,
    role_id TEXT,
    PRIMARY KEY (guild_id)
);

-- POINTS TABLE
CREATE TABLE IF NOT EXISTS points (
    user_id TEXT,
    guild_id TEXT,
    points INTEGER,
    PRIMARY KEY (user_id, guild_id)
);

-- TRANSACTIONS TABLE
CREATE TABLE IF NOT EXISTS transactions (
    user_id TEXT,
    guild_id TEXT,
    points INTEGER,
    transacted_by TEXT,
    timestamp INTEGER
);
