interface TableBodyRowType {
  id: string
  type: string
  data: dataProps[]
}

interface dataProps {
  id: string
  group: string
  location: string
  SN: string
  dataUsage: string
}

export const realTimeData = [
  {
    id: '1',
    address: '부산진구 엄광로 178',
    group: '동의대학교 산학협력관',
    location: '802-3',
    imagePath: '/images/no_image.png',
    data: [
      {
        SN: 'mmWave-111',
        temperature: '21',
        humidity: '30'
      },
      {
        SN: 'mmWave-222',
        temperature: '22',
        humidity: '30'
      },
      {
        SN: 'mmWave-333',
        temperature: '23',
        humidity: '30'
      },
      {
        SN: 'mmWave-444',
        temperature: '24',
        humidity: '30'
      }
    ]
  },
  {
    id: '2',
    address: '부산진구 엄광로 178',
    group: '동의대학교 산학협력관',
    location: '802-4',
    imagePath: '/images/no_image.png',
    data: [
      {
        SN: 'mmWave-555',
        temperature: '22',
        humidity: '30'
      },
      {
        SN: 'mmWave-666',
        temperature: '22',
        humidity: '30'
      }
    ]
  }
]
