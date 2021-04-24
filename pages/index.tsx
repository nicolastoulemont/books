import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Test technique Impala </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button
          onClick={() => {
            window.alert('With typescript and Jest')
          }}
        >
          Test Button
        </button>
      </main>
    </>
  )
}
