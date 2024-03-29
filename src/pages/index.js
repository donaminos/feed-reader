import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>FeedReader</title>
        <meta name="description" content="Your feed reader" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>FeedReader</h1>
      </header>
      <main className="main">
       <p>Content...</p>
      </main>
    </>
  );
}
