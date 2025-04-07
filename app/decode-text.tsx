"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function DecodeText() {
  const [inputText, setInputText] = useState("")
  const [decodedText, setDecodedText] = useState("")

  const decodeInvisibleText = () => {
    // Remove various invisible characters
    const result = inputText
      .replace(/[\u200B-\u200D\uFEFF\u2060-\u2064]/g, "") // Remove zero-width characters
      .replace(/[\u0300-\u036F]/g, "") // Remove combining diacritical marks

    setDecodedText(result)
  }

  return (
    <div className="space-y-4">
      <Textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Paste invisible text here to decode..."
        className="min-h-[100px]"
      />

      <Button onClick={decodeInvisibleText} className="w-full">
        Decode Invisible Text
      </Button>

      {decodedText && (
        <div className="mt-6 space-y-2">
          <h3 className="font-medium">Decoded text:</h3>
          <div className="p-4 border rounded-md bg-gray-50 min-h-[60px]">{decodedText}</div>
        </div>
      )}
    </div>
  )
}

