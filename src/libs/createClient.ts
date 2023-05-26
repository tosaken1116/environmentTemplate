import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const createApolloClient = () => {
    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: new HttpLink({
            uri: process.env.NEXT_PUBLIC_BACKEND_URL,
        }),
        cache: new InMemoryCache(),
    });
};
