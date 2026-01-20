export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const pages = [1, 2, 3, "...", totalPages].filter(
    (v, i, a) => a.indexOf(v) === i && v <= totalPages
  );

  return (
  <div className="flex items-center gap-3 bg-[#faf7f2] px-4 py-2 rounded-xl shadow-md">
  {/* Back */}
  <button
    onClick={() => onPageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className="flex items-center gap-1 text-sm text-[#3a1704]
               hover:text-[#7b4b2a] disabled:opacity-40"
  >
    <span className="text-lg">‹</span> Back
  </button>

  {/* Pages */}
  <div className="flex items-center gap-2">
    {pages.map((page, index) =>
      page === "..." ? (
        <span key={index} className="px-2 text-[#7b4b2a]">
          …
        </span>
      ) : (
        <button
          key={index}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 rounded-lg text-sm font-medium flex items-center justify-center
            ${
              currentPage === page
                ? "bg-[#5b3523] text-white"
                : "bg-[#faf4ee] text-[#3a1704] hover:bg-[#c08a5a]"
            }`}
        >
          {page}
        </button>
      )
    )}
  </div>

  {/* Next */}
  <button
    onClick={() => onPageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="flex items-center gap-1 text-sm text-[#3a1704]
               hover:text-[#7b4b2a] disabled:opacity-40"
  >
    Next <span className="text-lg">›</span>
  </button>
</div>

  );
}
