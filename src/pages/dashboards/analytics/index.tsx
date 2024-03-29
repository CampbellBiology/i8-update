// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'


// import SocketIOClient from 'socket.io-client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { io, Socket } from 'socket.io-client'
import ChatBoard from './chatBoard'
import { Box, Card, CardContent, CardHeader } from '@mui/material'
import { warningRows } from '../data/warningData'
import WarningTable from './warningTable'
import DataUsageTable from './dataUsageTable'
import { dataUsageRows } from '../data/dataUsageData'
import RealTime from './realtime'
import { realTimeData, realTimeDeviceData, realTimeFrameData } from '../data/realtimeData'


interface ServerToClientEvents {
  // noArg: () => void
  // basicEmit: (a: number, b: string, c: Buffer) => void
  // withAck: (d: string, callback: (e: number) => void) => void
  message: (message: IMessage) => void
  setting: (warning: []) => void
  dataUsage: (dataUsage: []) => void
}

interface ClientToServerEvents {
  hello: () => void
  message: (message: IMessage) => void
}

interface IMessage {
  user: string
  message: string
}

const AnalyticsDashboard = () => {
  const [sendMessage, setSendMessage] = useState<string>('')
  const [chat, setChat] = useState<IMessage[]>([])
  const [connected, setConnected] = useState<boolean>(false)
  const [warningRow, setWarningRow] = useState(warningRows)
  const [dataUsageRow, setDataUsageRow] = useState(dataUsageRows)

  const [deviceFrame, setDeviceFrame] = useState(realTimeFrameData)
  const [deviceData, setDeviceData] = useState(realTimeDeviceData)


  const [socketConnectFlag, setSocketConnectFlag] = useState<boolean>(true)

  const router = useRouter()

  useEffect((): any => {
    // log socket connection
    if (socketConnectFlag) {
      const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://127.0.0.1:5000')

      socket.on('connect', () => {
        console.log('SOCKET CONNECTED!', socket.id)
        //socket.emit('userId', socket.id)

        // 접속이후에 접근불가
        setSocketConnectFlag(false)
        // socketConnectFlag = false
        setConnected(true)
      })

      socket.on('warning', warning => {
        setWarningRow(warning)
        console.log(warning)
      })

      socket.on('dataUsage', dataUsage => {
        setDataUsageRow(dataUsage)
        console.log(dataUsage)
      })


      socket.on('realtime', realtime => {
        setDeviceData(realtime)
        console.log(realtime)
      })

      router.events.on('routeChangeStart', () => socket.close())

    }
  }, [chat, socketConnectFlag])


  useEffect(() => {
    axios
      .get('/api/deviceFrame', {
        withCredentials: true
      })
      .then(response => {
        const res = response.data
        if (res.status === 'success') {
          setDeviceFrame(res.data)
          console.log(res.data)
        } else {
          console.log('fail')
        }
      })
  }, [])


  console.log(deviceFrame)


  const [timer, setTimer] = useState(`${String(new Date().getHours()).padStart(2, "0")}:${String(new Date().getMinutes()).padStart(2, "0")}:${String(new Date().getMinutes()).padStart(2, "0")}`);
  const [updateTimer, setUpdateTimer] = useState(`${String(new Date().getHours()).padStart(2, "0")}:${String(new Date().getMinutes()).padStart(2, "0")}:${String(new Date().getMinutes()).padStart(2, "0")}`)

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${hours}:${minutes}:${seconds}`)
  }

  const startTimer = () => {
    setInterval(currentTimer, 1000)
  }

  startTimer()

  return (
    <ApexChartWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={8} >
          <Box sx={{ pb: 3, fontSize: 'large', fontWeight: '600' }}> 기기 현황</Box>
          <Grid container spacing={2}>
            <Grid item xs={6} md={2} lg={2.5}>
              <Card sx={{ p: 3, height: '150px', display: 'relative' }}>
                <Box >총 등록 기기</Box>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '50px', justifyContent: 'center', mt: 5 }}>
                  <Icon icon='mdi-power-settings' color='rgb(66, 133, 244)' width={30} />
                  <Box sx={{ fontSize: '20px', pl: 2 }}> 13대</Box>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={6} md={2} lg={2.5}>
              <Card sx={{ p: 3, height: '150px' }}>
                <Box>사용 중</Box>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '50px', justifyContent: 'center', mt: 5 }}>
                  <Icon icon='mdi-power-settings' color="rgb(52, 168, 83)" width={30} />
                  <Box sx={{ fontSize: '20px', pl: 2 }}> 11대</Box>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={6} md={2} lg={2.5}>
              <Card sx={{ p: 3, height: '150px' }}>
                <Box>이상 기기</Box>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '50px', justifyContent: 'center', mt: 5 }}>
                  <Icon icon='mdi-power-settings' color='rgb(234, 67, 53)' width={30} />
                  <Box sx={{ fontSize: '20px', pl: 2 }}> 2대</Box>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={6} md={2} lg={2}>
              <Card sx={{ p: 3, height: '150px' }}>
                <Box >업데이트 예정</Box>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '50px', justifyContent: 'center', mt: 5 }}>
                  <Icon icon='mdi-cellphone-android' color='rgb(180, 180, 180)' width={30} />
                  <Box sx={{ fontSize: '20px', pl: 2 }}> 2대</Box>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={6} md={2} lg={2}>
              <Card sx={{ p: 3, height: '150px' }}>
                <Box>배터리 부족</Box>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '50px', justifyContent: 'center', mt: 5 }}>
                  <Icon icon='mdi-battery-low' color='rgb(251, 188, 5)' width={30} />
                  <Box sx={{ fontSize: '20px', pl: 2 }}> 2대</Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} md={2} lg={2} pr={5} >
          <Box sx={{ pb: 3, fontSize: 'large', fontWeight: '600' }}> 현재 시각</Box>
          <Card sx={{ p: 3, height: '150px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '130px', justifyContent: 'center' }}>
              <Icon icon='mdi-clock' color='grey' width={30} />
              <Box sx={{ fontSize: '20px', pl: 2 }}>{timer}</Box>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} md={2} lg={2} pl={5}>
          <Box sx={{ pb: 3, fontSize: 'large', fontWeight: '600' }}> 업데이트 시각</Box>
          <Card sx={{ p: 3, height: '150px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '130px', justifyContent: 'center' }}>
              <Icon icon='mdi-clock' color='rgb(52, 168, 83)' width={30} />
              {/* <Box sx={{ fontSize: '20px', pl: 2 }}>{updateTimer}</Box> */}
            </Box>
          </Card>
        </Grid>

      </Grid >



      {/* 두번째줄 */}
      <Grid container spacing={6} mt={3}>
        <Grid item xs={12} md={6} lg={6}>
          <Grid sx={{ py: 5 }}>
            <Box sx={{ pb: 3, fontSize: 'large', fontWeight: '600' }}> 실시간 현황</Box>
            <RealTime deviceFrame={deviceFrame} deviceData={deviceData} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Grid sx={{ py: 5 }}>
            <Box sx={{ pb: 3, fontSize: 'large', fontWeight: '600' }}> 이상 기온 및 습도 알림 전체 기기</Box>
            <WarningTable warningRows={warningRow} />
          </Grid>
          <Grid sx={{ py: 5 }}>
            <Box sx={{ pb: 3, fontSize: 'large', fontWeight: '600' }}> 데이터 현황</Box>
            {/* <DataUsageTable warningRows={warningRow} /> */}
            <DataUsageTable dataUsageRows={dataUsageRow} />
          </Grid>
        </Grid>

      </Grid >
    </ApexChartWrapper >
  )
}

export default AnalyticsDashboard
