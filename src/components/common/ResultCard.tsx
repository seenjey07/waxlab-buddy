import type { LucideIcon } from "lucide-react";

interface ResultCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle?: string;
  variant?: "default" | "highlight";
}

export const ResultCard = ({
  icon: Icon,
  title,
  value,
  subtitle,
  variant = "default",
}: ResultCardProps) => {
  const variantClasses = {
    default: "bg-muted rounded-2xl p-4 sm:p-5 border-2 border-primary/20",
    highlight: "bg-secondary/10 rounded-2xl p-4 sm:p-5 border-2 border-secondary",
  };

  return (
    <div className={variantClasses[variant]}>
      <div className="flex items-center gap-3 mb-1">
        <Icon className="w-6 h-6 text-primary" />
        <h3 className="text-lg font-bold text-primary">{title}</h3>
        {subtitle && (
          <span className="text-lg font-bold text-muted-foreground">
            {subtitle}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-accent ml-9">{value}</p>
    </div>
  );
};