"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Copy, Check, Trash2, Info } from "lucide-react"
import type { Dictionary } from "@/dictionaries"
import type { Locale } from "@/types"

// Change the props to receive the dictionary directly
export function InvisibleTextTool({
  lang,
  dictionary,
}: {
  lang: Locale
  dictionary: Dictionary
}) {
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

  // Use the dictionary directly from props
  const dict = dictionary

  return (
    <Card className="max-w-4xl mx-auto border-2 border-black rounded-xl shadow-lg">
      <CardContent className="p-6">
        <Tabs defaultValue="method1" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6 gap-1">
            <TabsTrigger
              value="method1"
              className="data-[state=active]:bg-black data-[state=active]:text-white text-xs sm:text-sm md:text-base"
            >
              <span className="hidden sm:inline">{dict.tool.tabs.quickCopy}</span>
              <span className="sm:hidden">Quick</span>
            </TabsTrigger>
            <TabsTrigger
              value="method2"
              className="data-[state=active]:bg-black data-[state=active]:text-white text-xs sm:text-sm md:text-base"
            >
              <span className="hidden sm:inline">{dict.tool.tabs.manualSelect}</span>
              <span className="sm:hidden">Manual</span>
            </TabsTrigger>
            <TabsTrigger
              value="method3"
              className="data-[state=active]:bg-black data-[state=active]:text-white text-xs sm:text-sm md:text-base"
            >
              <span className="hidden sm:inline">{dict.tool.tabs.customGenerator}</span>
              <span className="sm:hidden">Generate</span>
            </TabsTrigger>
            <TabsTrigger
              value="test"
              className="data-[state=active]:bg-black data-[state=active]:text-white text-xs sm:text-sm md:text-base"
            >
              <span className="hidden sm:inline">{dict.tool.tabs.testCopy}</span>
              <span className="sm:hidden">Test</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="method1" className="space-y-6">
            <div className="bg-white p-6 rounded-xl border-2 border-black">
              <h3 className="text-xl font-bold mb-4">{dict.tool.method1.title}</h3>
              <p className="mb-6">{dict.tool.method1.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <Button
                  onClick={copySmall}
                  variant="outline"
                  className="border-2 border-black hover:bg-emerald-50 flex items-center justify-between gap-2"
                >
                  {dict.tool.method1.copySmall}
                  {copiedSmall ? <Check className="h-5 w-5 text-emerald-500" /> : <Copy className="h-5 w-5" />}
                </Button>

                <Button
                  onClick={copyMedium}
                  variant="outline"
                  className="border-2 border-black hover:bg-emerald-50 flex items-center justify-between gap-2"
                >
                  {dict.tool.method1.copyMedium}
                  {copiedMedium ? <Check className="h-5 w-5 text-emerald-500" /> : <Copy className="h-5 w-5" />}
                </Button>

                <Button
                  onClick={copyLarge}
                  variant="outline"
                  className="border-2 border-black hover:bg-emerald-50 flex items-center justify-between gap-2"
                >
                  {dict.tool.method1.copyLarge}
                  {copiedLarge ? <Check className="h-5 w-5 text-emerald-500" /> : <Copy className="h-5 w-5" />}
                </Button>
              </div>

              <p className="text-sm text-gray-600">{dict.tool.method1.note}</p>
            </div>
          </TabsContent>

          <TabsContent value="method2" className="space-y-6">
            <div className="bg-white p-6 rounded-xl border-2 border-black">
              <h3 className="text-xl font-bold mb-4">{dict.tool.method2.title}</h3>
              <p className="mb-6">{dict.tool.method2.description}</p>

              <div className="mb-6">
                <div
                  ref={manualTextRef}
                  className="w-full h-16 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center mb-4"
                  aria-label="Invisible character to copy"
                >
                  {invisibleChar}
                </div>

                <Button onClick={selectManualText} className="bg-black hover:bg-gray-800 text-white">
                  {dict.tool.method2.select}
                </Button>
              </div>

              <p className="text-sm text-gray-600">{dict.tool.method2.note}</p>
            </div>
          </TabsContent>

          <TabsContent value="method3" className="space-y-6">
            <div className="bg-white p-6 rounded-xl border-2 border-black">
              <h3 className="text-xl font-bold mb-4">{dict.tool.method3.title}</h3>
              <p className="mb-6">{dict.tool.method3.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
                <Input
                  type="number"
                  min="1"
                  max="1000"
                  value={charCount}
                  onChange={(e) => setCharCount(Number.parseInt(e.target.value) || 1)}
                  className="border-2 border-black w-full sm:col-span-3"
                />

                <Button onClick={generateInvisibleChars} className="bg-black hover:bg-gray-800 text-white">
                  {dict.tool.method3.generate}
                </Button>
              </div>

              {generatedText && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{dict.tool.method3.generatedText}</p>
                    <Button
                      onClick={copyGenerated}
                      variant="outline"
                      size="sm"
                      className="border-2 border-black hover:bg-emerald-50 flex items-center gap-2"
                    >
                      {generatedCopied ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-500" />
                          {dict.tool.method3.copied}
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          {dict.tool.method3.copy}
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="p-4 border-2 border-dashed border-gray-400 rounded-lg min-h-[60px] flex items-center justify-center">
                    <span className="text-gray-400 text-sm">
                      {charCount}{" "}
                      {charCount === 1
                        ? dict.tool.method3.charactersGenerated
                        : dict.tool.method3.charactersGeneratedPlural}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="test" className="space-y-6">
            <div className="bg-white p-6 rounded-xl border-2 border-black">
              <h3 className="text-xl font-bold mb-4">{dict.tool.test.title}</h3>
              <p className="mb-6">{dict.tool.test.description}</p>

              <Textarea
                value={testText}
                onChange={handleTestTextChange}
                placeholder={dict.tool.test.placeholder}
                className="min-h-[120px] border-2 border-black rounded-lg mb-4"
              />

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{dict.tool.test.characters}</span>
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
                    {dict.tool.test.clear}
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
                    {dict.tool.test.copy}
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
              <span className="font-bold">{dict.tool.proTip.title}</span> {dict.tool.proTip.content}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

