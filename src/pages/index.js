import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Card from "../components/Card"
import { NavDropdown, Form, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../../Style/movie.module.scss"

const IndexPage = ({ data }) => {
  const [activeElement, setActiveElement] = useState(null)
  const [sort, setSort] = useState("")
  const [rate, setRate] = useState(false)
  const [movies, setMovies] = useState([])
  const [show, setShow] = useState(false)
  var records = data.allSite.edges[0].node.siteMetadata.movie
  useEffect(() => {
    setMovies(records)
  }, [])

  const handleActiveElement = (index) => {
    setActiveElement(index)
    setShow(!show)
  }
  const handleClickCard = () => {
    setActiveElement(null)
  }
  const handleAphabeticalOrder = (filter) => {
    setSort(filter)
    if (filter === "asc") {
      const filteredData = records.sort((a, b) => (a.title || "").toString().localeCompare((b.title || "").toString()))
      setMovies(filteredData)
    } else {
      const filteredData = records.sort((a, b) => (b.title || "").toString().localeCompare((a.title || "").toString()))
      setMovies(filteredData)
    }
  }
  const handleRatings = (filter) => {
    setRate(filter)
    if (filter === "desc") {
      const filteredData = records.sort((a, b) => parseFloat(a.vote_average) - parseFloat(b.vote_average));
      setMovies(filteredData)
    } else {
      const filteredData = records.sort((a, b) => parseFloat(b.vote_average) - parseFloat(a.vote_average));
      setMovies(filteredData)
    }
  }
  const handleSearch = (e) => {
    var storedata = []
    const search = e.target.value.toLowerCase()
    storedata = records.filter(record => {
      if ((record.title.toLowerCase().indexOf(search) !== -1)) {
        return record
      }
    })
    setMovies(storedata)
  }


  return (
    <Layout>
      <SEO title="Home" />
      <div className={Styles.main_Container}>
        <div>
        </div>
        <div className={Styles.row_container}>
          <div className={Styles.filterrow}>
            <Form>
              <Form.Group controlId="formBasicEmail" className={Styles.search}>
                <Form.Control type="text" onChange={handleSearch} placeholder="Search ..." className={Styles.inputFilter} />
              </Form.Group>
            </Form>
          </div>
          <div >
            <NavDropdown
              title="Filter"
              className={Styles.Dropdown}
              alignRight
            >
              <p className={Styles.Dropdown_Item}>Alphabetical Order:</p>
              <Form.Group as={Row} className={Styles.type1}>
                <Col sm={12}>
                  <Form.Check
                    type="radio"
                    label="A - Z"
                    name="alphabeticalorder"
                    id="alphabeticalorder1"
                    value="asc"
                    onChange={(e) => setSort(e.target.value)}
                    checked={sort === "asc" ? true : false}
                    onClick={(e) => handleAphabeticalOrder(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    label="Z - A"
                    name="alphabeticalorder"
                    id="alphabeticalorder2"
                    value="desc"
                    checked={sort === "desc" ? true : false}
                    onChange={(e) => setSort(e.target.value)}
                    onClick={(e) => handleAphabeticalOrder(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <NavDropdown.Divider className={Styles.divider} />

              <p className={Styles.Dropdown_Item}>Ratings:</p>
              <Form.Group as={Row} className={Styles.type1}>
                <Col sm={12}>
                  <Form.Check
                    type="radio"
                    label="Highest - Lowest"
                    name="rating"
                    id="rating1"
                    value="asc"
                    checked={rate === "asc" ? true : false}
                    onChange={(e) => setRate(e.target.value)}
                    onClick={(e) => handleRatings(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    label="Lowest - Highest"
                    name="rating"
                    id="rating2"
                    value="desc"
                    checked={rate === "desc" ? true : false}
                    onChange={(e) => setRate(e.target.value)}
                    onClick={(e) => handleRatings(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <NavDropdown.Divider className={Styles.divider} />

            </NavDropdown>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {movies.map((item, index) => {
          return (
            <Card
              index={index}
              handleClickCard={handleClickCard}
              showIndex={activeElement}
              toggleIndex={index => handleActiveElement(index)}
              show={show}
              data={item}
              key={item.id}
            />
          )
        })}
      </div>
    </Layout>
  )
}


export default IndexPage

export const query = graphql`
{
  allSite {
    edges {
      node {
        siteMetadata {
          movie {
            adult
            backdrop_path
            id
            genre_ids
            original_language
            original_title
            overview
            popularity
            poster_path
            title
            release_date(formatString: "ll")
            vote_average
          }
        }
      }
    }
  }
}
`