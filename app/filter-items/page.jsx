import FilterItemFirstCard from "@/Components/filter-items/FilterItemFirstCard";
import FilterWrapper from "@/Components/filter-items/FilterWrapper";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <FilterItemFirstCard />
      <div className="w-full flex flex-col gap-10 px-[clamp(1rem,6vw,5rem)] py-2 mt-7">
        <FilterWrapper />
      </div>
    </div>
  );
};

export default page;
