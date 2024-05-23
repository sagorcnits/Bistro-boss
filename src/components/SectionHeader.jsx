const SectionHeader = ({info}) => {
  return (
    <div className="md:w-[400px] mx-auto text-center space-y-2 font-inter">
      <p className="text-paragraphColor">---{info.title}---</p>
      <div className="py-4 border-y-[4px]">
        <h1 className="text-4xl">{info.heading}</h1>
      </div>
    </div>
  );
};

export default SectionHeader;
