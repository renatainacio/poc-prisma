import { Error } from "@/protocols/error";

export function invalidFormatError(entity = "data"): Error {
    return {
        type: "invalidFormat",
        message: `Invalid ${entity} format!`
    }
}