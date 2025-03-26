import React from "react";

type QuestionSectionProps = {
  question: string;
};

const QuestionSection: React.FC<QuestionSectionProps> = ({ question }) => {
  return (
    <div
      className="mb-4 bg-gradient-to-br from-[#d49258] to-[#8c4f23] px-6 py-3 text-white text-3xl font-bold"
      style={{ boxShadow: "-1px -1px 0px 3px #924C24" }}
    >
      {question}
    </div>
  );
};
export default QuestionSection;
