// import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
// import { useRef } from 'react'

// import { IDialogProps } from './IDialogInterface'

// export const DialogDelete = ({ open, scroll, handleClose }: IDialogProps) => {
//   const descriptionElementRef = useRef<HTMLElement>(null)

//   return (
//     <>
//       <div className='demo-space-x'>
//         <Dialog
//           open={open}
//           scroll={scroll}
//           onClose={handleClose}
//           aria-labelledby='scroll-dialog-title'
//           aria-describedby='scroll-dialog-description'

//           // fullWidth
//         >
//           <DialogTitle sx={{ fontWeight: '400' }} id='scroll-dialog-title'>
//             Alert
//           </DialogTitle>
//           <DialogContent dividers={scroll === 'paper'}>
//             <DialogContentText
//               sx={{ width: '15rem' }}
//               id='scroll-dialog-description'
//               ref={descriptionElementRef}
//               tabIndex={-1}
//             >
//               삭제하시겠습니까?
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions sx={{ p: theme => `${theme.spacing(2.5)} !important` }}>
//             <Button onClick={handleClose}>취소</Button>
//             <Button onClick={handleClose}>확인</Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     </>
//   )
// }
