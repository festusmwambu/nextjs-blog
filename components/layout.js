import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Hello, I'm Festus. I'm a Full Stack Web Developer, a Technical Writer, a Trainer & Educator, and a Mentor. You can contact me on <a href="https://twitter.com/Festus_Mwambu">Twitter</a>.]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
        </Layout>
    );
}