import { useState, useEffect } from "react"
import { LoadingSpinner } from "@/components/loading-spinner"
import SideBar from "@/components/dashboard/sidebar"
import SnippetHeader from "@/components/dashboard/snippet-header"
import SnippetBody from "@/components/dashboard/snippet-body"

export default function DashboardPage() {
    const [isLoading, setIsLoading] = useState(true)

    const [searchTerm, setSearchTerm] = useState("")
    const [activeTab, setActiveTab] = useState("all")

    // Simulate loading state
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)
        return () => clearTimeout(timer)
    }, [])

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
        <div className="flex flex-1">
            <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                <SnippetHeader activeTab={activeTab} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <SnippetBody searchTerm={searchTerm} activeTab={activeTab} />
            </main>
        </div>
    )
}
