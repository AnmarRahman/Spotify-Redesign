import Dashboard from "../components/Dashboard.jsx";
import Head from "next/head";

export default function Home() {
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
