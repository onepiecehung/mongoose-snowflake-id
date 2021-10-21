# Snowflake ID auto-generating plugin

<div align="center">
  <p>
    <a href="https://nodei.co/npm/mongoose-snowflake-id
/"><img src="https://nodei.co/npm/mongoose-snowflake-id.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>

### Discord: https://discord.gg/TfG5hep

## Usage

Once you have the plugin installed it is very simple to use. Just pass `mongoose-snowflake-id` to the plugin() function on your schema.

```ts
import snowflakeId from "mongoose-snowflake-id";

const BookSchema = new mongoose.Schema({
    title: String,
    genre: String,
    publishDate: Date,
});

BookSchema.plugin(snowflakeId);
```

#### This plugin will create a new field with name `snowflakeId`

Want a field other than `snowflakeId` or replace `_id`?

```ts
BookSchema.plugin(snowflakeId, {
    field: "_id",
});
```

### Options

```ts
BookSchema.plugin(snowflakeId, {
    field: "snowflakeId", // Defaults to snowflakeId
    customEpoch: 1546300800000, // Defaults to the current time. This is UNIX timestamp in ms
    machineId: 112, // A value ranging between 0 - 4095. Defaults to 112
    type: true, // Defaults to true. If set to false, defaults to number
});
```

### Configuration

-   **field**: string; // Defaults to snowflakeId

UniqueID constructor takes in the following configuration

-   **customEpoch**: number; // Defaults to the current time. This is UNIX timestamp in ms, EX: 1546300800000 (01-01-2019) , (config for SnowflakeId)
-   **machineId**: number; // A value ranging between 0 - 4095. Defaults to 112 (config for SnowflakeId)
-   **type**: Boolean; // Defaults to true. If set to false, defaults to number (type of field)

## Note

This note copy from https://github.com/utkarsh-pro/nodejs-snowflake

Snowflake ID auto-generating is a fast and reliable way to generate time sortable 64-bit ids written for distributed systems. The main id generation function is written in C++ using N-API which makes the process of id generation extremely fast. The usage of C++ for id generation also guarantees that the generated number will be of size 64 bits.
