import { Box, Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, TextField } from '@mui/material'

import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'

interface IProps {
  type: 'address' | 'group' | 'place'
}

export const SelfWrite = ({ type }: IProps) => {
  // ** States
  const [address, setAddress] = useState<string>()
  const [group, setGroup] = useState<string>()
  const [place, setPlace] = useState<string>()
  const [isSelf, setIsSelf] = useState<boolean>(false)

  // Handle Select
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    if (event.target.value === 'selfWrite') {
      setIsSelf(!isSelf)
    } else setGroup(event.target.value as string)
  }

  // const selfWrite = () => {
  //   console.log(1)
  //   setIsSelf(true)
  // }

  return (
    <Grid item xs={12} sm={10}>
      {!isSelf ? (
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-outlined-label'>
              {type === 'address' ? '주소' : type === 'group' ? '그룹' : '장소'}
            </InputLabel>

            <Select
              fullWidth
              // value={language}
              onChange={handleSelectChange}
              id='form-layouts-separator-multiple-select'
              labelId='form-layouts-separator-multiple-select-label'
              input={
                <OutlinedInput
                  label={type === 'address' ? '주소' : type === 'group' ? '그룹' : '장소'}
                  id={type === 'address' ? 'addressInput' : type === 'group' ? 'groupInput' : 'placeInput'}
                />
              }
            >
              <MenuItem value='intsain'>인트세인</MenuItem>
              <MenuItem value='French'>French</MenuItem>
              <MenuItem value='selfWrite'>직접 입력</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      ) : (
        <Grid sx={{ display: 'flex', flexDirection: 'row', fontWeight: 600 }}>
          <Grid xs={9} sm={18}>
            <TextField
              fullWidth
              label={type === 'address' ? '주소' : type === 'group' ? '그룹' : '장소'}
              placeholder={type === 'address' ? '주소' : type === 'group' ? '그룹' : '장소'}
            />
          </Grid>
          <Grid item xs={2} sm={2}>
            <Button
              variant='contained'
              sx={{
                padding: { xs: 3, sm: 4 },
                height: '100%',
                maxHeight: '56px',
                ml: 4
              }}
              onClick={() => setIsSelf(false)}
            >
              취소
            </Button>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}
