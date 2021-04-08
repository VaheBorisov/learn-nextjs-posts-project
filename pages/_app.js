import NextNProgress from "nextjs-progressbar";
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps}) {

    return (
        <>
            <NextNProgress
                color="yellow"
                startPosition="0.3"
                stopDelayMs="200"
                height="3"
            />
            <Component {...pageProps}/>
        </>
    )
};