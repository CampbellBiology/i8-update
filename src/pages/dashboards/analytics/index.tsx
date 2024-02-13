// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import AnalyticsTable from 'src/views/dashboards/analytics/AnalyticsTable'
import AnalyticsTrophy from 'src/views/dashboards/analytics/AnalyticsTrophy'
import AnalyticsSessions from 'src/views/dashboards/analytics/AnalyticsSessions'
import AnalyticsTotalProfit from 'src/views/dashboards/analytics/AnalyticsTotalProfit'
import AnalyticsPerformance from 'src/views/dashboards/analytics/AnalyticsPerformance'
import AnalyticsTotalEarning from 'src/views/dashboards/analytics/AnalyticsTotalEarning'
import AnalyticsWeeklyOverview from 'src/views/dashboards/analytics/AnalyticsWeeklyOverview'
import AnalyticsDepositWithdraw from 'src/views/dashboards/analytics/AnalyticsDepositWithdraw'
import AnalyticsSalesByCountries from 'src/views/dashboards/analytics/AnalyticsSalesByCountries'
import AnalyticsTransactionsCard from 'src/views/dashboards/analytics/AnalyticsTransactionsCard'

// import SocketIOClient from 'socket.io-client'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import { io, Socket } from 'socket.io-client'
import ChatBoard from './chatBoard'
import { Box, Card, CardContent, CardHeader } from '@mui/material'
import { warningRows } from '../data/warningData'
import WarningTable from './warningTable'
import DataUsageTable from './dataUsageTable'
import { dataUsageRows } from '../data/dataUsageData'
import RealTime from './realtime'

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

  // const username = useSelector(state => state.user.name)
  const username = 'hyunha'
  const [socketConnectFlag, setSocketConnectFlag] = useState<boolean>(true)
  // let socketConnectFlag = true
  // const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://192.168.50.231:5555')

  // useEffect((): any => {
  //   // log socket connection
  //   if (socketConnectFlag) {
  //     const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://192.168.50.97:5000')

  //     socket.on('connect', () => {
  //       console.log('SOCKET CONNECTED!', socket.id)
  //       //socket.emit('userId', socket.id)

  //       // 접속이후에 접근불가
  //       setSocketConnectFlag(false)
  //       // socketConnectFlag = false
  //       setConnected(true)
  //     })

  //     // 서버로부터 데이터 들어오면
  //     socket.on('message', message => {
  //       chat.push(message)
  //       setChat([...chat])
  //       // console.log(message)
  //     })

  //     socket.on('warning', warning => {
  //       setWarningRow(warning)
  //       console.log(warning)
  //     })

  //     // socket.on('dataUsage', dataUsage => {
  //     //   setDataUsageRow(dataUsage)
  //     //   console.log(dataUsage)
  //     // })
  //   }

  //   // if (socket) return () => socket.disconnect()
  //   // if (socketConnectFlag === false) socket.disconnect()
  // }, [chat, socketConnectFlag])

  const sendMessageHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSendMessage(event.target.value)
  }, [])

  const enterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      // send message
      event.preventDefault()
      submitSendMessage(event)
    }
  }

  const submitSendMessage = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (sendMessage) {
      const message: IMessage = {
        user: username,
        message: sendMessage
      }
      const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://192.168.50.231:5555')
      socket.emit('message', message)

      // const response = await axios.post('/api/chat', message)
      setSendMessage('')
    }
  }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12} lg={12}>
          <Box sx={{ pb: 3, fontSize: 'large', fontWeight: '600' }}> 기기 현황</Box>
          <Grid container spacing={6}>
            <Grid item xs={6} md={4} lg={2}>
              <Card sx={{ p: 3 }}>
                <Box>총 등록 기기</Box>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100px', justifyContent: 'center' }}>
                  <Icon icon='mdi-power-settings' width={20} />
                  <Box sx={{ fontSize: '20px', pl: 2 }}> 11대</Box>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={6} md={4} lg={2}>
              <Card sx={{ p: 3 }}>
                <Box>사용 중</Box>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100px', justifyContent: 'center' }}>
                  <Icon icon='mdi:pencil' width={20} />
                  <Box sx={{ fontSize: '20px', pl: 2 }}> 11대</Box>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={6} md={4} lg={2}>
              <Card sx={{ p: 3 }}>
                <Box>이상 기기</Box>{' '}
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100px', justifyContent: 'center' }}>
                  <Icon icon='mdi:pencil' width={20} />
                  <Box sx={{ fontSize: '20px', pl: 2 }}> 11대</Box>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={6} md={4} lg={2}>
              <Card sx={{ p: 3 }}>
                <Box>업데이트 예정</Box>
              </Card>
            </Grid>
            <Grid item xs={6} md={4} lg={2}>
              <Card sx={{ p: 3 }}>
                <Box>배터리 부족</Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* 두번째줄 */}
        <Grid item xs={12} md={6} lg={6}>
          <Grid sx={{ py: 5 }}>
            <Box sx={{ pb: 3, fontSize: 'large', fontWeight: '600' }}> 실시간 현황</Box>
            <RealTime />
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

        {/* 세번째줄 */}
        <Grid item xs={12} md={4}>
          <ChatBoard
            chat={chat}
            username={username}
            sendMessage={sendMessage}
            sendMessageHandler={sendMessageHandler}
            enterKeyPress={enterKeyPress}
            connected={connected}
            submitSendMessage={submitSendMessage}
          />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default AnalyticsDashboard
