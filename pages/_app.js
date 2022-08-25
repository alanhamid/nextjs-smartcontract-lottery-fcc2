import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider
            serverUrl={process.env.MORALIS_RPC_URL}
            appId={process.env.MORALIS_APP_ID}
        >
            <NotificationProvider>
                <Component {...pageProps} />
            </NotificationProvider>
        </MoralisProvider>
    )
}

export default MyApp
