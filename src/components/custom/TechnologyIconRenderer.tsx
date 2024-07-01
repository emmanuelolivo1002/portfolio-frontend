import { cn } from "@/lib/utils";

// Types
import { Technology } from "@/types/projectTypes";

const ICON_MAP = {
  default: "iconify mdi--code",
  nextjs: "iconify file-icons--nextjs",
  bootstrap: "iconify fa-brands--bootstrap",
  capacitor: "iconify ion--logo-capacitor",
  css: "iconify fa-brands--css3-alt",
  figma: "iconify hugeicons--figma",
  html: "iconify fa-brands--html5",
  java: "iconify hugeicons--java",
  javascript: "iconify fa-brands--js",
  jquery: "iconify mdi--jquery",
  react: "iconify fa-brands--react",
  typescript: "iconify akar-icons--typescript-fill",
  mongodb: "iconify devicon-plain--mongodb",
  nodeJs: "iconify mdi--nodejs",
  tailwind: "iconify mdi--tailwind",
  mysql: "iconify grommet-icons--mysql",
  php: "iconify mdi--language-php",
  swift: "iconify fa-brands--swift",
  wordpress: "iconify fa-brands--wordpress-simple",
};

const TechnologyIconRenderer = ({
  iconKey,
  className,
}: {
  iconKey: Technology["iconKey"];
  className: string | null;
}) => {
  const finalIcon =
    ICON_MAP[iconKey as keyof typeof ICON_MAP] || ICON_MAP.default;

  return <span className={cn(finalIcon, className)}></span>;
};

export default TechnologyIconRenderer;
