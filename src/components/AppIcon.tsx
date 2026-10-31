interface IconProps {
  name: string;
  className?: string;
}

export function AppIcon({ name, className = "w-5 h-5" }: IconProps) {
  const iconPath = `/assets/icons/${name}.svg`;

  return (
    <span
      className={`inline-block bg-current shrink-0 ${className}`}
      style={{
        maskImage: `url('${iconPath}')`,
        WebkitMaskImage: `url('${iconPath}')`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
      aria-hidden="true"
    />
  );
}

