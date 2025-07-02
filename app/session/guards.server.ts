import { redirect } from "@remix-run/node";
import { getUserIdFromSession } from "./session.server";
import { getUser } from "~/models/user.server";

export const requireUser = async (request: Request) => {
    const userId = await getUserIdFromSession(request);
    if (!userId) {
        throw redirect("/login");
    }
    const user = await getUser(userId);
    if(!user) {
        throw redirect("/login");
    }
    return user;
}
