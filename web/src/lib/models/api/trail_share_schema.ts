import { z, ZodType } from "zod";
import type { TrailShare } from "../trail_share";

const TrailShareCreateSchema = z.object({
    actor: z.string().url(),
    trail: z.string().length(15),
    permission: z.enum(["view", "edit"])

}) satisfies ZodType<TrailShare>

const TrailShareUpdateSchema = z.object({
    permission: z.enum(["view", "edit"])
}) satisfies ZodType<Partial<TrailShare>>


export { TrailShareCreateSchema, TrailShareUpdateSchema };
