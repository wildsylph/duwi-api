-- Migration: 
-- Add cumulative_call_time table
CREATE TABLE IF NOT EXISTS cumulative_call_time (
    user_id TEXT,
    guild_id TEXT,
    seconds INTEGER,
    PRIMARY KEY (user_id, guild_id)
);

-- Add settings table
CREATE TABLE IF NOT EXISTS settings (
    guild_id TEXT,
    key TEXT,
    value TEXT,
    PRIMARY KEY (guild_id, key)
);

-- Add voice channel time
CREATE TABLE IF NOT EXISTS call_time (
    user_id TEXT,
    channel_id TEXT,
    timestamp INTEGER,
    PRIMARY KEY (user_id)
);