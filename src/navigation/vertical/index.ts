// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    // {
    //   title: 'Home',
    //   path: '/home',
    //   icon: 'mdi:home-outline'
    // },
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
