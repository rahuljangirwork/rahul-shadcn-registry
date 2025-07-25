import { RahulDataTable } from "@/registry/new-york/items/rahul-data-table/components/rahul-data-table"

const sampleData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
    { id: 4, name: "Alice Wilson", email: "alice@example.com", role: "Moderator" },
]

const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
]

export default function RahulDataTableBasic() {
    return (
        <div className="w-full max-w-4xl space-y-4">
            <RahulDataTable data={sampleData} columns={columns} />
        </div>
    )
}
