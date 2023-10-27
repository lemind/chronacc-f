
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.gql",
  generates: {
    "../front/generated-types.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  }
};

export default config;
