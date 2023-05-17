import React from "react"
import { useState } from "react"

export const DisplayResult = ({ responseData }) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyTextToClipboard = async ({ text }) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand("copy", true, text)
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(responseData)
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
    <div>
      <textarea type="text" value={responseData} readOnly />
      <button onClick={handleCopyClick}>
        <span>{isCopied ? "Copied!" : "Copy"}</span>
      </button>
    </div>
  )
}
