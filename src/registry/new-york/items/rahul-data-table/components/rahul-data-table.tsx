"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface RahulDataTableProps extends React.HTMLAttributes<HTMLDivElement> {
    data: any[]
    columns: { key: string; label: string }[]
}

const RahulDataTable = React.forwardRef<HTMLDivElement, RahulDataTableProps>(
    ({ className, data, columns, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "w-full overflow-auto rounded-md border",
                    className
                )}
                {...props}
            >
                <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50">
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className="h-12 px-4 text-left align-middle font-medium text-muted-foreground"
                                >
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                        {data.map((row, index) => (
                            <tr
                                key={index}
                                className="border-b transition-colors hover:bg-muted/50"
                            >
                                {columns.map((column) => (
                                    <td
                                        key={column.key}
                                        className="p-4 align-middle"
                                    >
                                        {row[column.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
)
RahulDataTable.displayName = "RahulDataTable"

export { RahulDataTable }
