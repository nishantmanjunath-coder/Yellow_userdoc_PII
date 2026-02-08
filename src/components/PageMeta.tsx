import { Clock, Calendar } from "lucide-react";

interface Props {
  category: string;
  readTime: string;
  updatedDate: string;
}

export const PageMeta = ({ category, readTime, updatedDate }: Props) => {
  return (
    <div className="flex items-center gap-4 mt-4 mb-6 flex-wrap">

      {/* TAG */}
      <span className="px-3 py-1 rounded-full bg-[#FFFF00]/45 text-black text-xs font-medium">
        {category}
      </span>

      {/* TIME */}
      <div className="flex items-center gap-1 text-sm text-gray-500">
        <Clock size={16} />
        {readTime}
      </div>

      {/* UPDATED */}
      <div className="flex items-center gap-1 text-sm text-gray-500">
        <Calendar size={16} />
        Updated: {updatedDate}
      </div>

    </div>
  );
};
