
// ** MUI Imports
import Box from '@mui/material/Box'
import { GridToolbarExport } from '@mui/x-data-grid'
import ButtonsCustomed from 'src/views/components/buttons/ButtonsCustomed'


//상단 버튼들
const ServerSideToolbar2 = () => {
  return (
    <Box
      sx={{
        gap: 5,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: theme => theme.spacing(2, 5, 4, 5)

      }}
    >
      {/* export 버튼 */}
      <GridToolbarExport printOptions={{ disableToolbarButton: true }} />

      <Box sx={{
        gap: 5,
        display: 'flex',
        flexWrap: 'wrap',}}>
      <ButtonsCustomed text={'선택 삭제'}/>
      <ButtonsCustomed text={'선택 수정'}/>
      <ButtonsCustomed text={'신규 등록'}/>
      <ButtonsCustomed text={'모두 펼치기'}/>
      </Box>
    </Box>
  )
}

export default ServerSideToolbar2
