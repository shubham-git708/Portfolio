import Image from "next/image";
import React from "react";

interface MyComponentProps {
  items: Array<{ alt?: string; img?: any; name?: string; icon?: string }>;
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <>
      {items &&
        items.map((item, index) => {
          return (
   
            <div 
            key={index} 
            className="flex flex-col items-center justify-center gap-1.5 p-4 rounded-lg hover:bg-accent transition-colors w-20"
          >
            <img 
              src={item.icon} 
              alt={item.name} 
              className="w-14 h-14 object-contain mx-auto"
            />
            <span className="text-sm text-center font-medium text-muted-foreground">
              {item.name}
            </span>
          </div>
          );
        })}
    </>
  );
};

export default SkillsFooter;
