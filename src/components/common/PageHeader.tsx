import type { PageHeaderProps } from "@/types/props";

export const PageHeader = ({ icon: Icon, title, iconSize = "md" }: PageHeaderProps) => {
  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8 sm:w-10 sm:h-10",
    lg: "w-10 h-10 sm:w-12 sm:h-12",
  };

  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      <Icon className={`${iconSizes[iconSize]} text-primary`} />
      <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center">
        {title}
      </h2>
    </div>
  );
};