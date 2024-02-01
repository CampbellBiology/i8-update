// // ** React Imports
// import { useEffect, useRef, useState } from 'react'

// // ** MUI Imports
// import Button from '@mui/material/Button'
// import { DialogProps } from '@mui/material/Dialog'

// import { Box } from '@mui/system'
// import { DialogDeviceCreate } from './Dialog_device_register'
// import { DialogDelete } from './Dialog_delete'
// import { DialogDeviceUpdate } from './Dialog_device_update'

// //* excel export
// import { CSVLink } from 'react-csv'

// // import { CSVLink, CSVDownload } from 'react-csv'

// interface IProps {
//   length?: number
//   headerKey: any
//   items: any
//   openEverySecondRows?: () => void
//   closeEverySecondRows?: () => void
//   onChangeSelectAll1: any
//   isClicked: boolean
//   setIsClicked: any
// }

// export const Sidebar = ({
//   length,
//   headerKey,
//   items,
//   openEverySecondRows,
//   closeEverySecondRows,
//   onChangeSelectAll1,
//   isClicked,
//   setIsClicked
// }: IProps) => {
//   // const [isClicked, setIsClicked] = useState<boolean>(false)

//   // const openAll = () => {
//   //   console.log('모두 펼치기')
//   //   for (let i = 0; i < length; i++) {
//   //     document.getElementById('id_' + i + '_notOpened')?.click()
//   //   }
//   // }

//   // const closeAll = () => {
//   //   console.log('모두 접기')
//   //   for (let i = 0; i < length; i++) {
//   //     document.getElementById('id_' + i + '_opened')?.click()
//   //   }
//   // }

//   // ** States
//   const [open, setOpen] = useState<boolean>(false)
//   const [scroll, setScroll] = useState<DialogProps['scroll']>('paper')
//   const [clickedText, setClickedText] = useState<string>('')

//   //console.log(clickedText)

//   // ** Ref
//   const descriptionElementRef = useRef<HTMLElement>(null)

//   const handleClickOpen = (scrollType: DialogProps['scroll'], dialogType: string) => () => {
//     setOpen(true)
//     setScroll(scrollType)
//     setClickedText(dialogType)
//   }

//   const handleClose = () => setOpen(false)

//   useEffect(() => {
//     if (open) {
//       const { current: descriptionElement } = descriptionElementRef
//       if (descriptionElement !== null) {
//         descriptionElement.focus()
//       }
//     }
//   }, [open])

//   const hours = new Date().getHours()
//   const minutes = new Date().getMinutes()

//   return (
//     <>
//       <Box
//         sx={{
//           gap: 5,
//           display: 'flex',
//           flexWrap: 'wrap',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           p: theme => theme.spacing(2, 2, 4, 5)
//         }}
//       >
//         <CSVLink data={items} headers={headerKey} filename={`test_${hours}시_${minutes}분.csv`}>
//           <Button variant='contained'>Download </Button>
//         </CSVLink>

//         <Box
//           sx={{
//             gap: 5,
//             display: 'flex',
//             flexWrap: 'wrap'
//           }}
//         >
//           <Button
//             variant='text'
//             sx={{
//               ':hover': { color: '#9155FD', fontWeight: '600' },
//               color: '#292929',
//               fontWeight: '200'
//             }}
//             id={'delete'}
//             onClick={handleClickOpen('paper', 'delete')}
//           >
//             선택 삭제
//           </Button>
//           <Button
//             variant='text'
//             sx={{
//               ':hover': { color: '#9155FD', fontWeight: '600' },
//               color: '#292929',
//               fontWeight: '200'
//             }}
//             id={'update'}
//             onClick={handleClickOpen('paper', 'update')}
//           >
//             선택 수정
//           </Button>
//           <Button
//             variant='text'
//             sx={{
//               ':hover': { color: '#9155FD', fontWeight: '600' },
//               color: '#292929',
//               fontWeight: '200'
//             }}
//             id={'create'}
//             onClick={handleClickOpen('paper', 'create')}
//           >
//             신규 등록
//           </Button>
//           <div
//             onClick={() => {
//               setIsClicked(!isClicked)

//               // isClicked ? closeAll() : openAll()
//             }}
//           >
//             <Button
//               variant='text'
//               sx={{
//                 ':hover': { color: '#9155FD', fontWeight: '600' },
//                 color: isClicked ? '#9155FD' : '#292929',
//                 fontWeight: isClicked ? '600' : '200'
//               }}
//               onClick={() => onChangeSelectAll1(isClicked)}
//             >
//               {/* onClick={isClicked ? closeEverySecondRows : openEverySecondRows} */}
//               {isClicked ? '모두 접기' : '모두 펼치기'}
//             </Button>
//           </div>
//         </Box>
//       </Box>

//       {/* Dialog영역 */}
//       {clickedText === 'create' ? (
//         <DialogDeviceCreate open={open} scroll={scroll} handleClose={handleClose} />
//       ) : clickedText === 'update' ? (
//         <DialogDeviceUpdate open={open} scroll={scroll} handleClose={handleClose} />
//       ) : (
//         <DialogDelete open={open} scroll={scroll} handleClose={handleClose} />
//       )}
//     </>
//   )
// }
