import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type PageTemplateProps<T extends ElementType> = {
  as?: T;
  className?: string;
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export default function PageTemplate<T extends ElementType = "section">({
  as,
  className,
  eyebrow,
  title,
  subtitle,
  children,
  ...rest
}: PageTemplateProps<T>) {
  const Root = (as || "section") as ElementType;
  const rootClassName = ["page", className].filter(Boolean).join(" ");

  return (
    <Root className={rootClassName} {...rest}>
      <header className="pageHeader">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </header>
      {children}
    </Root>
  );
}
