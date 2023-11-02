import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "http://localhost:3001/graphql",
  documents: ["./**/*.{ts,tsx}"],
  generates: {
    "./__generated__/": {
      plugins: ["typescript-resolvers"],
      preset: "client",
      overwrite: true,
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
