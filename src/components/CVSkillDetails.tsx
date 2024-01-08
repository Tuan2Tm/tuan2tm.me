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
      {skillTitle && <p className="font-semibold">{skillTitle}</p>}
      <p className="ml-1">{skillDetail}</p>
    </div>
  );
};

export default CVSkillDetail;
