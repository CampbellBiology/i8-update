// ** MUI Imports
import Button from '@mui/material/Button'

interface IProps {
  text: string
  isClicked?: boolean
}

const ButtonsCustomed = ({ text, isClicked }: IProps) => {
  return (
    <>
      <Button
        variant='text'
        sx={{
          ':hover': { color: '#9155FD', fontWeight: '600' },
          color: isClicked ? '#9155FD' : '#292929',
          fontWeight: isClicked ? '600' : '200'
        }}
      >
        {text}
      </Button>
    </>
  )
}

export default ButtonsCustomed
