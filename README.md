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
