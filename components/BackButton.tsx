export function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="flex gap-1 justify-center items-center p-2 text-xl hover:unverline text-blue-500 font-bold"
      onClick={onClick}
    >
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      <span>Back to Jobs</span>
    </button>
  );
}
