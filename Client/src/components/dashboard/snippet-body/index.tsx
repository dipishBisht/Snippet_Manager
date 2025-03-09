import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Edit, MoreVertical, Star, Trash } from "lucide-react"
import { EnhancedCodeBlock } from "@/components/enhanced-code-block"
import { useState } from "react"
import { handleError, handleSuccess } from "@/utils/handller"

export default function SnippetBody({ searchTerm, activeTab }: any) {

    const [snippets, setSnippets] = useState([
        {
            id: 1,
            title: "React useState Hook",
            language: "javascript",
            code: "const [state, setState] = useState(initialState);\n\n// Example\nconst [count, setCount] = useState(0);\nconst [user, setUser] = useState({ name: '', age: 0 });",
            tags: ["react", "hooks"],
            createdAt: "2023-05-15",
            starred: true,
        },
        {
            id: 2,
            title: "CSS Flexbox Layout",
            language: "css",
            code: ".container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}",
            tags: ["css", "layout"],
            createdAt: "2023-05-10",
            starred: false,
        },
        {
            id: 3,
            title: "Python List Comprehension",
            language: "python",
            code: "# Simple list comprehension\nnumbers = [1, 2, 3, 4, 5]\nsquares = [x**2 for x in numbers]\nprint(squares)  # [1, 4, 9, 16, 25]\n\n# With condition\neven_squares = [x**2 for x in numbers if x % 2 == 0]\nprint(even_squares)  # [4, 16]",
            tags: ["python", "lists"],
            createdAt: "2023-05-05",
            starred: true,
        },
        {
            id: 4,
            title: "TypeScript Interface",
            language: "typescript",
            code: "interface User {\n  id: number;\n  name: string;\n  email: string;\n  isActive: boolean;\n  createdAt: Date;\n}\n\nconst user: User = {\n  id: 1,\n  name: 'John Doe',\n  email: 'john@example.com',\n  isActive: true,\n  createdAt: new Date()\n};",
            tags: ["typescript", "interface"],
            createdAt: "2023-06-12",
            starred: false,
        },
        {
            id: 5,
            title: "Next.js API Route",
            language: "typescript",
            code: "// pages/api/users.ts\nimport type { NextApiRequest, NextApiResponse } from 'next';\n\ntype User = {\n  id: number;\n  name: string;\n};\n\nexport default function handler(\n  req: NextApiRequest,\n  res: NextApiResponse<User[]>\n) {\n  const users = [\n    { id: 1, name: 'John' },\n    { id: 2, name: 'Jane' },\n  ];\n  \n  res.status(200).json(users);\n}",
            tags: ["nextjs", "api"],
            createdAt: "2023-07-20",
            starred: true,
        },
    ]);

    const filteredSnippets = snippets.filter((snippet) => {
        const matchesSearch =
            snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            snippet.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
            snippet.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

        if (activeTab === "all") return matchesSearch
        if (activeTab === "starred") return matchesSearch && snippet.starred
        return matchesSearch
    })

    const toggleStar = (id: any) => {
        setSnippets(snippets.map((snippet) => (snippet.id === id ? { ...snippet, starred: !snippet.starred } : snippet)))

        const snippet = snippets.find((s) => s.id === id)
        const action = snippet?.starred ? "unstarred" : "starred"

        handleSuccess(`Star ${action}`)
    }

    const deleteSnippet = (id: any) => {
        setSnippets(snippets.filter((snippet) => snippet.id !== id))
        handleSuccess("Snippet deleted");
    }

    const copySnippet = async (code: any) => {
        try {
            await navigator.clipboard.writeText(code)
            handleSuccess("Copied to clipboard")
        } catch (err) {
            handleError("Failed to copy");
        }
    }

    return (
        <Tabs defaultValue="grid" className="w-full">
            <div className="flex items-center justify-between">
                <TabsList>
                    <TabsTrigger value="grid">Grid</TabsTrigger>
                    <TabsTrigger value="list">List</TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value="grid" className="border-none p-0">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredSnippets.map((snippet) => (
                        <div
                            key={snippet.id}
                            className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm snippet-card"
                        >
                            <div className="flex items-center justify-between p-4 border-b">
                                <div className="font-medium">{snippet.title}</div>
                                <div className="flex items-center gap-1">
                                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleStar(snippet.id)}>
                                        <Star
                                            className={`h-4 w-4 transition-all duration-300 ${snippet.starred ? "fill-yellow-400 text-yellow-400" : ""}`}
                                        />
                                        <span className="sr-only">Star</span>
                                    </Button>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <MoreVertical className="h-4 w-4" />
                                                <span className="sr-only">More</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem onClick={() => copySnippet(snippet.code)}>
                                                <Copy className="mr-2 h-4 w-4" />
                                                Copy
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Edit className="mr-2 h-4 w-4" />
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => deleteSnippet(snippet.id)}>
                                                <Trash className="mr-2 h-4 w-4" />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                            <div className="p-4 font-mono text-sm overflow-x-auto">
                                <EnhancedCodeBlock code={snippet.code} language={snippet.language} showLineNumbers={false} />
                            </div>
                            <div className="p-4 border-t mt-auto">
                                <div className="flex flex-wrap gap-2">
                                    {snippet.tags.map((tag) => (
                                        <span key={tag} className="tag-badge border bg-muted/50 hover:bg-muted transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-2 text-xs text-muted-foreground">Created on {snippet.createdAt}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="list" className="border-none p-0">
                <div className="rounded-md border">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead>
                                <tr className="border-b transition-colors hover:bg-muted/50">
                                    <th className="h-12 px-4 text-left align-middle font-medium">Title</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium">Language</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium">Tags</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium">Created</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredSnippets.map((snippet) => (
                                    <tr key={snippet.id} className="border-b transition-colors hover:bg-muted/50">
                                        <td className="p-4 align-middle">{snippet.title}</td>
                                        <td className="p-4 align-middle">{snippet.language}</td>
                                        <td className="p-4 align-middle">
                                            <div className="flex flex-wrap gap-1">
                                                {snippet.tags.map((tag) => (
                                                    <span key={tag} className="tag-badge border bg-muted/50 hover:bg-muted transition-colors">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                        <td className="p-4 align-middle">{snippet.createdAt}</td>
                                        <td className="p-4 align-middle">
                                            <div className="flex items-center gap-1">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() => toggleStar(snippet.id)}
                                                >
                                                    <Star
                                                        className={`h-4 w-4 transition-all duration-300 ${snippet.starred ? "fill-yellow-400 text-yellow-400" : ""}`}
                                                    />
                                                    <span className="sr-only">Star</span>
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() => copySnippet(snippet.code)}
                                                >
                                                    <Copy className="h-4 w-4" />
                                                    <span className="sr-only">Copy</span>
                                                </Button>
                                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                                    <Edit className="h-4 w-4" />
                                                    <span className="sr-only">Edit</span>
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() => deleteSnippet(snippet.id)}
                                                >
                                                    <Trash className="h-4 w-4" />
                                                    <span className="sr-only">Delete</span>
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    )
}