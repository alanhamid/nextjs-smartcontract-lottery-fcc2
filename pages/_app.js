import { MoralisProvider } from "react-moralis"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider
            appId="process.env.MORALIS_APP_ID"
            serverUrl="process.env.MORALIS_RPC_RPC_URL"
        >
            <Component {...pageProps} />
        </MoralisProvider>
    )
}

export default MyApp
