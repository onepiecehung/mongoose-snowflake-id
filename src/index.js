"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodejs_snowflake_1 = require("nodejs-snowflake");
function snowflakeId(schema, options) {
    const field = options?.field || "snowflakeId";
    const obj = {};
    options?.type ? (obj[`${field}`] = "number") : (obj[`${field}`] = "string");
    const machineId = options?.machineId || 112;
    const customEpoch = options?.customEpoch || new Date().getTime() / 1000;
    schema.add(obj);
    schema.pre("save", function (next) {
        this[`${field}`] = new nodejs_snowflake_1.UniqueID({
            machineID: machineId,
            customEpoch: customEpoch,
        }).getUniqueID();
        next();
    });
    /**
     * Create index
     */
    const index = {};
    index[`${field}`] = 1;
    schema.index(index);
}
exports.default = snowflakeId;
