// ** React Import
import { ReactElement } from 'react'

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

interface TableBodyRowType {
  id: number
  group: string
  SN: string
  location: string
  setting_temp: number
  setting_hum: number
  detected_temp: number
  detected_hum: number
  alarm: string
}

interface CellType {
  row: TableBodyRowType
}

interface RoleObj {
  [key: string]: {
    color: ThemeColor
    icon: ReactElement
  }
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

// const rows: TableBodyRowType[] = [
//   {
//     id: 1,
//     group: '동의대 산학협력관',
//     location: '101',
//     SN: 'mmWave-123123',
//     setting_temp: 12,
//     setting_hum: 30,
//     detected_temp: 18,
//     detected_hum: 50,
//     alarm: '12:00'
//   },
//   {
//     id: 2,
//     group: '동의대 산학협력관',
//     location: '102',
//     SN: 'mmWave-123123',
//     setting_temp: 12,
//     setting_hum: 30,
//     detected_temp: 18,
//     detected_hum: 50,
//     alarm: '12:00'
//   },
//   {
//     id: 3,
//     group: '인트세인',
//     location: '연구소장',
//     SN: 'mmWave-123123',
//     setting_temp: 12,
//     setting_hum: 30,
//     detected_temp: 18,
//     detected_hum: 50,
//     alarm: '12:00'
//   },
//   {
//     id: 4,
//     group: '인트세인',
//     location: '사무실',
//     SN: 'mmWave-123123',
//     setting_temp: 12,
//     setting_hum: 30,
//     detected_temp: 18,
//     detected_hum: 50,
//     alarm: '12:00'
//   },
//   {
//     id: 5,
//     group: '가야여자중학교',
//     location: '교무실',
//     SN: 'mmWave-123123',
//     setting_temp: 12,
//     setting_hum: 30,
//     detected_temp: 18,
//     detected_hum: 50,
//     alarm: '12:00'
//   }
// ]

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
    renderCell: ({ row }: CellType) => {
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
    flex: 0.2,
    minWidth: 140,
    field: 'SN',
    headerName: '기기 번호',
    renderCell: ({ row }: CellType) => (
      <Typography variant='body2' sx={{ letterSpacing: '0.25px', fontSize: '0.8rem' }}>
        {row.SN}
      </Typography>
    )
  },
  {
    flex: 0.2,
    minWidth: 150,
    field: 'role',
    headerName: '설정 온도/습도',
    renderCell: ({ row }: CellType) => (
      <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { fontSize: '1rem' } }}>
        <CustomAvatar skin='light' color={'error'} sx={{ mr: 2, width: 20, height: 20 }}>
          <Icon icon='mdi-thermometer' />
        </CustomAvatar>
        <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
          {row.setting_temp}
        </Typography>
        <CustomAvatar skin='light' color={'info'} sx={{ mr: 2, width: 20, height: 20, ml: 7 }}>
          <Icon icon='mdi-water' />
        </CustomAvatar>
        <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
          {row.setting_hum}
        </Typography>
      </Box>
    )
  },
  {
    flex: 0.2,
    minWidth: 150,
    field: 'status',
    headerName: '측정 온도/습도',
    renderCell: ({ row }: CellType) => (
      <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { fontSize: '1rem' } }}>
        <CustomAvatar skin='light' color={'error'} sx={{ mr: 2, width: 20, height: 20 }}>
          <Icon icon='mdi-thermometer' />
        </CustomAvatar>
        <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
          {row.detected_temp}
        </Typography>
        <CustomAvatar skin='light' color={'info'} sx={{ mr: 2, width: 20, height: 20, ml: 7 }}>
          <Icon icon='mdi-water' />
        </CustomAvatar>
        <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
          {row.detected_hum}
        </Typography>
      </Box>
    )
  },
  {
    flex: 0.1,
    minWidth: 100,
    field: 'alarm',
    headerName: '알람시각',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.alarm}</Typography>
  }
]

const WarningTable = ({ warningRows }) => {
  return (
    <Card>
      <DataGrid
        autoHeight
        hideFooter
        rows={warningRows}
        columns={columns}
        disableRowSelectionOnClick
        pagination={undefined}
      />
    </Card>
  )
}

export default WarningTable
