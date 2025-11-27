import { cn } from "@/lib/utils";
import type { UnitToggleProps } from "@/types/props";
import { Button } from "@/components/ui/button";
import { SUPPORTED_UNITS } from "@/constants";

const UnitToggle = ({ unit, onUnitChange }: UnitToggleProps) => {
  return (
    <div 
      className="flex gap-2 justify-center"
      role="group"
      aria-label="Select weight unit"
    >
      {SUPPORTED_UNITS.map((u) => (
        <Button
          key={u}
          onClick={() => onUnitChange(u)}
          className={cn(
            "px-4 py-2 rounded-full font-bold transition-smooth text-sm sm:text-base",
            unit === u
              ? "bg-secondary text-secondary-foreground"
              : "bg-card text-card-foreground hover:bg-muted"
          )}
          aria-pressed={unit === u}
          aria-label={`Select ${u} as weight unit`}
        >
          {u}
        </Button>
      ))}
    </div>
  );
};

export default UnitToggle;