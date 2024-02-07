import { Alert, Button, Paper, Stack, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

interface chatProps {
  chat: any
  username: string
  sendMessage: any
  sendMessageHandler: any
  enterKeyPress: any
  connected: any
  submitSendMessage: any
}
const ChatBoard = ({
  chat,
  username,
  sendMessage,
  sendMessageHandler,
  enterKeyPress,
  connected,
  submitSendMessage
}: chatProps) => {
  return (
    <>
      <Stack spacing={2} direction='column'>
        <Alert severity='info'>채팅 기능은 로그인된 유저에게만 제공됩니다.</Alert>
        {/* 채팅 메시지 출력 영역 */}
        <Stack spacing={2} direction='column'>
          <Paper variant='outlined' sx={{ minHeight: '300px' }}>
            {chat.length ? (
              chat.map((chat: any, index: number) => (
                <div className='chat-message' style={{ color: 'black' }} key={index}>
                  {chat.user === username ? 'Me' : chat.user} : {chat.message}
                </div>
              ))
            ) : (
              <div className='alert-message'>No Chat Messages</div>
            )}
          </Paper>
        </Stack>
        {/* 채팅 메시지 입력 영역 */}
        <Stack spacing={1} direction='row'>
          <TextField
            id='chat-message-input'
            label='enter your message'
            variant='outlined'
            value={sendMessage}
            onChange={sendMessageHandler}
            margin='normal'
            autoFocus
            multiline
            rows={2}
            fullWidth
            onKeyPress={enterKeyPress}
            placeholder={connected ? 'enter your message' : 'Connecting...🕐'}
          />
          <Button type='submit' variant='contained' color='primary' endIcon={<SendIcon />} onClick={submitSendMessage}>
            Send
          </Button>
        </Stack>
      </Stack>
    </>
  )
}

export default ChatBoard
