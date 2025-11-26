import type { PageLayoutProps } from "@/types/props";

export const PageLayout = ({ children, maxWidth = "md" }: PageLayoutProps) => {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-linear-to-tr from-background via-lab-maroon to-background">
      <div className={`w-full ${maxWidthClasses[maxWidth]}`}>
        {children}
      </div>
    </div>
  );
};