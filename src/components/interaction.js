import React, { useState } from "react"
import { DisplayResult } from "./displayResult"
import * as styles from "../components/index.module.css"
import { getProduct } from "../service/product"

export const Interaction = () => {
  const [productId, setProductId] = useState()
  const [productDesc, setProductDesc] = useState()
  console.log(productDesc)

  return (
    <div className={styles.textCenter}>
      <h1>
        Welcome to <b>AI Don't Lie!</b>
      </h1>
      <p className={styles.intro}>
        Enter your 7 digit product code to retrieve the new AI generated product
        description.
        <br />
        <form>
          <label for="product code">Product Code:</label>
          <input
            type="text"
            id="product_code"
            name="product_code_number"
            value={productId}
            onChange={e => setProductId(e.target.value)}
          />
          <br />
          <button
            type="button"
            onClick={() => setProductDesc(getProduct(productId))}
          >
            Get ChatGPT Response
          </button>
          <DisplayResult responseData={productDesc} />
        </form>
      </p>
    </div>
  )
}
