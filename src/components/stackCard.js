import React from 'react';

const StackCard = ({ title, icon, className }) => {
    return (
      <div className={` w-full h-[18%] default-styles-for-card  ${className}`}>
    <div className="w-full h-full rounded-xl bg-[#181c20] stack-item">
      <div className="flex items-center w-full h-full">
        <div className="pl-5 pr-10">
          {icon}
        </div>
        <div className="text-3xl text-white font-leagueGothic">
          {title}
        </div>
      </div>
    </div>
    </div>
  );
};

export default StackCard;
