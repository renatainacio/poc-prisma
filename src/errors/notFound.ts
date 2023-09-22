import { Error } from "@/protocols/error";

export function notFoundError(entity = "Resource"): Error {
    return {
        type: "notFound",
        message: `${entity} not found`
    }
}