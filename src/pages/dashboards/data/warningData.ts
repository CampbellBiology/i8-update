interface TableBodyRowType {
  id: number
  group: string
  SN: string
  location: string
  setting_temp: number
  setting_hum: number
  detected_temp: number
  detected_hum: number
  alarm: string
}

export const warningRows: TableBodyRowType[] = [
  {
    id: 1,
    group: '동의대 산학협력관',
    location: '101',
    SN: 'mmWave-123123',
    setting_temp: 12,
    setting_hum: 30,
    detected_temp: 18,
    detected_hum: 50,
    alarm: '12:00'
  },
  {
    id: 2,
    group: '동의대 산학협력관',
    location: '102',
    SN: 'mmWave-123123',
    setting_temp: 12,
    setting_hum: 30,
    detected_temp: 18,
    detected_hum: 50,
    alarm: '12:00'
  },
  {
    id: 3,
    group: '인트세인',
    location: '연구소장',
    SN: 'mmWave-123123',
    setting_temp: 12,
    setting_hum: 30,
    detected_temp: 18,
    detected_hum: 50,
    alarm: '12:00'
  },
  {
    id: 4,
    group: '인트세인',
    location: '사무실',
    SN: 'mmWave-123123',
    setting_temp: 12,
    setting_hum: 30,
    detected_temp: 18,
    detected_hum: 50,
    alarm: '12:00'
  },
  {
    id: 5,
    group: '가야여자중학교',
    location: '교무실',
    SN: 'mmWave-123123',
    setting_temp: 12,
    setting_hum: 30,
    detected_temp: 18,
    detected_hum: 50,
    alarm: '12:00'
  }
]
