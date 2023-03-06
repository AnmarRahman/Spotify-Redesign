import Dashboard from "../components/Dashboard.jsx";
import Head from "next/head";
import { useRouter } from "next/router.js";
import { useSession } from "next-auth/react/index.js";
import Loader from "../components/Loader.jsx";

export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession({
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Spotify Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard />
    </>
  );
}
