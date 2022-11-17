import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
    const [count, setCount] = useState(0);
    return (
        <div className={styles.container}>
            <Head>
                <title>TypeScript starter for Next.js</title>
                <meta
                    name="description"
                    content="TypeScript starter for Next.js that includes all you need to build amazing apps"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <button onClick={() => setCount(count + 1)}>
                    Clicked {count} time{count === 1 ? "" : `s`}
                </button>
            </main>
        </div>
    );
}
