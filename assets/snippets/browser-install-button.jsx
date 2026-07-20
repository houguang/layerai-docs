export const BrowserInstallButton = ({
  href,
  icon,
  name,
  storeLabel = "Web Store",
  comingSoon = false,
}) => {
  const label = comingSoon ? "Coming soon" : storeLabel;
  const className = comingSoon
    ? "inline-flex cursor-not-allowed items-center gap-2.5 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-zinc-400 no-underline dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-500"
    : "inline-flex items-center gap-2.5 rounded-full border border-zinc-300 bg-white px-4 py-2 text-zinc-900 no-underline transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-500 dark:bg-black dark:text-white dark:hover:border-zinc-400 dark:hover:bg-zinc-950";

  const content = (
    <>
      <img
        src={icon}
        alt=""
        className={`h-5 w-5 shrink-0 object-contain${comingSoon ? " opacity-50 grayscale" : ""}`}
      />
      <span className="flex items-baseline gap-1 whitespace-nowrap text-sm leading-none">
        <span className="font-medium lowercase tracking-tight">{name}</span>
        <span className="font-normal">{label}</span>
      </span>
    </>
  );

  if (comingSoon) {
    return (
      <span className={className} aria-disabled="true" title="Coming soon">
        {content}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  );
};

export const BrowserInstallButtonGroup = ({ children }) => (
  <div className="not-prose my-4 flex flex-wrap items-center gap-3">{children}</div>
);
