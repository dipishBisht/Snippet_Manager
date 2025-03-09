import { Button } from "@/components/ui/button";
import { FileText, FolderPlus, Star } from "lucide-react";

export default function SideBar({ activeTab, setActiveTab }: any) {
    return (
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
                        <span className="text-sm font-medium">Collections</span>
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
                        <Button variant="ghost" className="justify-start gap-2">
                            <FileText className="h-4 w-4" />
                            TypeScript
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
                        <Button variant="ghost" className="justify-start gap-2">
                            <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                            typescript
                        </Button>
                    </div>
                </div>
            </div>
        </aside>
    )
}