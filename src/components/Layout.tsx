import React, { ReactNode } from "react";
import GlobalStyles from "../styles/GlobalStyles";

const Layout = ({ children, ...rest }: { children: ReactNode }) => (
    <div {...rest}>
        <GlobalStyles />
        {children}
    </div>
);

export default Layout;
