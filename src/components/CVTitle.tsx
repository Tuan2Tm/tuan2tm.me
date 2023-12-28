const CVTitle = ({ title }: { title: string }) => {
  return (
    <div className="w-full">
      <p className="text-xl font-semibold ">{title.toUpperCase()}</p>
      <div className="w-full h-[3px] bg-gray-400/20"></div>
      <div className="pt-2">
        <slot />
      </div>
    </div>
  );
};

export default CVTitle;
