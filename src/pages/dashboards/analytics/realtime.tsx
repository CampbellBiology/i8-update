import { Box, Card, CardHeader, Grid } from "@mui/material"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import CustomAvatar from 'src/@core/components/mui/avatar'

const RealTime = ({ realtimeData }) => {

  console.log(realtimeData)

  return (
    <Card sx={{ p: 5, minHeight: '395px', height: '630px', overflowY: 'auto' }}>
      {realtimeData.map(el => {

        return (
          <Box key={el.id} id='repeat' mb={'50px'}>
            <Box sx={{ fontSize: '15px', pb: 1 }}><b>설치 주소 : </b>{`${el.address}`}</Box>
            <Box sx={{ fontSize: '15px', pb: 3 }}><b>설치 장소 : </b>{`${el.group} >> ${el.location}`}</Box>
            <Grid sx={{ p: 2, border: '1px solid lightgrey', borderRadius: '10px' }} container>
              <Grid sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={12} md={12} lg={5} >
                <Box sx={{ maxWidth: '300px' }}>
                  <img src={el.imagePath} width={'100%'} alt="locationImage"></img>
                </Box>

                {/* <Image src={`${deviceImage}`} width="250" height="250" alt="locationImage"></Image> */}
                {/* <div
              style={{
                backgroundImage: `url('${deviceImage}')`,
                // height: '100%',
                width: '100%',
                backgroundSize: 'cover'
              }}
            ></div> */}
              </Grid>
              <Grid sx={{ borer: '1px solid black', p: 2 }} item xs={12} md={12} lg={7} >
                <Box sx={{ fontSize: '14px' }}><b>온습도 정보</b></Box>
                <Grid container spacing={0}>
                  <Grid container xs={12} md={12} lg={12} >

                    {el.data.map(item => {
                      return (
                        <Grid key={el.SN} item xs={6} md={6} lg={6} >
                          <Box sx={{ p: '15px', mt: 3, border: '1px solid lightgrey', borderRadius: '15px', mr: 2, minWidth: '100px' }}>
                            <Box sx={{ fontSize: '14px', alignItems: "center", display: 'flex', ml: 1 }}>
                              <Icon fontSize={'20px'} icon='mdi-cellphone' />
                              <Box fontSize={13} sx={{ ml: 2, fontWeight: '600' }}>{item.SN}</Box>
                            </Box>
                            <Box sx={{ p: 1, display: 'flex', flexDirection: 'row', flexFlow: 'wrap', fontSize: '14px' }}>
                              <Box sx={{ width: '50%', display: 'flex', flexDirection: 'row', mt: 3 }}>
                                <CustomAvatar skin='light' color={'error'} sx={{ width: 20, height: 20 }}>
                                  <Icon icon='mdi-thermometer' />
                                </CustomAvatar>
                                <Box pl={1}>{item.temperature}</Box>
                              </Box>
                              <Box sx={{ width: '50%', display: 'flex', flexDirection: 'row', mt: 3 }}>
                                <CustomAvatar skin='light' color={'info'} sx={{ width: 20, height: 20, }}>
                                  <Icon icon='mdi-water' />
                                </CustomAvatar>
                                <Box pl={1}>{item.humidity}</Box>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>

                      )
                    })}

                  </Grid>
                </Grid>
              </Grid>
            </Grid >
          </Box>
        )

      })}
    </Card >
  )
}

export default RealTime