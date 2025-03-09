"use client"

import { useEffect, useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-theme"

interface CodeBlockProps {
    code: string
    language: string
    showLineNumbers?: boolean
    className?: string
}

export function CodeBlock({ code, language, showLineNumbers = true, className }: CodeBlockProps) {
    const [copied, setCopied] = useState(false)
    const { toast } = useToast()

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

    // Get language class for syntax highlighting
    const getLanguageClass = () => {
        const languageMap: Record<string, string> = {
            javascript: "language-javascript",
            typescript: "language-typescript",
            jsx: "language-jsx",
            tsx: "language-tsx",
            html: "language-html",
            css: "language-css",
            python: "language-python",
            java: "language-java",
            csharp: "language-csharp",
            php: "language-php",
            ruby: "language-ruby",
            go: "language-go",
            rust: "language-rust",
            swift: "language-swift",
            kotlin: "language-kotlin",
            sql: "language-sql",
            json: "language-json",
            yaml: "language-yaml",
            markdown: "language-markdown",
            bash: "language-bash",
            shell: "language-shell",
        }

        return languageMap[language.toLowerCase()] || "language-plaintext"
    }

    return (
        <div className={cn("relative rounded-md border overflow-hidden bg-muted/50", className)}>
            <div className="flex items-center justify-between px-4 py-2 border-b bg-primary/5">
                <span className="text-xs font-medium">{language}</span>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md" onClick={copyToClipboard}>
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span className="sr-only">Copy code</span>
                </Button>
            </div>
            <pre className={cn("p-4 overflow-x-auto text-sm font-mono", showLineNumbers && "line-numbers")}>
                <code className={getLanguageClass()}>{code}</code>
            </pre>
        </div>
    )
}

