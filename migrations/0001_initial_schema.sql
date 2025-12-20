-- Migration: Sync schema to match DB Information.md
-- USERS TABLES
CREATE TABLE IF NOT EXISTS users (
    user_id TEXT PRIMARY KEY,
    user_name TEXT
);

CREATE TABLE IF NOT EXISTS user_settings (
    user_id TEXT,
    key TEXT,
    value TEXT,
    PRIMARY KEY (user_id, key)
);

-- GUILDS TABLES
CREATE TABLE IF NOT EXISTS guilds (
    guild_id TEXT PRIMARY KEY,
    guild_name TEXT
);

CREATE TABLE IF NOT EXISTS security (
    guild_id TEXT,
    role_id TEXT,
    PRIMARY KEY (guild_id)
);

CREATE TABLE IF NOT EXISTS guild_settings (
    guild_id TEXT,
    key TEXT,
    value TEXT,
    PRIMARY KEY (guild_id, key)
);

-- POINTS TABLE
CREATE TABLE IF NOT EXISTS points (
    user_id TEXT,
    guild_id TEXT,
    points INTEGER,
    lifetime_points INTEGER,
    PRIMARY KEY (user_id, guild_id)
);

CREATE TABLE IF NOT EXISTS transactions (
    user_id TEXT,
    guild_id TEXT,
    points INTEGER,
    transacted_by TEXT,
    timestamp INTEGER
);

-- VOICE CALL TIME TABLES
CREATE TABLE IF NOT EXISTS cumulative_call_time (
    user_id TEXT,
    guild_id TEXT,
    seconds INTEGER,
    PRIMARY KEY (user_id, guild_id)
);

CREATE TABLE IF NOT EXISTS call_time (
    user_id TEXT,
    channel_id TEXT,
    timestamp INTEGER,
    PRIMARY KEY (user_id)
);
