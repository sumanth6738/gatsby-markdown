import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `20px 100px`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h5 style={{ margin: 0 }}>
        <Link
          to="/page-2"
          style={{
            color: `white`,
            textDecoration: `none`,
            verticalAlign: "sub",
          }}
        >
          Blog
        </Link>
      </h5>
    </div>
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
