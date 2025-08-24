export default function Chip({ active, icon: Icon, label, onClick }) {
  return (
    <button
      className={`cursor-pointer
        flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
        ${
          active
            ? "bg-green-600 text-white"
            : "border-2 border-green-600 text-green-600 bg-transparent hover:bg-green-50"
        }
      `}
      onClick={onClick}
    >
      {Icon && <Icon />}
      <span>{label}</span>
    </button>
  );
}
