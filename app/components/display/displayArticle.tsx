type tDisplayArticleProps = {
  label: string;
  value?: string | number;
  unit?: string;
};

export default function DisplayArticle({
  label,
  value,
  unit,
}: tDisplayArticleProps) {
  return (
    <article className="grid grid-cols-3 gap-2 pb-2 pl-2 border-b border-dotted border-slate-200">
      <span className="col-span-1 text-emerald-400 capitalize">{label}:</span>
      <span className="col-span-1  text-center text-yellow-400 capitalize">
        {value}
      </span>
      {unit && <span className="col-span-1 font-light">{unit}</span>}
    </article>
  );
}
