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

### Option

```ts
BookSchema.plugin(snowflakeId, {
    field: "snowflakeId"; // Defaults to snowflakeId
    customEpoch: 1546300800000; // Defaults to the current time. This is UNIX timestamp in ms
    machineId: 112; // A value ranging between 0 - 4095. Defaults to 112
    type: true; // Defaults to true. If set to false, defaults to number
});
```

Config

-   **field**: string; // Defaults to snowflakeId
-   **customEpoch**: number; // Defaults to the current time. This is UNIX timestamp in ms, EX: 1546300800000 (01-01-2019)
-   **machineId**: number; // A value ranging between 0 - 4095. Defaults to 112
-   **type**: Boolean; // Defaults to true. If set to false, defaults to number
