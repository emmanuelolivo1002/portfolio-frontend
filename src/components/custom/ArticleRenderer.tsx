"use client";

// Components
import BlockRendererClient from "./BlockRendererClient";

// Utils
import { cn } from "@/lib/utils";

// Types
import { BlocksContent } from "@strapi/blocks-react-renderer";

const ArticleRenderer = ({
  content,
  className,
}: {
  className: string | undefined;
  readonly content: BlocksContent;
}) => {
  return (
    <article className={cn("prose prose-invert", className)}>
      <BlockRendererClient content={content} />
    </article>
  );
};

export default ArticleRenderer;
