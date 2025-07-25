import { RahulDataTable } from "@/registry/new-york/items/rahul-data-table/components/rahul-data-table"
import { Badge } from "@/components/ui/badge"

const advancedData = [
    {
        id: 1,
        name: "Project Alpha",
        status: "active",
        priority: "high",
        assignee: "John Doe"
    },
    {
        id: 2,
        name: "Project Beta",
        status: "pending",
        priority: "medium",
        assignee: "Jane Smith"
    },
    {
        id: 3,
        name: "Project Gamma",
        status: "completed",
        priority: "low",
        assignee: "Bob Johnson"
    },
]

const advancedColumns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Project Name" },
    {
        key: "status",
        label: "Status",
        render: (value: string) => (
            <Badge variant={value === "active" ? "default" : value === "pending" ? "secondary" : "outline"}>
                {value}
            </Badge>
        )
    },
    { key: "priority", label: "Priority" },
    { key: "assignee", label: "Assignee" },
]

export default function RahulDataTableAdvanced() {
    return (
        <div className="w-full max-w-4xl space-y-4">
            <h3 className="text-lg font-medium">Advanced Data Table</h3>
            <RahulDataTable data={advancedData} columns={advancedColumns} />
        </div>
    )
}
