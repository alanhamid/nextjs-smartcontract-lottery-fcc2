import Head from "next/head"
import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
import { MoralisProvider, useMoralis } from "react-moralis"
const supportedChains = ["31337", "4"]

export default function Home() {
    const { isWeb3Enabled, chainId } = (
        <MoralisProvider
            appId="process.env.MORALIS_APP_ID"
            serverUrl="process.env.MORALIS_RPC_RPC_URL"
        >
            useMoralis()
        </MoralisProvider>
    )

    return (
        <div className={styles.container}>
            <Head>
                <title>Casino Royal</title>
                <meta name="description" content="" />
                <link rel="icon" href="image/cbrlogo.svg" />
            </Head>
            <Header />
            {isWeb3Enabled ? (
                <div>
                    {supportedChains.includes(parseInt(chainId).toString()) ? (
                        <div className="flex flex-row">
                            <LotteryEntrance className="p-8" />
                        </div>
                    ) : (
                        <div>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
                    )}
                </div>
            ) : (
                <div>Please connect to a Wallet</div>
            )}
        </div>
    )
}
