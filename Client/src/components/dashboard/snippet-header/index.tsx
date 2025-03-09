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
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SnippetHeader({ activeTab, searchTerm, setSearchTerm }: any) {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold md:text-2xl">
                {activeTab === "all" ? "All Snippets" : activeTab === "starred" ? "Starred Snippets" : "Snippets"}
            </h1>
            <div className="flex items-center gap-2">
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
        </div>
    )
}