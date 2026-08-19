export function MaterialIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined shrink-0 leading-none ${className}`}
    >
      {name}
    </span>
  );
}