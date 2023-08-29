// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
}));

export default makeSource({ contentDirPath: "content", documentTypes: [Blog] });
