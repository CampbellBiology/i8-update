// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      title: '기기 등록',
      path: '/register-device',
      icon: 'mdi-file-plus'
    },
    {
      title: '기기 위치',
      path: '/location',
      icon: 'mdi-map'
    },
    {
      title: '데이터 센터',
      path: '/data-center',
      icon: 'mdi-chart-bar'
    }
  ]
}

export default navigation
