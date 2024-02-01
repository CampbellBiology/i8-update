// import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

// // ** React Imports
// import { ChangeEvent, useRef, forwardRef, useState } from 'react'
// import { IDialogProps } from './IDialogInterface'

// // ** MUI Imports
// import Card from '@mui/material/Card'
// import Grid from '@mui/material/Grid'
// import Button from '@mui/material/Button'
// import Divider from '@mui/material/Divider'
// import MenuItem from '@mui/material/MenuItem'
// import TextField from '@mui/material/TextField'
// import CardHeader from '@mui/material/CardHeader'
// import InputLabel from '@mui/material/InputLabel'
// import IconButton from '@mui/material/IconButton'
// import Typography from '@mui/material/Typography'
// import CardContent from '@mui/material/CardContent'
// import CardActions from '@mui/material/CardActions'
// import FormControl from '@mui/material/FormControl'
// import OutlinedInput from '@mui/material/OutlinedInput'
// import InputAdornment from '@mui/material/InputAdornment'
// import Select, { SelectChangeEvent } from '@mui/material/Select'

// // ** Icon Imports
// import Icon from 'src/@core/components/icon'

// interface State {
//   password: string
//   password2: string
//   showPassword: boolean
//   showPassword2: boolean
// }

// export const DialogDeviceCreate = ({ open, scroll, handleClose }: IDialogProps) => {
//   const descriptionElementRef = useRef<HTMLElement>(null)

//   // ** States
//   const [language, setLanguage] = useState<string[]>([])
//   const [values, setValues] = useState<State>({
//     password: '',
//     password2: '',
//     showPassword: false,
//     showPassword2: false
//   })

//   // Handle Password
//   const handlePasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
//     setValues({ ...values, [prop]: event.target.value })
//   }
//   const handleClickShowPassword = () => {
//     setValues({ ...values, showPassword: !values.showPassword })
//   }

//   // Handle Confirm Password
//   const handleConfirmChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
//     setValues({ ...values, [prop]: event.target.value })
//   }
//   const handleClickShowConfirmPassword = () => {
//     setValues({ ...values, showPassword2: !values.showPassword2 })
//   }

//   // Handle Select
//   const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
//     setLanguage(event.target.value as string[])
//   }

//   return (
//     <>
//       <div className='demo-space-x'>
//         <Dialog
//           open={open}
//           scroll={scroll}
//           onClose={handleClose}
//           aria-labelledby='scroll-dialog-title'
//           aria-describedby='scroll-dialog-description'
//           fullWidth
//           maxWidth={'lg'}
//         >
//           <DialogTitle sx={{ fontWeight: '400' }} id='scroll-dialog-title'>
//             기기 및 모듈 정보 등록
//           </DialogTitle>
//           <DialogContent dividers={scroll === 'paper'}>
//             <DialogContentText id='scroll-dialog-description' ref={descriptionElementRef} tabIndex={-1}>
//               {/* <Divider sx={{ m: '0 !important' }} /> */}
//               <form onSubmit={e => e.preventDefault()}>
//                 <CardContent>
//                   <Grid container spacing={5}>
//                     <Grid item xs={12}>
//                       <Typography variant='body1' sx={{ fontWeight: 600 }}>
//                         1. 기기 정보
//                       </Typography>
//                     </Grid>

//                     {/* 한줄 */}
//                     <Grid item xs={10} sm={4}>
//                       <TextField fullWidth label='라벨명' placeholder='라벨명' />
//                     </Grid>
//                     <Grid item xs={2} sm={2}>
//                       버튼자리
//                     </Grid>
//                     <Grid item xs={10} sm={4}>
//                       <FormControl fullWidth>
//                         <InputLabel id='form-layouts-separator-multiple-select-label'>업체명</InputLabel>
//                         <Select
//                           multiple
//                           value={language}
//                           onChange={handleSelectChange}
//                           id='form-layouts-separator-multiple-select'
//                           labelId='form-layouts-separator-multiple-select-label'
//                           input={<OutlinedInput label='업체명' id='select-multiple-company' />}
//                         >
//                           <MenuItem value='intsain'>인트세인</MenuItem>
//                           <MenuItem value='French'>French</MenuItem>
//                           <MenuItem value='Spanish'>Spanish</MenuItem>
//                         </Select>
//                       </FormControl>
//                     </Grid>

//                     <Grid item xs={2} sm={2}>
//                       버튼자리
//                     </Grid>

//                     {/* 한줄 */}

//                     <Grid item xs={10} sm={4}>
//                       <FormControl fullWidth>
//                         <InputLabel id='demo-single-checkbox-label' style={{ width: '50%' }}>
//                           서비스명
//                         </InputLabel>
//                         <Select
//                           label={'서비스명'}
//                           id='demo-simple-select-helper'
//                           labelId='demo-simple-select-helper-label'
//                         >
//                           <MenuItem value='고장진단시스템'>고장진단시스템</MenuItem>
//                           <MenuItem value='French'>French</MenuItem>
//                           <MenuItem value='Spanish'>Spanish</MenuItem>
//                         </Select>
//                       </FormControl>
//                     </Grid>
//                     <Grid item xs={2} sm={2}>
//                       버튼자리
//                     </Grid>
//                     <Grid item xs={10} sm={4}>
//                       <FormControl fullWidth>
//                         <InputLabel id='demo-single-checkbox-label' style={{ width: '50%' }}>
//                           서비스 상태
//                         </InputLabel>
//                         <Select
//                           label={'서비스 상태'}
//                           id='demo-simple-select-helper'
//                           labelId='demo-simple-select-helper-label'
//                         >
//                           <MenuItem value='사용 중'>사용 중</MenuItem>
//                           <MenuItem value='사용 중단'>사용 중단</MenuItem>
//                           <MenuItem value='Spanish'>Spanish</MenuItem>
//                         </Select>
//                       </FormControl>
//                     </Grid>
//                     <Grid item xs={2} sm={2}>
//                       버튼자리
//                     </Grid>
//                     <Grid item xs={10} sm={4} sx={{ display: 'flex', flexDirection: 'row' }}>
//                       <TextField fullWidth label='제품SN' placeholder='제품SN' />
//                     </Grid>
//                     <Grid item xs={2} sm={2}>
//                       <Button
//                         variant='contained'
//                         sx={{
//                           padding: { xs: 3, sm: 4 },
//                           height: '100%',
//                           maxHeight: '56px'
//                         }}
//                       >
//                         중복 확인
//                       </Button>
//                     </Grid>
//                     <Grid item xs={10} sm={4}>
//                       <TextField fullWidth label='제품명' placeholder='제품명' />
//                     </Grid>
//                     <Grid item xs={2} sm={2}>
//                       버튼자리
//                     </Grid>
//                     <Grid item xs={10} sm={4}>
//                       <FormControl fullWidth>
//                         <InputLabel id='demo-single-checkbox-label' style={{ width: '50%' }}>
//                           기기 상태
//                         </InputLabel>
//                         <Select
//                           label={'기기 상태'}
//                           id='demo-simple-select-helper'
//                           labelId='demo-simple-select-helper-label'
//                         >
//                           <MenuItem value='사용 중'>사용 중</MenuItem>
//                           <MenuItem value='사용 중단'>사용 중단</MenuItem>
//                           <MenuItem value='Spanish'>Spanish</MenuItem>
//                         </Select>
//                       </FormControl>
//                     </Grid>
//                     <Grid item xs={2} sm={2}>
//                       버튼자리
//                     </Grid>
//                     {/* 모듈정보 */}
//                     {/* 모듈정보 */}
//                     {/* 모듈정보 */}
//                     <Grid item xs={12}>
//                       <Divider sx={{ mb: '0 !important' }} />
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Typography variant='body1' sx={{ fontWeight: 600, mt: 5 }}>
//                         2. 모듈 정보
//                       </Typography>
//                     </Grid>

//                     {/* 모듈1단위 */}
//                     <Grid item xs={8} sm={1} sx={{ display: 'flex', flexDirection: 'row', fontWeight: 600, mt: 2 }}>
//                       모듈1
//                     </Grid>
//                     <Grid item xs={10} sm={3.5} sx={{ display: 'flex', flexDirection: 'row' }}>
//                       <TextField fullWidth label='모듈SN' placeholder='모듈SN' />
//                     </Grid>
//                     <Grid item xs={2} sm={2}>
//                       <Button
//                         variant='contained'
//                         sx={{
//                           padding: { xs: 3, sm: 4 },
//                           height: '100%',
//                           maxHeight: '56px'
//                         }}
//                       >
//                         중복 확인
//                       </Button>
//                     </Grid>
//                     <Grid item xs={10} sm={3.5} sx={{ display: 'flex', flexDirection: 'row' }}>
//                       <TextField fullWidth label='모듈UID' placeholder='모듈UID' />
//                     </Grid>
//                     <Grid item xs={2} sm={2}>
//                       <Button
//                         variant='contained'
//                         sx={{
//                           padding: { xs: 3, sm: 4 },
//                           height: '100%',
//                           maxHeight: '56px'
//                         }}
//                       >
//                         중복 확인
//                       </Button>
//                     </Grid>

//                     <Grid item xs={2} sm={1} sx={{ display: { xs: 'none', sm: 'flex' } }}></Grid>
//                     <Grid item xs={10} sm={3.5} sx={{ display: 'flex', flexDirection: 'row' }}>
//                       <TextField fullWidth label='모듈명' placeholder='모듈명' />
//                     </Grid>
//                     <Grid item xs={2} sm={2}>
//                       버튼
//                     </Grid>
//                     <Grid item xs={10} sm={3.5} sx={{ display: 'flex', flexDirection: 'row' }}>
//                       <TextField fullWidth label='모듈 분류' placeholder='모듈 분류' />
//                     </Grid>
//                     <Grid item xs={2} sm={2}>
//                       버튼
//                     </Grid>
//                     {/* 모듈1단위 */}

//                     {/* 비고란 */}
//                     <Grid item xs={8} sm={1} sx={{ fontWeight: '600' }}>
//                       비고
//                     </Grid>
//                     <Grid item xs={12} sm={11} sx={{ display: 'flex', flexDirection: 'row', minHeight: '50px' }}>
//                       {/* <TextField fullWidth label='비고' placeholder='비고' /> */}
//                       <TextField fullWidth multiline id='textarea-outlined' placeholder='비고' label='비고' />
//                     </Grid>

//                     {/* 비고란 */}
//                   </Grid>
//                 </CardContent>
//                 {/* <Divider sx={{ m: '0 !important' }} /> */}
//                 {/* <CardActions>
//                   <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
//                     Submit
//                   </Button>
//                   <Button type='reset' size='large' color='secondary' variant='outlined'>
//                     Reset
//                   </Button>
//                 </CardActions> */}
//               </form>
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
