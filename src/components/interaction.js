import React, { useState } from "react"
import { DisplayResult } from "./displayResult"
// import * as styles from "../components/index.module.css"
import { getProduct } from "../service/product"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Product } from "./product"

export const Interaction = () => {
  const [productId, setProductId] = useState()
  const [productName, setProductName] = useState()
  const [productImageURL, setProductImageURL] = useState()
  const [newProductDesc, setNewProductDesc] = useState()
  const [oldProductDesc, setOldProductDesc] = useState()
  const [keywords, setKeywords] = useState()
  const [showOldProductDesc, setShowOldProductDesc] = useState(false)

  const handleProductDesc = productId => {
    const responseData = getProduct(productId)
    setProductName(responseData.productName)
    setProductImageURL(responseData.imageURL)
    setNewProductDesc(responseData.descriptions.new_description)
    setOldProductDesc(responseData.descriptions.old_description)
    setKeywords(responseData.keywords)
  }

  const handleReset = () => {
    setProductId("")
    setProductName("")
    setProductImageURL("")
    setNewProductDesc("")
    setOldProductDesc("")
    setKeywords("")
    setShowOldProductDesc(false)
  }

  return (
    <Container>
      <Row>
        <Col sm={1} md={2}></Col>
        <Col sm={10} md={8}>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#7b028e", height: 50, color: "white" }}
          >
            ComplAI
          </div>

          <p className="text-center" style={{ "font-weight": "bold" }}>
            Compliant content generation tool
          </p>
          <br />
          <form>
            <label for="product code">Department and Stroke Number: </label>
            <Form.Control
              style={{ backgroundColor: "#e5e5e5" }}
              type="text"
              id="product_code"
              name="product_code_number"
              value={productId}
              onChange={e => setProductId(e.target.value)}
            />
            <br />
            <Button
              type="button"
              onClick={() => handleProductDesc(productId)}
              style={{ backgroundColor: "#7b028e", color: "white" }}
            >
              Generate
            </Button>
            {/* <div display:flex> */}
            {productName && (
              <Product responseData={productName} imageURL={productImageURL} />
            )}
            <DisplayResult
              caption="New Product Description"
              responseData={newProductDesc}
              showButton={true}
            />
            {/* </div> */}
            <br />
            {/* {oldProductDesc && (
            <Button
            style={{ backgroundColor: '#7b028e',  color: 'white', marginRight: '10px' }}
              type="button"
              onClick={() => setShowOldProductDesc(!showOldProductDesc)}
            >
              {showOldProductDesc
                ? "Hide Old Product Description"
                : "Show Old Product Description"}
            </Button>
          )} */}

            {keywords && (
              <DisplayResult
                caption="Keywords"
                responseData={keywords}
                showButton={false}
              />
            )}

            {showOldProductDesc && (
              <DisplayResult
                caption="Old Product Description"
                responseData={oldProductDesc}
                showButton={false}
              />
            )}

            <Button
              type="button"
              onClick={() => handleReset()}
              style={{ backgroundColor: "#7b028e", color: "white" }}
            >
              Reset
            </Button>
          </form>
        </Col>
        <Col sm={1} md={2}></Col>
      </Row>
    </Container>
  )
}
