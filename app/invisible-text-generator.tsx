"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Copy } from "lucide-react"

export default function InvisibleTextGenerator() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [method, setMethod] = useState("zero-width")
  const [showHint, setShowHint] = useState(false)
  const [copied, setCopied] = useState(false)

  const generateInvisibleText = () => {
    let result = ""

    switch (method) {
      case "zero-width":
        // Using zero-width characters to hide text
        result = inputText
          .split("")
          .map((char) => char + "​")
          .join("")
        break
      case "color-masking":
        // Using color masking (this would be handled by CSS in real implementation)
        result = inputText
        break
      case "unicode":
        // Using various unicode invisible characters
        result = inputText
          .split("")
          .map((char) => char + "⁣")
          .join("")
        break
      case "combining":
        // Using combining characters
        result = inputText
          .split("")
          .map((char) => char + "̀")
          .join("")
        break
      default:
        result = inputText
    }

    if (showHint) {
      // Add a subtle visual hint (e.g., a zero-width space followed by a thin space)
      result = "​ " + result
    }

    setOutputText(result)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-4">
      <Textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to make invisible..."
        className="min-h-[100px]"
      />

      <div className="flex flex-wrap gap-4">
        <select value={method} onChange={(e) => setMethod(e.target.value)} className="px-3 py-2 border rounded-md">
          <option value="zero-width">Zero-width characters</option>
          <option value="color-masking">Color masking</option>
          <option value="unicode">Unicode invisible characters</option>
          <option value="combining">Combining characters</option>
        </select>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showHint}
            onChange={(e) => setShowHint(e.target.checked)}
            className="rounded"
          />
          Show visual hint
        </label>
      </div>

      <Button onClick={generateInvisibleText} className="w-full">
        Generate Invisible Text
      </Button>

      {outputText && (
        <div className="mt-6 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Your invisible text:</h3>
            <Button variant="outline" size="sm" onClick={copyToClipboard} className="flex items-center gap-1">
              <Copy className="h-4 w-4" />
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
          <div className="p-4 border rounded-md bg-gray-50 min-h-[60px] break-all">{outputText || " "}</div>
        </div>
      )}
    </div>
  )
}

