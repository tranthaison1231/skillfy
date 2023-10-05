import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/Table'
import { Loader2 } from 'lucide-react'
import { Pagination } from './Pagination'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  className?: string
  total?: number
  size?: number
  page?: number
  loading?: boolean
}

export function DataTable<TData, TValue>({
  columns,
  data,
  className,
  total = 40,
  size = 5,
  page = 0,
  loading
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: info => {
      console.log(info)
    },
    pageCount: total,
    initialState: {
      pagination: {
        pageSize: size,
        pageIndex: page
      }
    }
  })
  return (
    <>
      <Table className={className}>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {(() => {
            if (loading) {
              return (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-60 text-center animate-spin"
                  >
                    <Loader2 className="inline w-10 h-10 text-muted-foreground" />
                  </TableCell>
                </TableRow>
              )
            }
            if (table.getRowModel().rows?.length) {
              return table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            }
            return (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )
          })()}
        </TableBody>
      </Table>
      <Pagination table={table} />
    </>
  )
}
