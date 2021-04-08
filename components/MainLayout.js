import Link from 'next/link';
import Head from 'next/head';


export function MainLayout({ children, title = 'Next App' }) {

    return (
        <>
            <Head>
                <title>{title} | Learn Next</title>
                <meta charSet="utf-8" />
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
              nav {
                background: darkblue;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                height: 60px;
              }
              nav a {
                color: #fff;
              }
              main {
              padding: 1rem;
              }
            `}</style>
        </>
    )
}