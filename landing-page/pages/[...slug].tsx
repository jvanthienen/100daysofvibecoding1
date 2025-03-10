import Head from "next/head"
import { Layout } from "@/components/Layout"
import { GetStaticPaths, GetStaticProps } from "next"

export const getStaticPaths = (async () => {
  // For static export, we need to provide all possible paths
  return {
    paths: [
      { params: { slug: ['about'] } },
      { params: { slug: ['contact'] } },
      { params: { slug: ['blog'] } },
    ],
    fallback: false, // Use false instead of "blocking" for static export
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async ({ params }) => {
  const slug = params?.slug as string[]
  const path = slug.join("/")

  return {
    props: {
      path,
    },
  }
}) satisfies GetStaticProps<{
  path: string
}>

export default function ComingSoonPage({ path }: { path: string }) {
  return (
    <Layout>
      <Head>
        <title>Coming Soon | 100 Days of Vibe Coding</title>
        <meta
          name="description"
          content="This page is coming soon. Stay tuned for more updates."
          key="description"
        />
      </Head>
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Coming Soon</h1>
        <p className="text-xl mb-8">We&apos;re working on this page. Check back later!</p>
        <div className="text-gray-500">
          <p>Path: /{path}</p>
        </div>
      </div>
    </Layout>
  )
}
