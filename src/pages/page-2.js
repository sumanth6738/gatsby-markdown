import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Styles from "../../Style/articles.module.scss"
import {
  Col, Row,
  Card,
} from "react-bootstrap";
const Blog = () => {
  const data = useStaticQuery(graphql`{
        allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            date
                        }
                        html
                        timeToRead
                        excerpt
                        fields{
                            slug
                        }
                    }
                }
            }

        }
    `)
  return (
    <Layout>
      <SEO title="Movie articles" />
      <Row>
        {
          data.allMarkdownRemark.edges.map((item, i) => {
            const { title, date } = item.node.frontmatter
            return (
              <Col xs={12} sm={6} md={4} key={i} >
                <Card style={{ minHeight: 200, marginTop: "20px" }}>
                  <Card.Body>
                    <Card.Title>
                      <h2 className={Styles.title}><Link to={`/${item.node.fields.slug}/`}>{title}</Link></h2>
                    </Card.Title>
                    <div className={Styles.info_container}>
                      <p className={Styles.info}>{date}</p>
                      <p className={Styles.info}>{item.node.timeToRead} mins read</p>
                    </div>
                  </Card.Body>

                </Card>
              </Col>
            )
          })
        }
      </Row>

    </Layout>
  )
}

export default Blog
