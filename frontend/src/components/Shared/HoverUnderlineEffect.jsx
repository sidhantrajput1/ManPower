function underline() {
  return (
    <div className=" group">
      <div className="cursor-pointer">Home</div>
      <div className="border-b-4 w-12 h-2 transition-transform duration-300 transform  scale-x-0 border-red-300 group-hover:scale-x-100 origin-left"></div>
    </div>
  );
}

export default underline;
