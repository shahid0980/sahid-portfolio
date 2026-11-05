
import React from "react";

interface FormattedTextProps {
  content: string;
  className?: string;
}

const FormattedText: React.FC<FormattedTextProps> = ({
  content,
  className = "",
}) => {

  const renderBold = (text: string) => {
    return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-bold text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }

      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return (
    <div className={`text-gray-300 leading-7 ${className}`}>
      {content.split("\n").map((line, index) => {

        // Bullet points
        if (/^\s*\*\s+/.test(line)) {
          return (
            <div key={index} className="flex items-start gap-2 mb-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span className="flex-1">
                {renderBold(line.replace(/^\s*\*\s+/, ""))}
              </span>
            </div>
          );
        }

        // Empty lines
        if (!line.trim()) {
          return <div key={index} className="h-2" />;
        }

        // Normal text
        return (
          <p key={index} className="mb-2">
            {renderBold(line)}
          </p>
        );
      })}
    </div>
  );
};

export default FormattedText;