import { useState, useEffect } from "react"
import { LoadingSpinner } from "@/components/loading-spinner"
import SideBar from "@/components/dashboard/sidebar"
import SnippetHeader from "@/components/dashboard/snippet-header"
import SnippetBody from "@/components/dashboard/snippet-body"
import API from "@/utils/axios"
import { handleError } from "@/utils/handller"

export default function DashboardPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [activeTab, setActiveTab] = useState("all")
    const [data, setData] = useState<any[]>([]);

    // Simulate loading state
    useEffect(() => {
        fetchMyCollection()
    }, [])

    async function fetchMyCollection() {
        try {
            const response = await API.get("/collection/my-collections");

            if (!response.data.success)
                handleError("Error while fetching data");
            setData(response.data.collections);
        } catch (error) {
            console.log("Error getting colelctions", error);
        } finally {
            setIsLoading(false)
        }
    }

    const collections = data?.reduce((acc: any, curVal: any) => {
        const data = { _id: curVal?._id, name: curVal?.name };
        acc.push(data);
        return acc;
    }, []);

    const snippet = data?.reduce((acc: any, curVal: any) => {
        curVal?.snippet?.map((val: any) => {
            acc.push(val);
        });
        return acc;
    }, [])

    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <LoadingSpinner size="lg" />
            </div>
        )
    }

    return (
        <div className="flex flex-1">
            <SideBar activeTab={activeTab} setActiveTab={setActiveTab} collections={collections} fetchMyCollection={fetchMyCollection} />
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                <SnippetHeader activeTab={activeTab} searchTerm={searchTerm} collections={collections} setSearchTerm={setSearchTerm} fetchMyCollection={fetchMyCollection} />
                <SnippetBody searchTerm={searchTerm} activeTab={activeTab} snippet={snippet} />
            </main>
        </div>
    )
}
