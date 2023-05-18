import React from "react"
import { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export const DisplayResult = ({ caption, responseData, showButton }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyClick = async text => {
    return navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div style={{ marginTop: "8px" }}>
      <span>{caption}: </span>
      <Form.Control
        as="textarea"
        type="text"
        value={responseData}
        style={{ height: "100px", backgroundColor: "#e5e5e5" }}
      />
      <br />
      {showButton && (
        <>
          <Button
            type="button"
            onClick={() => handleCopyClick(responseData)}
            style={{ backgroundColor: "#7b028e", color: "white" }}
          >
            <span>{isCopied ? "Copied!" : "Copy"}</span>
          </Button>
        </>
      )}
    </div>
  )
}
