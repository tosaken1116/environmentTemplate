import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_BACKEND_URL,
});

const wsLink =
    typeof window !== "undefined"
        ? new GraphQLWsLink(
              createClient({
                  url: process.env.NEXT_PUBLIC_BACKEND_WS_URL!,
              })
          )
        : httpLink;
export const createApolloClient = () => {
    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: wsLink,

        cache: new InMemoryCache(),
    });
};
