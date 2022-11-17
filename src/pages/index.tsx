import * as React from "react";
import "twin.macro";
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
    return (
        <Layout>
            <div tw={"pt-6 px-8"}>
                <h1 tw={"text-3xl font-bold text-center"}>Hello, world!</h1>
            </div>
        </Layout>
    );
};

export default IndexPage;
