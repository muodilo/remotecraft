import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function PageTransitionLoader() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const start = () => setBusy(true);
    const done  = () => setBusy(false);

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", done);
    router.events.on("routeChangeError", done);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", done);
      router.events.off("routeChangeError", done);
    };
  }, [router]);

  return busy ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80">
      <Loading />
    </div>
  ) : null;
}