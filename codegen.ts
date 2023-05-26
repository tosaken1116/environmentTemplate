import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: process.env.NEXT_PUBLIC_BACKEND_URL,
    documents: "src/graphql/**/*.graphql",
    generates: {
        "src/generates/graphql.ts": {
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-react-apollo",
            ],
            config: {
                withHooks: true,
                withComponent: false,
                scalars: {
                    timestamptz: "string",
                    uuid: "string",
                },
            },
        },
    },
};

export default config;
