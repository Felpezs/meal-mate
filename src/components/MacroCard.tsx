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
    <div className="max-w-[200px] flex-grow rounded-xl bg-surface-foreground p-4">
      <h3 className="text-sm">{macroName}</h3>
      <p className="text-lg font-extrabold">{percentage}%</p>
      <p className="text-sm">
        {value} of {maxValue}g
      </p>
    </div>
  );
};

export default MacroCard;
