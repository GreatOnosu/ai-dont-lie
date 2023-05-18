import React from "react"

export const Product = ({ responseData, imageURL }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <span>Product name: {responseData}</span>
      <br />
      {imageURL && <img src={imageURL} width="250" height="300" />}
    </div>
  )
}
