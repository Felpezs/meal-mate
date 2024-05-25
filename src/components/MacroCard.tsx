const MacroCard = ({
  macroName,
  percentage,
  value,
  maxValue,
}: {
  macroName: string;
  percentage: number;
  value: number;
  maxValue: number;
}) => {
  return (
    <div className="shadow-card max-w-[200px] flex-grow rounded-xl bg-surface-light p-4 dark:bg-surface-foreground dark:shadow-none">
      <h3 className="text-sm">{macroName}</h3>
      <p className="text-lg font-extrabold">{percentage}%</p>
      <p className="text-sm">
        {value} of {maxValue}g
      </p>
    </div>
  );
};

export default MacroCard;
