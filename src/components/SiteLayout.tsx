import { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function SiteLayout({ children, hideFooter }: { children: ReactNode; hideFooter?: boolean }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      {!hideFooter && <SiteFooter />}
    </div>
  );
}
