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

-- Add setting_types table
CREATE TABLE IF NOT EXISTS setting_types (
    key TEXT,
    value_type TEXT,
    PRIMARY KEY (key)
);