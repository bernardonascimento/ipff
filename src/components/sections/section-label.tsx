import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index: string;
  children: React.ReactNode;
  light?: boolean;
  className?: string;
};

/**
 * Eyebrow editorial: número de seção + filete dourado + rótulo em versalete.
 * Evoca a tipografia de um boletim/liturgia impressa.
 */
export function SectionLabel({
  index,
  children,
  light = false,
  className,
}: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "font-heading text-sm tabular-nums",
          light ? "text-accent" : "text-accent",
        )}
      >
        {index}
      </span>
      <span className="h-px w-8 bg-accent/70" />
      <span
        className={cn(
          "text-xs font-medium uppercase tracking-[0.22em]",
          light ? "text-primary-foreground/70" : "text-muted-foreground",
        )}
      >
        {children}
      </span>
    </div>
  );
}
