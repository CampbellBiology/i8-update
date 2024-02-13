interface TableBodyRowType {
  id: number
  group: string
  SN: string
  location: string
  setting_temp: string
  setting_hum: string
  detected_temp: string
  detected_hum: string
  alarm: string
}

export const warningRows: TableBodyRowType[] = [
  {
    id: 1,
    group: '불러오는 중',
    location: '',
    SN: '불러오는 중',
    setting_temp: '...',
    setting_hum: '...',
    detected_temp: '...',
    detected_hum: '...',
    alarm: ''
  }
]
