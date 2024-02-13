import { Box, Card, CardHeader, Grid } from "@mui/material"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'

const RealTime = () => {

  const [deviceImage, setDeviceImage] = useState()

  useEffect(() => {
    axios
      .post('/api/device/image', {
        cluster: 'intsain',
        location: '연구소장'
      })
      .then(response => {
        const res = response.data

        if (res.status === 'success' && res.data !== null) {
          const deviceImageSrc_ = `data:image/png;base64,${res.data}`
          setDeviceImage(deviceImageSrc_)

        } else {
          console.log('fail')
        }
      })
  }, [])

  console.log(deviceImage)

  return (
    <Card>
      <Grid sx={{ p: 5 }} container spacing={6}>
        <Grid sx={{ borer: '1px solid black', p: 5 }} item xs={6} md={4} lg={5}>
          {/* <Image src="/images/location_image_sample_1.png" width="250" height="250" alt="locationImage"></Image> */}
          {/* <Image src={`${deviceImage}`} width="250" height="250" alt="locationImage"></Image> */}
          <div
            style={{
              backgroundImage: `url('${deviceImage}')`,
              height: '100px',
              width: '200px',
              backgroundSize: 'cover'
            }}
          ></div>
        </Grid>
        <Grid sx={{ borer: '1px solid black', p: 5 }} item xs={6} md={4} lg={7}>
          <Box sx={{ fontSize: '16px' }}><b>설치 장소:</b> 서울시 구로구 디지털로 242</Box>
          <Grid container spacing={0}>
            <Grid container xs={6} md={4} lg={6}>
              <Grid item xs={6} md={4} lg={10} sx={{ p: '15px', mt: 3, border: '1px solid lightgrey', borderRadius: '15px', width: '150px', mr: '10px' }}>
                <Box sx={{ fontSize: '14px', alignItems: "center", display: 'flex', ml: 1 }}>
                  <Icon fontSize={20} icon='mdi-cellphone' />
                  <Box sx={{ ml: 2, fontWeight: '600' }}>{`I8-123sad`}</Box>
                </Box>
                <Box sx={{ p: 1, display: 'flex', flexDirection: 'row', fontSize: '14px' }}>
                  <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', mr: 5, mt: 3 }}>
                    <CustomAvatar skin='light' color={'error'} sx={{ width: 20, height: 20, mr: 2 }}>
                      <Icon icon='mdi-thermometer' />
                    </CustomAvatar>
                    <Box>12</Box>
                  </Box>
                  <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', mr: 5, mt: 3 }}>
                    <CustomAvatar skin='light' color={'info'} sx={{ width: 20, height: 20, mr: 2, }}>
                      <Icon icon='mdi-water' />
                    </CustomAvatar>
                    <Box>12</Box>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={6} md={4} lg={10} sx={{ p: '15px', mt: 3, border: '1px solid lightgrey', borderRadius: '15px', width: '150px', mr: '10px' }} >
                <Box sx={{ fontSize: '14px', alignItems: "center", display: 'flex', ml: 1 }}>
                  <Icon fontSize={20} icon='mdi-cellphone' />
                  <Box sx={{ ml: 2, fontWeight: '600' }}>{`I8-123sad`}</Box>
                </Box>
                <Box sx={{ p: 1, display: 'flex', flexDirection: 'row', fontSize: '14px' }}>
                  <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', mr: 5, mt: 3 }}>
                    <CustomAvatar skin='light' color={'error'} sx={{ width: 20, height: 20, mr: 2 }}>
                      <Icon icon='mdi-thermometer' />
                    </CustomAvatar>
                    <Box>12</Box>
                  </Box>
                  <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', mr: 5, mt: 3 }}>
                    <CustomAvatar skin='light' color={'info'} sx={{ width: 20, height: 20, mr: 2, }}>
                      <Icon icon='mdi-water' />
                    </CustomAvatar>
                    <Box>12</Box>
                  </Box>
                </Box>
              </Grid>

            </Grid>




          </Grid>

        </Grid>
      </Grid >
    </Card >
  )
}

export default RealTime
