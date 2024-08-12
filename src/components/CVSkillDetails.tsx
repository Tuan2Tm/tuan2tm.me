const CVSkillDetail = ({
  skillTitle,
  skillDetail,
  className,
}: {
  skillTitle?: string;
  skillDetail: string;
  className?: string;
}) => {
  return (
    <div className={`flex mb-1 ${className}`}>
      {skillTitle && (
        <p className="font-semibold text-nowrap">{skillTitle}: </p>
      )}
      <p className="ml-2">{skillDetail}</p>
    </div>
  );
};

export default CVSkillDetail;
