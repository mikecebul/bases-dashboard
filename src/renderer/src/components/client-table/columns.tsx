import { createColumnHelper } from '@tanstack/react-table'
import { Client } from '@db/client'

const columnHelper = createColumnHelper<Client>()

export const columns = [
  columnHelper.accessor('firstName', {
    header: () => 'First Name',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('lastName', {
    header: () => 'Last Name',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('counselor', {
    header: () => 'Counselor',
    cell: (info) => {
      const counselorId = info.getValue()
      // Mapping of counselor IDs to names
      const counselorNames = {
        '1009893': 'Leah',
        '1053977': 'Scott',
        '1053978': 'Celia',
        '1053979': 'Mike'
      }
      // Return the name corresponding to the ID, or the ID itself if not found
      return counselorNames[counselorId] || counselorId
    }
  }),
  columnHelper.accessor('attendance', {
    header: () => 'Last Appointment',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('email', {
    header: () => 'Email',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor((row) => (row.active === 'true' ? 'Active' : 'Inactive'), {
    id: 'active',
    header: () => 'Active',
    cell: (info) => info.getValue(),
    filterFn: (row, columnId, value) => {
      return row.getValue(columnId) === value
    }
  })
]
