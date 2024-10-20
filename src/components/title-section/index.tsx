type DescriptionTitleSection = {
  text: string,
  highlighted: boolean,
};

interface TitleSectionProps {
  title: string;
  description: DescriptionTitleSection[];
}

export function TitleSection({ title, description }: TitleSectionProps) {
  return (
    <div className="flex justify-between items-center px-2 py-10 md:py-20 md:px-10">
      <div className="">
        <h2 className="text-2xl md:text-7xl font-bold text-text">{title}</h2>
        <p className="text-[14px] text-pretty md:text-xl text-text-100 md:mt-2 md:pl-2 font-medium">
          {description.map(({ text, highlighted }) => (
            !highlighted ? text : <span className="text-action">{ ` ${text} ` }</span>
          ))}
        </p>
      </div>
      {/* <p className="text-sm md:text-xl text-action">
        {link.text}
        ...
      </p> */}
    </div>
  );
}
