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

interface ServerToClientEvents {
  noArg: () => void
  basicEmit: (a: number, b: string, c: Buffer) => void
  withAck: (d: string, callback: (e: number) => void) => void
  message: (message: IMessage) => void
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
  const [connected, setConnected] = useState<boolean>(false)
  const [chat, setChat] = useState<IMessage[]>([])

  // const username = useSelector(state => state.user.name)
  const username = 'hyunha'
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://192.168.50.231:5555')

  useEffect((): any => {
    // log socket connection
    socket.on('connect', () => {
      console.log('SOCKET CONNECTED!', socket.id)
      socket.emit('userId', socket.id)

      setConnected(true)

      socket.on('message', message => {
        chat.push(message)
        setChat([...chat])
        console.log(message)
      })
    })

    // socket.on('message', message => {
    //   chat.push(message)
    //   setChat([...chat])
    //   console.log(message)
    // })

    // update chat on new message dispatched
    // socket.on('message', (message: IMessage) => {
    //   chat.push(message)
    //   setChat([...chat])
    //   console.log(message)
    // })

    // socket.on('message', message => {
    //   chat.push(message)
    //   setChat([...chat])
    //   console.log(message)
    // })

    // socket disconnect on component unmount if exists
    if (socket) return () => socket.disconnect()
  }, [])

  // useEffect(() => {
  //   socket.on('message', message => {
  //     chat.push(message)
  //     setChat([...chat])
  //     // console.log(message)
  //   })
  // }, [socket])

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

      socket.emit('message', message)

      // const response = await axios.post('/api/chat', message)
      setSendMessage('')
    }
  }

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12} lg={12}>
          <Card>
            <CardHeader title='기기 현황'></CardHeader>
            <Grid container spacing={6} padding={5}>
              <Grid item xs={12} md={6} lg={2}>
                <Card sx={{ p: 3 }}>
                  <Box>총 등록 기기</Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={2}>
                <Card sx={{ p: 3 }}>
                  <Box>사용 중</Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={2}>
                <Card sx={{ p: 3 }}>
                  <Box>!</Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={2}>
                <Card sx={{ p: 3 }}>
                  <Box>업데이트 예정</Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} lg={2}>
                <Card sx={{ p: 3 }}>
                  <Box>배터리 부족</Box>
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <AnalyticsTotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <AnalyticsTable />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <AnalyticsTotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <AnalyticsTable />
        </Grid>
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
          {/* <AnalyticsTrophy /> */}
        </Grid>
        {/* <Grid item xs={12} md={8}>
          <AnalyticsTransactionsCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <AnalyticsWeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <AnalyticsTotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <AnalyticsTotalProfit />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Icon icon='mdi:poll' />}
                color='secondary'
                trendNumber='+42%'
                title='Total Profit'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='New Project'
                subtitle='Yearly Project'
                icon={<Icon icon='mdi:briefcase-variant-outline' />}
              />
            </Grid>
            <Grid item xs={6}>
              <AnalyticsSessions />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <AnalyticsPerformance />
        </Grid>
        <Grid item xs={12} md={8}>
          <AnalyticsDepositWithdraw />
        </Grid>
        <Grid item xs={12} md={4}>
          <AnalyticsSalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <AnalyticsTable />
        </Grid> */}
      </Grid>
    </ApexChartWrapper>
  )
}

export default AnalyticsDashboard
