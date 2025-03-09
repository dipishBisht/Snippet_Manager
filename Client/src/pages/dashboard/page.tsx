import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Code,
    Copy,
    Edit,
    FileText,
    FolderPlus,
    LogOut,
    MoreVertical,
    Plus,
    Search,
    Settings,
    Star,
    Trash,
    User,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { CodeBlock } from "@/components/code-block"
import { LoadingSpinner } from "@/components/loading-spinner"
import { useToast } from "@/hooks/use-theme"

export default function DashboardPage() {
    const [isLoading, setIsLoading] = useState(true)
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
    ])

    const [searchTerm, setSearchTerm] = useState("")
    const [activeTab, setActiveTab] = useState("all")
    const { toast } = useToast()

    // Simulate loading state
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)
        return () => clearTimeout(timer)
    }, [])

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

        toast({
            title: `Snippet ${action}`,
            description: `"${snippet?.title}" has been ${action}.`,
            variant: "success",
        })
    }

    const deleteSnippet = (id: any) => {
        const snippet = snippets.find((s) => s.id === id)
        setSnippets(snippets.filter((snippet) => snippet.id !== id))

        toast({
            title: "Snippet deleted",
            description: `"${snippet?.title}" has been deleted.`,
            variant: "success",
        })
    }

    const copySnippet = async (code: any, title: any) => {
        try {
            await navigator.clipboard.writeText(code)
            toast({
                title: "Copied to clipboard",
                description: `"${title}" has been copied to your clipboard.`,
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

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <LoadingSpinner size="lg" />
                    <p className="text-muted-foreground">Loading your snippets...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-md">
                <div className="flex h-16 items-center px-4 sm:px-6">
                    <a href="/" className="flex items-center gap-2 font-semibold">
                        <Code className="h-6 w-6" />
                        <span>SnippetManager</span>
                    </a>
                    <div className="ml-auto flex items-center gap-2">
                        <div className="relative w-full max-w-sm">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search snippets..."
                                className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <ThemeToggle />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <User className="h-5 w-5" />
                                    <span className="sr-only">User menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" />
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>
            <div className="flex flex-1">
                <aside className="hidden w-64 border-r bg-muted/40 sm:block">
                    <div className="flex h-full max-h-screen flex-col gap-2 p-4">
                        <div className="flex items-center gap-2 px-2 py-1">
                            <FileText className="h-4 w-4" />
                            <span className="text-sm font-medium">My Snippets</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <Button
                                variant={activeTab === "all" ? "secondary" : "ghost"}
                                className="justify-start gap-2"
                                onClick={() => setActiveTab("all")}
                            >
                                <FileText className="h-4 w-4" />
                                All Snippets
                            </Button>
                            <Button
                                variant={activeTab === "starred" ? "secondary" : "ghost"}
                                className="justify-start gap-2"
                                onClick={() => setActiveTab("starred")}
                            >
                                <Star className="h-4 w-4" />
                                Starred
                            </Button>
                        </div>
                        <div className="mt-2">
                            <div className="flex items-center justify-between px-2 py-1">
                                <span className="text-sm font-medium">Folders</span>
                                <Button variant="ghost" size="icon" className="h-7 w-7">
                                    <FolderPlus className="h-4 w-4" />
                                    <span className="sr-only">Add folder</span>
                                </Button>
                            </div>
                            <div className="flex flex-col gap-1">
                                <Button variant="ghost" className="justify-start gap-2">
                                    <FileText className="h-4 w-4" />
                                    JavaScript
                                </Button>
                                <Button variant="ghost" className="justify-start gap-2">
                                    <FileText className="h-4 w-4" />
                                    CSS
                                </Button>
                                <Button variant="ghost" className="justify-start gap-2">
                                    <FileText className="h-4 w-4" />
                                    Python
                                </Button>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="flex items-center justify-between px-2 py-1">
                                <span className="text-sm font-medium">Tags</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <Button variant="ghost" className="justify-start gap-2">
                                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                                    react
                                </Button>
                                <Button variant="ghost" className="justify-start gap-2">
                                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                    css
                                </Button>
                                <Button variant="ghost" className="justify-start gap-2">
                                    <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                                    python
                                </Button>
                            </div>
                        </div>
                    </div>
                </aside>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-lg font-semibold md:text-2xl">
                            {activeTab === "all" ? "All Snippets" : activeTab === "starred" ? "Starred Snippets" : "Snippets"}
                        </h1>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="gap-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300">
                                    <Plus className="h-4 w-4" />
                                    New Snippet
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[625px]">
                                <DialogHeader>
                                    <DialogTitle>Create new snippet</DialogTitle>
                                    <DialogDescription>Add a new code snippet to your collection.</DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="title">Title</Label>
                                        <Input id="title" placeholder="Enter snippet title" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="language">Language</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select language" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="javascript">JavaScript</SelectItem>
                                                <SelectItem value="typescript">TypeScript</SelectItem>
                                                <SelectItem value="html">HTML</SelectItem>
                                                <SelectItem value="css">CSS</SelectItem>
                                                <SelectItem value="python">Python</SelectItem>
                                                <SelectItem value="java">Java</SelectItem>
                                                <SelectItem value="csharp">C#</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="code">Code</Label>
                                        <Textarea id="code" placeholder="Paste your code here" className="font-mono h-40" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="tags">Tags (comma separated)</Label>
                                        <Input id="tags" placeholder="react, hooks, frontend" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button
                                        type="submit"
                                        className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300"
                                    >
                                        Save snippet
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
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
                                                        <DropdownMenuItem onClick={() => copySnippet(snippet.code, snippet.title)}>
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
                                            <CodeBlock code={snippet.code} language={snippet.language} showLineNumbers={false} />
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
                                                                <span
                                                                    key={tag}
                                                                    className="tag-badge border bg-muted/50 hover:bg-muted transition-colors"
                                                                >
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
                                                                onClick={() => copySnippet(snippet.code, snippet.title)}
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
                </main>
            </div>
        </div>
    )
}
