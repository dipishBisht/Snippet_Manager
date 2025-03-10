import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FileText, FolderPlus, Star } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react";
import { LoadingSpinner } from "@/components/loading-spinner";
import { handleError, handleSuccess, handleWarning } from "@/utils/handller";
import API from "@/utils/axios";

export default function SideBar({ activeTab, setActiveTab, collections, fetchMyCollection }: any) {
    const [collectionFormData, setCollectionFormData] = useState({
        name: "",
        isPublic: true,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    function resetForm() {
        setCollectionFormData({ name: "", isPublic: true });
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCollectionFormData({ ...collectionFormData, [e.target.name]: e.target.value })
    }

    function handleRadioChange(value: string) {
        setCollectionFormData({ ...collectionFormData, isPublic: value === "public" });
    }

    async function createCollection(e: React.FormEvent) {
        e.preventDefault()
        if (!collectionFormData.name) {
            handleWarning("Enter title");
        }

        setIsLoading(true)

        try {
            const response = await API.post("/collection", collectionFormData);
            if (!response.data.success) {
                handleError(response.data.message);
                return;
            }

            handleSuccess("Collection created successfully");
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
        <aside className="hidden w-64 border-r bg-muted/40 sm:block">
            <div className="flex h-full max-h-screen flex-col gap-2 p-4">
                <div className="flex items-center gap-2 px-2 py-1">
                    <span className="text-sm font-medium">Snippets</span>
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
                        <Dialog open={isDialogOpen} onOpenChange={(open) => {
                            setIsDialogOpen(open);
                            if (!open) resetForm();
                        }}>
                            <DialogTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-7 w-7">
                                    <FolderPlus className="h-4 w-4" />
                                    <span className="sr-only">Add folder</span>
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[625px]">
                                <DialogHeader>
                                    <DialogTitle>Create new collection</DialogTitle>
                                    <DialogDescription>Create a new collection in your account</DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">* Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={collectionFormData.name}
                                            onChange={handleChange}
                                            placeholder="Enter Collection Name"
                                        />
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
                                        onClick={createCollection}
                                    >
                                        {isLoading ? <LoadingSpinner size="sm" /> : "Save Collection"}
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="flex flex-col gap-1">
                        {
                            collections?.map((data: any) => {
                                return (
                                    <Button key={data._id} variant="ghost" className="justify-start gap-2"
                                        onClick={() => setActiveTab(data._id)}
                                    >
                                        <FileText className="h-4 w-4" />
                                        {data.name}
                                    </Button>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <div className="mt-2">
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
                </div> */}
            </div>
        </aside>
    )
}