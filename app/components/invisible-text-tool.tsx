"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Copy, Check, Trash2, Info } from "lucide-react"

export function InvisibleTextTool() {
  // State for Method 1
  const [copiedSmall, setCopiedSmall] = useState(false)
  const [copiedMedium, setCopiedMedium] = useState(false)
  const [copiedLarge, setCopiedLarge] = useState(false)

  // State for Method 2
  const [manualCopied, setManualCopied] = useState(false)
  const manualTextRef = useRef<HTMLDivElement>(null)

  // State for Method 3
  const [charCount, setCharCount] = useState(1)
  const [generatedText, setGeneratedText] = useState("")
  const [generatedCopied, setGeneratedCopied] = useState(false)

  // State for Test & Copy
  const [testText, setTestText] = useState("")
  const [charCountTest, setCharCountTest] = useState(0)

  // Common invisible character
  const invisibleChar = "​" // Zero-width space

  // Method 1 handlers
  const copySmall = () => {
    navigator.clipboard.writeText(invisibleChar)
    setCopiedSmall(true)
    setTimeout(() => setCopiedSmall(false), 2000)
  }

  const copyMedium = () => {
    navigator.clipboard.writeText(invisibleChar.repeat(5))
    setCopiedMedium(true)
    setTimeout(() => setCopiedMedium(false), 2000)
  }

  const copyLarge = () => {
    navigator.clipboard.writeText(invisibleChar.repeat(10))
    setCopiedLarge(true)
    setTimeout(() => setCopiedLarge(false), 2000)
  }

  // Method 2 handler
  const selectManualText = () => {
    if (manualTextRef.current) {
      const range = document.createRange()
      range.selectNodeContents(manualTextRef.current)
      const selection = window.getSelection()
      if (selection) {
        selection.removeAllRanges()
        selection.addRange(range)
      }
    }
  }

  // Method 3 handler
  const generateInvisibleChars = () => {
    const count = Math.max(1, Math.min(1000, charCount)) // Limit to reasonable range
    setGeneratedText(invisibleChar.repeat(count))
  }

  const copyGenerated = () => {
    navigator.clipboard.writeText(generatedText)
    setGeneratedCopied(true)
    setTimeout(() => setGeneratedCopied(false), 2000)
  }

  // Test & Copy handlers
  const handleTestTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setTestText(text)

    // Count invisible characters
    const visibleChars = text.replace(/[\u200B-\u200D\uFEFF\u2060-\u2064\u2800]/g, "").length
    setCharCountTest(text.length - visibleChars)
  }

  const clearTestText = () => {
    setTestText("")
    setCharCountTest(0)
  }

  // Generate invisible text on mount for Method 3
  useEffect(() => {
    generateInvisibleChars()
  }, [])

  return (
    <Card className="max-w-4xl mx-auto border-2 border-black rounded-xl shadow-lg">
      <CardContent className="p-6">
        <Tabs defaultValue="method1" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="method1" className="data-[state=active]:bg-black data-[state=active]:text-white">
              Quick Copy
            </TabsTrigger>
            <TabsTrigger value="method2" className="data-[state=active]:bg-black data-[state=active]:text-white">
              Manual Select
            </TabsTrigger>
            <TabsTrigger value="method3" className="data-[state=active]:bg-black data-[state=active]:text-white">
              Custom Generator
            </TabsTrigger>
            <TabsTrigger value="test" className="data-[state=active]:bg-black data-[state=active]:text-white">
              Test & Copy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="method1" className="space-y-6">
            <div className="bg-white p-6 rounded-xl border-2 border-black">
              <h3 className="text-xl font-bold mb-4">Method 1 - Copy with a button</h3>
              <p className="mb-6">Click one of the buttons below to copy an invisible character to your clipboard.</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                  onClick={copySmall}
                  variant="outline"
                  className="border-2 border-black hover:bg-emerald-50 flex items-center justify-between gap-2"
                >
                  Copy small
                  {copiedSmall ? <Check className="h-5 w-5 text-emerald-500" /> : <Copy className="h-5 w-5" />}
                </Button>

                <Button
                  onClick={copyMedium}
                  variant="outline"
                  className="border-2 border-black hover:bg-emerald-50 flex items-center justify-between gap-2"
                >
                  Copy medium
                  {copiedMedium ? <Check className="h-5 w-5 text-emerald-500" /> : <Copy className="h-5 w-5" />}
                </Button>

                <Button
                  onClick={copyLarge}
                  variant="outline"
                  className="border-2 border-black hover:bg-emerald-50 flex items-center justify-between gap-2"
                >
                  Copy large
                  {copiedLarge ? <Check className="h-5 w-5 text-emerald-500" /> : <Copy className="h-5 w-5" />}
                </Button>
              </div>

              <p className="text-sm text-gray-600">
                Click the button above to copy an invisible character to your clipboard. If this doesn't work on your
                device, use method 2 to copy and paste blank space.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="method2" className="space-y-6">
            <div className="bg-white p-6 rounded-xl border-2 border-black">
              <h3 className="text-xl font-bold mb-4">Method 2 - Copy Blank Space manually</h3>
              <p className="mb-6">
                Manually select and copy the empty character from the dashed text area below. You can click the Select
                button under the text area. Invisible character will be selected, then press [CTRL+C (for Windows) or
                CMD+C (for MacOS)] to copy.
              </p>

              <div className="mb-6">
                <div
                  ref={manualTextRef}
                  className="w-full h-16 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center mb-4"
                  aria-label="Invisible character to copy"
                >
                  {invisibleChar}
                </div>

                <Button onClick={selectManualText} className="bg-black hover:bg-gray-800 text-white">
                  Select
                </Button>
              </div>

              <p className="text-sm text-gray-600">
                After selecting the invisible character, press Ctrl+C (Windows) or Cmd+C (Mac) to copy it to your
                clipboard.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="method3" className="space-y-6">
            <div className="bg-white p-6 rounded-xl border-2 border-black">
              <h3 className="text-xl font-bold mb-4">Method 3 - Generate Unlimited Invisible Characters</h3>
              <p className="mb-6">
                Type the number of invisible characters you want to generate (from 1-1000), then click the "Generate"
                button.
              </p>

              <div className="flex gap-4 mb-6">
                <Input
                  type="number"
                  min="1"
                  max="1000"
                  value={charCount}
                  onChange={(e) => setCharCount(Number.parseInt(e.target.value) || 1)}
                  className="border-2 border-black w-full max-w-xs"
                />

                <Button onClick={generateInvisibleChars} className="bg-black hover:bg-gray-800 text-white">
                  Generate
                </Button>
              </div>

              {generatedText && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Generated invisible characters:</p>
                    <Button
                      onClick={copyGenerated}
                      variant="outline"
                      size="sm"
                      className="border-2 border-black hover:bg-emerald-50 flex items-center gap-2"
                    >
                      {generatedCopied ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-500" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="p-4 border-2 border-dashed border-gray-400 rounded-lg min-h-[60px] flex items-center justify-center">
                    <span className="text-gray-400 text-sm">
                      {charCount} invisible character{charCount !== 1 ? "s" : ""} generated
                    </span>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="test" className="space-y-6">
            <div className="bg-white p-6 rounded-xl border-2 border-black">
              <h3 className="text-xl font-bold mb-4">Test & Copy Invisible Character</h3>
              <p className="mb-6">
                Paste invisible characters here to test them or see how many characters are present.
              </p>

              <Textarea
                value={testText}
                onChange={handleTestTextChange}
                placeholder="Invisible character copy, paste and test here..."
                className="min-h-[120px] border-2 border-black rounded-lg mb-4"
              />

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Characters:</span>
                  <span className="font-mono">{charCountTest}</span>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={clearTestText}
                    variant="outline"
                    size="sm"
                    className="border-2 border-black hover:bg-red-50 flex items-center gap-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    Clear
                  </Button>

                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(testText)
                    }}
                    variant="outline"
                    size="sm"
                    className="border-2 border-black hover:bg-emerald-50 flex items-center gap-2"
                  >
                    <Copy className="h-4 w-4" />
                    Copy
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 p-4 bg-emerald-50 rounded-lg border-2 border-emerald-200 flex gap-3">
          <Info className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-emerald-800">
              <span className="font-bold">Pro Tip:</span> Different platforms may handle invisible characters
              differently. If one method doesn't work for your specific use case, try another method or a different
              number of characters.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

