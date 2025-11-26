import type { ReactNode } from "react";
import { Info } from "lucide-react";

interface InfoCardProps {
  children: ReactNode;
  icon?: ReactNode;
}

export const InfoCard = ({ children, icon }: InfoCardProps) => {
  return (
    <div className="bg-muted rounded-2xl p-4 mb-6 border-2 border-secondary/20">
      <div className="flex gap-2">
        {icon || <Info className="w-5 h-5 text-secondary shrink-0 mt-1" />}
        <div className="text-sm text-primary text-justify">{children}</div>
      </div>
    </div>
  );
};