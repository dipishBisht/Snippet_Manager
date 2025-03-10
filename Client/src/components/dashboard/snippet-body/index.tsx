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
import { useEffect, useState } from "react"
import { handleError, handleSuccess } from "@/utils/handller"
import { format } from "date-fns";

export default function SnippetBody({ searchTerm, activeTab, snippet }: any) {

    const [snippets, setSnippets] = useState(snippet || []);

    useEffect(() => {
        setSnippets(snippet);
    }, [snippet]);

    const filteredSnippets = snippets.filter((snippet: any) => {
        const matchesSearch =
            snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            snippet.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
            snippet.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        console.log(snippet.title);
        
        if (activeTab === "all") return matchesSearch
        if (activeTab === "starred") return matchesSearch && snippet.starred
        if (activeTab) return matchesSearch && snippet.collectionId === activeTab
        return matchesSearch
    })
    

    const toggleStar = (id: any) => {
        setSnippets((prevSnippets: any) => {
            return prevSnippets.map((snippet: any) =>
                snippet._id === id ? { ...snippet, isStarred: !snippet.isStarred } : snippet
            );
        });

        const updatedSnippet = snippets.find((s: any) => s._id === id);
        const action = updatedSnippet?.isStarred ? "unstarred" : "starred";

        handleSuccess(action)
    }

    const deleteSnippet = (id: any) => {
        setSnippets(snippets.filter((snippet: any) => snippet._id !== id))
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
                    {filteredSnippets.map((snippet: any) => {
                        const date = new Date(snippet.createdAt);
                        return (
                            <div
                                key={"grid-" + snippet._id}
                                className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm snippet-card"
                            >
                                <div className="flex items-center justify-between p-4 border-b">
                                    <div className="font-medium">{snippet.title}</div>
                                    <div className="flex items-center gap-1">
                                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleStar(snippet._id)}>
                                            <Star
                                                className={`h-4 w-4 transition-all duration-300 ${snippet.isStarred && "fill-yellow-400 text-yellow-400"}`}
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
                                                <DropdownMenuItem onClick={() => copySnippet(snippet.content)}>
                                                    <Copy className="mr-2 h-4 w-4" />
                                                    Copy
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Edit className="mr-2 h-4 w-4" />
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem onClick={() => deleteSnippet(snippet._id)}>
                                                    <Trash className="mr-2 h-4 w-4" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                                <div className="p-4 font-mono text-sm overflow-x-auto">
                                    <EnhancedCodeBlock code={snippet.content} language={snippet.language} showLineNumbers={false} />
                                </div>
                                <div className="p-4 border-t mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {snippet.tags.map((tag: any, idx: number) => (
                                            <span key={"grid-tag-" + idx} className="tag-badge border bg-muted/50 hover:bg-muted transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-2 text-xs text-muted-foreground">Created on {format(date, "MMMM d, yyyy")}</div>
                                </div>
                            </div>
                        )
                    })}
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
                                {filteredSnippets.map((snippet: any) => {
                                    const date = new Date(snippet.createdAt);
                                    return (
                                        <tr key={"list-" + snippet._id} className="border-b transition-colors hover:bg-muted/50">
                                            <td className="p-4 align-middle">{snippet.title}</td>
                                            <td className="p-4 align-middle">{snippet.language}</td>
                                            <td className="p-4 align-middle">
                                                <div className="flex flex-wrap gap-1">
                                                    {snippet.tags.map((tag: any, idx: number) => (
                                                        <span key={"list-tag-" + idx} className="tag-badge border bg-muted/50 hover:bg-muted transition-colors">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="p-4 align-middle">{format(date, "MMMM d, yyyy")}</td>
                                            <td className="p-4 align-middle">
                                                <div className="flex items-center gap-1">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8"
                                                        onClick={() => toggleStar(snippet._id)}
                                                    >
                                                        <Star
                                                            className={`h-4 w-4 transition-all duration-300 ${snippet.starred && "fill-yellow-400 text-yellow-400"}`}
                                                        />
                                                        <span className="sr-only">Star</span>
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8"
                                                        onClick={() => copySnippet(snippet.content)}
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
                                                        onClick={() => deleteSnippet(snippet._id)}
                                                    >
                                                        <Trash className="h-4 w-4" />
                                                        <span className="sr-only">Delete</span>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    )
}