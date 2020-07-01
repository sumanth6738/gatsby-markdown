/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProvider from "./src/components/context/UserProvider"

export const wrapRootElement = ({
    element
}) => (
        <UserProvider >
            {element}
        </UserProvider>
    )
