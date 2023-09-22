import { Error } from "@/protocols/error";

export function conflictError(entity = "Data"): Error {
    return {
        type: "conflict",
        message: `${entity} already registered!`
    }
}