import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { requireUser } from "~/session/guards.server";

export const loader = async ({ request }: LoaderArgs) => {
    const user = await requireUser(request);
  return null;
}

export default function RouteComponent(){
    const data = useLoaderData<typeof loader>();
    return (
        <div />
    )
}
