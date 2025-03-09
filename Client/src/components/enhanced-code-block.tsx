"use client"

import { useState, useEffect } from "react"
import { Check, Copy, CodeIcon } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus, vs } from "react-syntax-highlighter/dist/esm/styles/prism"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-theme"
import { useTheme } from "@/context/theme/theme-provider"

interface EnhancedCodeBlockProps {
  code: string
  language: string
  showLineNumbers?: boolean
  className?: string
  fileName?: string
}

export function EnhancedCodeBlock({
  code,
  language,
  showLineNumbers = true,
  className,
  fileName,
}: EnhancedCodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()
  const { theme } = useTheme()

  // Map common language names to SyntaxHighlighter supported languages
  const languageMap: Record<string, string> = {
    js: "javascript",
    jsx: "jsx",
    ts: "typescript",
    tsx: "tsx",
    py: "python",
    rb: "ruby",
    java: "java",
    go: "go",
    php: "php",
    cs: "csharp",
    cpp: "cpp",
    c: "c",
    html: "html",
    css: "css",
    scss: "scss",
    json: "json",
    yaml: "yaml",
    md: "markdown",
    sql: "sql",
    sh: "bash",
    bash: "bash",
    shell: "bash",
  }

  const mappedLanguage = languageMap[language.toLowerCase()] || language.toLowerCase()

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      toast({
        title: "Copied to clipboard",
        description: "The code has been copied to your clipboard.",
        variant: "success",
      })
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy the code to your clipboard.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className={cn("rounded-lg border overflow-hidden bg-muted/30", className)}>
      <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/50">
        <div className="flex items-center gap-2">
          <CodeIcon className="h-4 w-4 text-muted-foreground" />
          {fileName ? (
            <span className="text-xs font-medium">{fileName}</span>
          ) : (
            <span className="text-xs font-medium">{language}</span>
          )}
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md hover:bg-muted" onClick={copyToClipboard}>
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={mappedLanguage}
          style={theme === "dark" ? vscDarkPlus : vs}
          showLineNumbers={showLineNumbers}
          wrapLines={true}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            backgroundColor: "transparent",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

