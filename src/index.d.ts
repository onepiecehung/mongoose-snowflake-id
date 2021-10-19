import { Schema } from "mongoose";
declare type TOptions = {
    field: string;
    customEpoch: number;
    machineId: number;
    type: Boolean;
};
export default function snowflakeId(schema: Schema, options: TOptions): void;
export {};
