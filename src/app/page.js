import LandingPage from "@/components/LandingPage";
import { SessionProvider } from "next-auth/react";

export default function Home({
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <LandingPage />
    </SessionProvider>
  );
}
