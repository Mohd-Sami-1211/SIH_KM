
import clsx from "clsx";

// Dropdown Menu Component
export function DropdownMenu({ children }) {
  return <div className="relative">{children}</div>;
}

// Dropdown Trigger
export function DropdownMenuTrigger({ children, asChild = false, onClick }) {
  const ChildComponent = asChild ? "div" : "button";
  return (
    <ChildComponent onClick={onClick} className="cursor-pointer flex items-center">
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </ChildComponent>
  );
}

// Dropdown Content
export function DropdownMenuContent({ align = "left", children, isOpen }) {
  const alignmentClasses = align === "end" ? "right-0" : "left-0";
  return (
    isOpen && (
      <div
        className={clsx(
          "absolute mt-2 w-48 bg-white shadow-md rounded-md z-10",
          alignmentClasses
        )}
      >
        {children}
      </div>
    )
  );
}

// Dropdown Item
export function DropdownMenuItem({ children }) {
  return (
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
      {children}
    </div>
  );
}