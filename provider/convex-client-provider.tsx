
"use client";

import{ClerkProvider,useAuth} from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading,Authenticated,ConvexReactClient } from "convex/react";
import Spinner from "@/components/global/Spinner";

interface ConvexProviderWithClerk{
    children:React.ReactNode; // it's working as a layout but this can't be seen as layout
};
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);
export default function ConvexClientProvider({children}:ConvexProviderWithClerk){

    return(
        <ClerkProvider>
            <ConvexProviderWithClerk useAuth = {useAuth} client={convex}>
            <Authenticated>{children}</Authenticated>
            <AuthLoading>
                <Spinner className="h-screen grid place-items-center" />
            </AuthLoading>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}