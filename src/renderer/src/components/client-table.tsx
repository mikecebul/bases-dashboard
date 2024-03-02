import { Client } from '@db/client'
import { columns } from './client-table/columns'
import { DataTable } from './client-table/data-table'

const mockClients: Client[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    counselor: '1053979',
    attendance: 'show',
    active: 'true',
    email: 'ken99@yahoo.com'
  },
  {
    id: '2',
    firstName: 'John',
    lastName: 'Doe',
    counselor: '1053979',
    attendance: 'show',
    active: 'true',
    email: 'ken99@yahoo.com'
  },
  {
    id: '3',
    firstName: 'John',
    lastName: 'Doe',
    counselor: '1053979',
    attendance: 'show',
    active: 'true',
    email: 'ken99@yahoo.com'
  },
  {
    id: '4',
    firstName: 'John',
    lastName: 'Doe',
    counselor: '1053979',
    attendance: 'show',
    active: 'true',
    email: 'ken99@yahoo.com'
  },
  {
    id: '5',
    firstName: 'John',
    lastName: 'Doe',
    counselor: '1053979',
    attendance: 'show',
    active: 'true',
    email: 'ken99@yahoo.com'
  },
  {
    id: '6',
    firstName: 'John',
    lastName: 'Doe',
    counselor: '1053979',
    attendance: 'show',
    active: 'true',
    email: 'ken99@yahoo.com'
  }
]

export default function ClientTable({ clients }: { clients: Client[] }) {
  return <DataTable columns={columns} data={clients.length > 1 ? clients : mockClients} />
}

// export const columns: ColumnDef<Person>[] = [
//   {
//     id: 'select',
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false
//   },
//   {
//     accessorKey: 'name',
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//         >
//           Name
//           <ArrowUpDown className="w-4 h-4 ml-2" />
//         </Button>
//       )
//     },
//     cell: ({ row }) => <div className="font-medium text-left">{row.getValue('name')}</div>
//   },
//   {
//     accessorKey: 'email',
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//         >
//           Email
//           <ArrowUpDown className="w-4 h-4 ml-2" />
//         </Button>
//       )
//     },
//     cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>
//   },
//   {
//     accessorKey: 'active',
//     header: () => <span className="">Active</span>,
//     cell: ({ row }) => (
//       <div className="capitalize">{row.getValue('active') ? 'Active' : 'In Active'}</div>
//     )
//   }
//   // {
//   //   id: 'actions',
//   //   enableHiding: false,
//   //   cell: ({ row }) => {
//   //     const payment = row.original

//   //     return (
//   //       <DropdownMenu>
//   //         <DropdownMenuTrigger asChild>
//   //           <Button variant="ghost" className="w-8 h-8 p-0">
//   //             <span className="sr-only">Open menu</span>
//   //             <MoreHorizontal className="w-4 h-4" />
//   //           </Button>
//   //         </DropdownMenuTrigger>
//   //         <DropdownMenuContent align="end">
//   //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
//   //           <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
//   //             Copy payment ID
//   //           </DropdownMenuItem>
//   //           <DropdownMenuSeparator />
//   //           <DropdownMenuItem>View customer</DropdownMenuItem>
//   //           <DropdownMenuItem>View payment details</DropdownMenuItem>
//   //         </DropdownMenuContent>
//   //       </DropdownMenu>
//   //     )
//   //   }
//   // }
// ]

// export function DataTableDemo() {
//   const [sorting, setSorting] = useState<SortingState>([])
//   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
//   const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
//   const [rowSelection, setRowSelection] = useState({})

//   const table = useReactTable({
//     data,
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection
//     }
//   })

//   return (
//     <div className="w-full">
//       <div className="flex items-center py-4">
//         <Input
//           placeholder="Filter emails..."
//           value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
//           onChange={(event) => table.getColumn('email')?.setFilterValue(event.target.value)}
//           className="max-w-sm"
//         />
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline" className="ml-auto">
//               Columns <ChevronDown className="w-4 h-4 ml-2" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             {table
//               .getAllColumns()
//               .filter((column) => column.getCanHide())
//               .map((column) => {
//                 return (
//                   <DropdownMenuCheckboxItem
//                     key={column.id}
//                     className="capitalize"
//                     checked={column.getIsVisible()}
//                     onCheckedChange={(value) => column.toggleVisibility(!!value)}
//                   >
//                     {column.id}
//                   </DropdownMenuCheckboxItem>
//                 )
//               })}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//       <div className="border rounded-md">
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => {
//                   return (
//                     <TableHead key={header.id}>
//                       {header.isPlaceholder
//                         ? null
//                         : flexRender(header.column.columnDef.header, header.getContext())}
//                     </TableHead>
//                   )
//                 })}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={columns.length} className="h-24 text-center">
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//       <div className="flex items-center justify-end py-4 space-x-2">
//         <div className="flex-1 text-sm text-muted-foreground">
//           {table.getFilteredSelectedRowModel().rows.length} of{' '}
//           {table.getFilteredRowModel().rows.length} row(s) selected.
//         </div>
//         <div className="space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }
