const CVContact = ({
  title,
  detail,
  className,
  href,
}: {
  title?: string;
  detail: string;
  className?: string;
  href: string;
}) => {
  return (
    <div className={`flex mb-1 ${className}`}>
      {title && <p className="font-semibold">{title}: </p>}
      <a
        href={href}
        target="_blank"
        className="ml-2 border-b-2 hover:cursor-pointer hover:border-b-gray-400 delay-100 transition-opacity"
      >
        {detail}
      </a>
    </div>
  );
};

export default CVContact;
