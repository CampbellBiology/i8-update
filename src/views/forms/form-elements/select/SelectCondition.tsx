// ** MUI Imports
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'

// ** Demo Components Imports
import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, TextField } from '@mui/material'
import { ReactDatePickerProps } from 'react-datepicker'
import PickersTime from 'src/views/forms/form-elements/pickers/PickersTime'

// ** 달력용
import { useTheme } from '@mui/material/styles'

// ** Source code imports
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Source code imports
import * as source from 'src/views/forms/form-elements/pickers/PickersSourceCode'
import PageHeader from 'src/@core/components/page-header'
import PickersBasic from '../pickers/PickersBasic'
import { positions } from '@mui/system'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
}

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder'
// ]

export default function SelectCondition({ condition }: any): JSX.Element {
  ////1. 조건틀
  //1-1. 단일 선택형
  const [value, setValue] = useState<string>('')
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

  //1-2.복수 선택형
  const [multiValue, setMultiValue] = useState<string[]>([])
  const handleChangeMulti = (event: SelectChangeEvent<string[]>) => {
    setMultiValue(event.target.value as string[])
  }

  //1-3. Date-picker형

  //1-4. 직접입력형

  ////2. 조건에 따른 검색 범위 세팅
  //2-1. 단일 선택
  const simpleSelect = (condition: string) => {
    // 검색 범위 리스트 세팅, condition에 따라 세팅해주시
    const productNameList: string[] = ['I8-sensor', 'mmWave', 'sensor1', 'sensor2']

    return (
      <>
        <div id={'normal'} style={{ width: '400px', display: 'block' }}>
          <FormControl fullWidth>
            <InputLabel id='demo-single-checkbox-label' style={{ width: '50%' }}>
              {condition}
            </InputLabel>
            <Select
              label={condition}
              value={value}
              MenuProps={MenuProps}
              onChange={handleChange}
              id='demo-simple-select-helper'
              labelId='demo-simple-select-helper-label'
            >
              {productNameList.map(name => (
                <MenuItem key={name} value={name}>
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </>
    )
  }

  //2-2. 복수 선택
  const multiSelect = (condition: string) => {
    // 검색 범위 리스트 세팅, condition에 따라 세팅해주시
    const productNameList: string[] = ['I8-sensor', 'mmWave', 'sensor1', 'sensor2']

    return (
      <>
        <div id={'normal'} style={{ width: '400px', display: 'block' }}>
          <FormControl fullWidth>
            <InputLabel id='demo-multiple-checkbox-label' style={{ width: '50%' }}>
              {condition}
            </InputLabel>
            <Select
              multiple
              label={condition}
              value={multiValue}
              MenuProps={MenuProps}
              onChange={handleChangeMulti}
              id='demo-multiple-checkbox'
              labelId='demo-multiple-checkbox-label'
              renderValue={selected => (selected as unknown as string[]).join(', ')}
            >
              {productNameList.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={value.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </>
    )
  }

  //2-3. date-picker형
  const theme = useTheme()
  const { direction } = theme
  const popperPlacement: ReactDatePickerProps['popperPlacement'] = direction === 'ltr' ? 'bottom-start' : 'bottom-end'
  const DatePicker = (condition: string) => {
    return (
      <DatePickerWrapper id={'datepicker'} style={{ width: '400px', display: 'block' }}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <PickersTime popperPlacement={popperPlacement} condition={condition} />
          </Grid>
        </Grid>
      </DatePickerWrapper>
    )
  }

  //2-4. input형

  //각 검색 조건에 맞는 검색 Form할당
  const switchCondition = (condition: string) => {
    switch (condition) {
      case '라벨명':
      case '업체명':
      case '서비스명':
      case '서비스 상태':
      case '기기 상태':
      case '기기 인증 진행 상태':
      case '주소 별칭':
        return simpleSelect(condition)

      case '주소':
        return <TextField id='color-outlined' label='주소' color='success' />

      case '모듈명':
      case '모듈 SN':
      case '모듈 UID':
      case '제품명':
      case '제품 SN':
      case '최종 등록자':
        //   return <>복수선택</>
        return multiSelect(condition)

      case '기기 인증 일시':
      case '최종 등록일':
        return DatePicker(condition)
    }
  }

  return (
    <>
      <Grid>
        <CardContent>
          <div style={{ marginLeft: '-20px', width: '523px', display: 'flex', alignItems: 'center' }}>
            <Typography marginRight={8} textAlign={'right'} width={90} sx={{ whiteSpace: 'normal' }}>
              {/* {condition} */}
            </Typography>
            {switchCondition(condition)}
          </div>
        </CardContent>
      </Grid>
    </>
  )
}
