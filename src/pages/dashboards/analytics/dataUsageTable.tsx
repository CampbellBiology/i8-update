// ** React Import
import { MouseEvent, ReactElement, useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { dataUsageRows } from '../data/dataUsageData'

// interface TableBodyRowType {
//   id: number
//   group: string
//   SN: string
//   location: string
//   setting_temp: number
//   setting_hum: number
//   detected_temp: number
//   detected_hum: number
//   alarm: string
// }

// interface CellType {
//   row: TableBodyRowType
// }

// interface RoleObj {
//   [key: string]: {
//     color: ThemeColor
//     icon: ReactElement
//   }
// }

// interface StatusObj {
//   [key: string]: {
//     color: ThemeColor
//   }
// }

const roleObj: RoleObj = {
  author: {
    color: 'success',
    icon: <Icon icon='mdi:cog' />
  },
  maintainer: {
    color: 'primary',
    icon: <Icon icon='mdi:chart-pie' />
  },
  editor: {
    color: 'info',
    icon: <Icon icon='mdi:pencil' />
  },
  subscriber: {
    color: 'warning',
    icon: <Icon icon='mdi:account-outline' />
  }
}

const statusObj: StatusObj = {
  active: { color: 'success' },
  pending: { color: 'warning' },
  inactive: { color: 'secondary' }
}

const renderUserAvatar = (row: TableBodyRowType) => {
  if (row.avatarSrc) {
    return <CustomAvatar src={row.avatarSrc} sx={{ mr: 3, width: 30, height: 30 }} />
  } else {
    return (
      <CustomAvatar skin='light' sx={{ mr: 3, width: 30, height: 30, fontSize: '.8rem' }}>
        {getInitials(row.name ? row.name : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const columns: GridColDef[] = [
  {
    flex: 0.3,
    field: 'location',
    minWidth: 140,
    headerName: '설치 장소',
    renderCell: ({ row }) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderUserAvatar(row)} */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{
                mb: -0.5,
                fontWeight: 600,
                lineHeight: 1.72,
                fontSize: '0.8rem',
                letterSpacing: '0.22px'
              }}
            >
              {row.group}
            </Typography>
            <Typography variant='body2' sx={{ fontSize: '0.75rem', letterSpacing: '0.4px' }}>
              {row.location}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.3,
    minWidth: 140,
    field: 'SN',
    headerName: '기기 번호',
    renderCell: ({ row }) => (
      <Typography variant='body2' sx={{ letterSpacing: '0.25px', fontSize: '0.8rem' }}>
        {row.SN}
      </Typography>
    )
  },
  {
    flex: 0.3,
    minWidth: 140,
    field: 'dataUsage',
    headerName: '데이터 사용량',
    renderCell: ({ row }) => (
      <Typography variant='body2' sx={{ letterSpacing: '0.25px', fontSize: '0.8rem' }}>
        {row.dataUsage}
      </Typography>
    )
  }
]

const DataUsageTable = ({ dataUsageRows }) => {
  const [alignment, setAlignment] = useState<string | null>('누적 사용량')
  const handleAlignment = (event: MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment)
  }
  // console.log(dataUsageRows)

  const [row, setRow] = useState([])

  useEffect(() => {
    const filteredRows = dataUsageRows.filter(el => el.type === alignment)
    setRow(filteredRows[0].data)
  }, [dataUsageRows, alignment])

  console.log(row)

  return (
    <>
      <Card>
        <Box sx={{ m: 0, width: '100%' }}>
          <ToggleButtonGroup
            exclusive
            color='primary'
            value={alignment}
            onChange={handleAlignment}
            sx={{ width: '100%' }}
          >
            <ToggleButton sx={{ borderRadius: 0, width: '100%' }} value='누적 사용량'>
              누적 사용량
            </ToggleButton>
            <ToggleButton sx={{ borderRadius: 0, width: '100%' }} value='일평균 사용량'>
              일평균 사용량
            </ToggleButton>
            <ToggleButton sx={{ borderRadius: 0, width: '100%' }} value='월평균 사용량'>
              월평균 사용량
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <DataGrid
          autoHeight
          hideFooter
          rows={row}
          columns={columns}
          disableRowSelectionOnClick
          pagination={undefined}
        />
      </Card>
    </>
  )
}

export default DataUsageTable
