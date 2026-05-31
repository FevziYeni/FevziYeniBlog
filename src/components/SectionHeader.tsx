type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-black tracking-tight sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}
