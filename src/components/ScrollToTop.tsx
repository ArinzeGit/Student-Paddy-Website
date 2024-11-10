"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top when the path changes (new page load)
    window.scrollTo(0, 0);
  }, [pathname]); // Trigger on path change

  return <>{children}</>;
}
