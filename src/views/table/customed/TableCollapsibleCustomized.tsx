// // ** React Imports
// import { ChangeEvent, MouseEvent, useState } from 'react'

// //표 test
// // import { Component } from 'react'
// // import ReactHTMLTableToExcel from 'react-html-table-to-excel'

// // ** MUI Imports
// import Box from '@mui/material/Box'
// import Table from '@mui/material/Table'
// import Paper from '@mui/material/Paper'

// import { visuallyHidden } from '@mui/utils'

// import Checkbox from '@mui/material/Checkbox'
// import TableRow from '@mui/material/TableRow'
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
// import TableHead from '@mui/material/TableHead'

// import TableContainer from '@mui/material/TableContainer'
// import TableSortLabel from '@mui/material/TableSortLabel'
// import TablePagination from '@mui/material/TablePagination'

// // ** Icon Imports

// import ButtonsCustomed from 'src/views/components/buttons/ButtonsCustomed'
// import { Button, Card, CardHeader, Collapse, IconButton, Typography } from '@mui/material'

// // ** Icon Imports
// import Icon from 'src/@core/components/icon'
// import { Sidebar } from './sidebar'
// import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'

// type Order = 'asc' | 'desc'

// interface Data {
//   fat: number
//   name: string
//   carbs: number
//   protein: number
//   calories: number
//   price: number
// }

// interface HeadCell {
//   disablePadding: boolean
//   id: keyof Data
//   label: string
//   numeric: boolean
// }

// interface EnhancedTableProps {
//   numSelected: number
//   onRequestSort: (event: MouseEvent<unknown>, property: keyof Data) => void
//   onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void
//   order: Order
//   orderBy: string
//   rowCount: number
// }

// // interface EnhancedTableToolbarProps {
// //   numSelected: number
// // }

// const createData = (name: string, calories: number, fat: number, carbs: number, protein: number, price: number) => {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       {
//         date: '2020-01-05',
//         customerId: '11091700',
//         amount: 3
//       },
//       {
//         date: '2020-01-02',
//         customerId: 'Anonymous',
//         amount: 1
//       }
//     ]
//   }
// }

// const rows = [
//   createData('Cupcake', 305, 3.7, 67, 4.3, 4.0),
//   createData('Donut', 452, 25.0, 51, 4.9, 4.0),
//   createData('Eclair', 262, 16.0, 24, 6.0, 4.0),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 4.0),
//   createData('Honeycomb', 408, 3.2, 87, 6.5, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.0),
//   createData('Jelly Bean', 375, 0.0, 94, 0.0, 4.0),
//   createData('KitKat', 518, 26.0, 65, 7.0, 4.0),
//   createData('Lollipop', 392, 0.2, 98, 0.0, 4.0),
//   createData('Marshmallow', 318, 0, 81, 2.0, 4.0),
//   createData('Nougat', 360, 19.0, 9, 37.0, 4.0),
//   createData('Oreo', 437, 18.0, 63, 4.0, 4.0)
// ]

// function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1
//   }

//   return 0
// }

// function getComparator<Key extends keyof any>(
//   order: Order,
//   orderBy: Key
// ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy)
// }

// // This method is created for cross-browser compatibility, if you don't
// // need to support IE11, you can use Array.prototype.sort() directly
// function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
//   const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0])
//     if (order !== 0) return order

//     return a[1] - b[1]
//   })

//   return stabilizedThis.map(el => el[0])
// }

// const headCells: readonly HeadCell[] = [
//   {
//     id: 'name',
//     numeric: false,
//     disablePadding: true,
//     label: 'Dessert (100g serving)'
//   },
//   {
//     id: 'calories',
//     numeric: true,
//     disablePadding: false,
//     label: 'Calories'
//   },
//   {
//     id: 'fat',
//     numeric: true,
//     disablePadding: false,
//     label: 'Fat (g)'
//   },
//   {
//     id: 'carbs',
//     numeric: true,
//     disablePadding: false,
//     label: 'Carbs (g)'
//   },
//   {
//     id: 'protein',
//     numeric: true,
//     disablePadding: false,
//     label: 'Protein (g)'
//   },
//   {
//     id: 'price',
//     numeric: true,
//     disablePadding: false,
//     label: 'price'
//   }
// ]

// function EnhancedTableHead(props: EnhancedTableProps) {
//   // ** Props
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props
//   const createSortHandler = (property: keyof Data) => (event: MouseEvent<unknown>) => {
//     onRequestSort(event, property)
//   }

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding='checkbox'>
//           <Checkbox
//             onChange={onSelectAllClick}
//             checked={rowCount > 0 && numSelected === rowCount}
//             inputProps={{ 'aria-label': 'select all desserts' }}
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//           />
//         </TableCell>
//         {headCells.map(headCell => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               onClick={createSortHandler(headCell.id)}
//               direction={orderBy === headCell.id ? order : 'asc'}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component='span' sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   )
// }

// const EnhancedTable = () => {
//   // ** States
//   const [page, setPage] = useState<number>(0)
//   const [order, setOrder] = useState<Order>('asc')
//   const [rowsPerPage, setRowsPerPage] = useState<number>(5)
//   const [orderBy, setOrderBy] = useState<keyof Data>('calories')
//   const [selected, setSelected] = useState<readonly string[]>([])

//   // ** collapse-State (개별 펼치기)
//   // const [openAll, setOpenAll] = useState<boolean>(false)

//   const handleRequestSort = (event: MouseEvent<unknown>, property: keyof Data) => {
//     const isAsc = orderBy === property && order === 'asc'
//     setOrder(isAsc ? 'desc' : 'asc')
//     setOrderBy(property)
//   }

//   const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
//     if (event.target.checked) {
//       const newSelecteds = rows.map(n => n.name)
//       setSelected(newSelecteds)

//       return
//     }
//     setSelected([])
//   }

//   const handleClick = (event: MouseEvent<unknown>, name: string) => {
//     const selectedIndex = selected.indexOf(name)
//     let newSelected: readonly string[] = []

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name)
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1))
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1))
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
//     }

//     setSelected(newSelected)
//   }

//   const handleChangePage = (event: unknown, newPage: number) => {
//     setPage(newPage)
//   }

//   const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
//     setRowsPerPage(parseInt(event.target.value, 10))
//     setPage(0)
//   }

//   const isSelected = (name: string) => selected.indexOf(name) !== -1

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

//   // 테이블 내용
//   const tableBody = () => {
//     return (
//       <>
//         <TableBody>
//           {/* if you don't need to support IE11, you can replace the `stableSort` call with: rows.slice().sort(getComparator(order, orderBy)) */}
//           {stableSort(rows, getComparator(order, orderBy))
//             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             .map((row, index) => {
//               const isItemSelected = isSelected(row.name)
//               const labelId = `enhanced-table-checkbox-${index}`

//               // ** collapse-State (개별 펼치기)
//               const [open, setOpen] = useState<boolean>(false)
//               let table_id: string = 'id_' + index
//               table_id = open ? table_id + '_open' : table_id + '_notOpened'

//               // if (table_id.split('_')[2] === +'notOpened') {
//               //   setOpen(false)
//               // } else {
//               //   setOpen(true)
//               // }

//               console.log(open)
//               console.log(table_id)

//               return (
//                 <>
//                   <TableRow
//                     hover
//                     tabIndex={-1}
//                     key={row.name}
//                     role='checkbox'
//                     selected={isItemSelected}
//                     aria-checked={isItemSelected}
//                     onClick={event => handleClick(event, row.name)}
//                   >
//                     {/* 체크박스 */}
//                     <TableCell padding='checkbox'>
//                       <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
//                     </TableCell>

//                     {/* 펼치기 버튼 */}
//                     <TableCell component='th' scope='row' padding='none' id={`enhanced-table-spread-${index}`}>
//                       <IconButton aria-label='expand row' size='small' id={table_id} onClick={() => setOpen(!open)}>
//                         <Icon icon={open ? 'mdi:chevron-up' : 'mdi:chevron-down'} />
//                       </IconButton>
//                       {row.name}
//                     </TableCell>

//                     {/* 셀 제목 */}
//                     <TableCell align='right'>{row.calories}</TableCell>
//                     <TableCell align='right'>{row.fat}</TableCell>
//                     <TableCell align='right'>{row.carbs}</TableCell>
//                     <TableCell align='right'>{row.protein}</TableCell>
//                     <TableCell align='right'>{row.price}</TableCell>
//                   </TableRow>

//                   {/* 반복하고 싶다 히스토리 */}
//                   <TableRow>
//                     <TableCell colSpan={6} sx={{ py: '0 !important' }}>
//                       <Collapse in={open} timeout='auto' unmountOnExit>
//                         <Box sx={{ m: 2, ml: 20 }}>
//                           <Typography variant='h6' gutterBottom component='div'>
//                             History
//                           </Typography>
//                           <Table size='small' aria-label='purchases'>
//                             <TableHead>
//                               <TableRow>
//                                 <TableCell>Date</TableCell>
//                                 <TableCell>Customer</TableCell>
//                                 <TableCell align='right'>Amount</TableCell>
//                                 <TableCell align='right'>Total price ($)</TableCell>
//                               </TableRow>
//                             </TableHead>
//                             <TableBody>
//                               {row.history.map(historyRow => (
//                                 <TableRow key={historyRow.date}>
//                                   <TableCell component='th' scope='row'>
//                                     {historyRow.date}
//                                   </TableCell>
//                                   <TableCell>{historyRow.customerId}</TableCell>
//                                   <TableCell align='right'>{historyRow.amount}</TableCell>
//                                   <TableCell align='right'>
//                                     {Math.round(historyRow.amount * row.price * 100) / 100}
//                                   </TableCell>
//                                 </TableRow>
//                               ))}
//                             </TableBody>
//                           </Table>
//                         </Box>
//                       </Collapse>
//                     </TableCell>
//                   </TableRow>
//                 </>
//               )
//             })}
//           {emptyRows > 0 && (
//             <TableRow
//               sx={{
//                 height: 53 * emptyRows
//               }}
//             >
//               <TableCell colSpan={6} />
//             </TableRow>
//           )}
//         </TableBody>
//       </>
//     )
//   }

//   return (
//     <Card>
//       <CardHeader title='전체 리스트 및 조회 결과' />

//       {/* 상단바 부분 임포트 */}
//       <Sidebar length={rows.length}></Sidebar>

//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle'>
//           <EnhancedTableHead
//             order={order}
//             orderBy={orderBy}
//             rowCount={rows.length}
//             numSelected={selected.length}
//             onRequestSort={handleRequestSort}
//             onSelectAllClick={handleSelectAllClick}
//           />
//           {/* 테이블 내용 */}
//           {tableBody()}
//         </Table>
//       </TableContainer>
//       <TablePagination
//         page={page}
//         component='div'
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         onPageChange={handleChangePage}
//         rowsPerPageOptions={[5, 10, 25]}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Card>
//   )
// }

// export default EnhancedTable
