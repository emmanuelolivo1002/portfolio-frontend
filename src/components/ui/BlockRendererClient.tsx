"use client";
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";

export default function BlockRendererClient({ content }: { readonly content: BlocksContent }) {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        list: ({ children }) => <ul className="list-disc list-outside space-y-1">{children}</ul>,
      }}
    />
  );
}
