import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  showBackLink?: boolean;
}

export const PageLayout = ({ children }: Props) => {
  return (
    <div style={{ fontFamily: "system-ui", background: "#fff" }}>
      <main>{children}</main>
    </div>
  );
};
