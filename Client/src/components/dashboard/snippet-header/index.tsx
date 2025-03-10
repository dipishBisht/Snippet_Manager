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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import { handleError, handleSuccess, handleWarning } from "@/utils/handller"
import API from "@/utils/axios"
import { LoadingSpinner } from "@/components/loading-spinner"

export default function SnippetHeader({ activeTab, searchTerm, setSearchTerm, collections, fetchMyCollection }: any) {
    const activeCollection = collections.find((collection: any) => collection._id === activeTab)

    const [snippetFormData, setSnippetFormData] = useState({
        title: "",
        content: "",
        language: "",
        tag: "",
        collectionId: "",
        isPublic: true,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    function resetForm() {
        setSnippetFormData({
            title: "",
            content: "",
            language: "",
            tag: "",
            collectionId: "",
            isPublic: true
        });
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setSnippetFormData({ ...snippetFormData, [e.target.name]: e.target.value });
    }

    function handleRadioChange(value: string) {
        setSnippetFormData({ ...snippetFormData, isPublic: value === "public" });
    }

    function handleLanguageChange(value: string) {
        setSnippetFormData({ ...snippetFormData, language: value });
    }

    function handleCollectionChange(value: string) {
        setSnippetFormData({ ...snippetFormData, collectionId: value });
    }

    async function createSnippet(e: React.FormEvent) {
        e.preventDefault()
        const { collectionId, content, language, title, tag, isPublic } = snippetFormData;
        if (!title || !collectionId || !content || !language) {
            handleWarning("Enter Required Data");
            return;
        }

        const tags = tag.split(",").map((tag => tag.trim().toLowerCase()));


        setIsLoading(true)

        try {
            const response = await API.post("/snippet", {
                title, content, language, tags, collectionId, isPublic
            });
            if (!response.data.success) {
                handleError(response.data.message);
                return;
            }

            handleSuccess("Snippet created successfully");
            fetchMyCollection();
            setIsDialogOpen(false);
            resetForm();
        } catch (error) {
            handleError("Creation Failed");
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold md:text-2xl">
                {activeTab === "all" ? "All Snippets" : activeTab === "starred" ? "Starred Snippets" : activeCollection?.name}
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
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
                                <Label htmlFor="title">* Title</Label>
                                <Input id="title" name="title" value={snippetFormData.title} onChange={handleChange} placeholder="Enter snippet title" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="language">* Language</Label>
                                <Select onValueChange={(value) => handleLanguageChange(value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select language" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {["javascript", "typescript", "html", "css", "python", "java", "csharp"].map((lang) => (
                                            <SelectItem key={lang} value={lang}>{lang.charAt(0).toUpperCase() + lang.slice(1)}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="content">* Code</Label>
                                <Textarea id="content" name="content" value={snippetFormData.content} onChange={handleChange} placeholder="Paste your code here" className="font-mono h-40" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="tag">Tags (comma separated)</Label>
                                <Input id="tag" name="tag" value={snippetFormData.tag} onChange={handleChange} placeholder="react, hooks, frontend" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="collectionId">* Select Collection</Label>
                                <Select onValueChange={(value) => handleCollectionChange(value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select collection" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {collections.map((collection: any) => (
                                            <SelectItem key={collection._id} value={collection._id}>
                                                {collection.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label>* Type</Label>
                                <RadioGroup defaultValue="public" onValueChange={handleRadioChange}>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="public" id="public" />
                                        <Label htmlFor="public">Public</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="private" id="private" />
                                        <Label htmlFor="private">Private</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button
                                type="submit"
                                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300"
                                onClick={createSnippet}
                            >
                                {isLoading ? <LoadingSpinner size="sm" /> : "Save snippet"}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}