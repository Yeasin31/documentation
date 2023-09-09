import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import AddSearch from "../../components/addSearch"
import { Navbar, NavMenu } from "@pantheon-systems/pds-toolkit-react"

import "./style.css"

const mainNavigationLinks = [
  {
    label: "Documentation",
    links: [
      {
        linkContent: (
          <Link id="get-started" to="/get-started">
            Get Started
          </Link>
        ),
      },
      {
        linkContent: (
          <Link id="develop" to="/develop">
            Develop
          </Link>
        ),
      },
      {
        linkContent: (
          <Link id="platform" to="/platform">
            Explore Platform Architecture
          </Link>
        ),
      },
      {
        linkContent: (
          <Link id="performance" to="/performance">
            Optimize Performance
          </Link>
        ),
      },
      {
        linkContent: (
          <Link id="manage" to="/manage">
            Manage Teams & Organizations
          </Link>
        ),
      },
      {
        linkContent: (
          <Link id="troubleshoot" to="/troubleshoot">
            Troubleshoot
          </Link>
        ),
      },
      {
        isSeparator: true,
      },
      {
        linkContent: (
          <Link id="changelogs" to="/changelog">
            Changelog
          </Link>
        ),
      },
      {
        linkContent: (
          <Link id="Glossary" to="/glossary">
            Glossary
          </Link>
        ),
      },
      {
        linkContent: (
          <Link id="terminus" to="/terminus">
            Terminus Guide
          </Link>
        ),
      },
    ],
  },
]

const navbarChildren = [
  <NavMenu
    key="1"
    slot="items-left"
    ariaLabel="Main Navigation"
    menuItems={mainNavigationLinks}
  />,
  <a
    key="2"
    slot="items-right"
    className="pds-button pds-button--navbar"
    href="https://dashboard.pantheon.io/#support"
    target="_blank"
  >
    Support
  </a>,
  <a
    key="3"
    slot="items-right"
    className="pds-button pds-button--brand-secondary"
    href="https://dashboard.pantheon.io"
    target="_blank"
  >
    Log in
  </a>,
  <a
    key="4"
    slot="items-right"
    className="pds-button pds-button--brand"
    href="https://pantheon.io/register"
    target="_blank"
  >
    Get free account
  </a>,
]

const Header = () => (
  <Navbar ariaLabel="Main navigation" children={navbarChildren} />
)

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo-pantheon-logotype.png" }) {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    `}
    render={(data) => <Header data={data} {...props} />}
  />
)
