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

export const dataUsageRows = [
  {
    id: '1',
    type: '누적 사용량',
    data: [
      {
        id: '1-1',
        group: '동의대 산학협력관',
        location: '101',
        SN: 'mmWave-123123',
        dataUsage: '222'
      },
      {
        id: '1-2',
        group: '동의대 산학협력관',
        location: '101',
        SN: 'mmWave-123123',
        dataUsage: '123'
      }
    ]
  },
  {
    id: '2',
    type: '일평균 사용량',
    data: [
      {
        id: '2-1',
        group: '인트세인',
        location: '101',
        SN: 'mmWave-123123',
        dataUsage: '333'
      },
      {
        id: '2-2',
        group: '인트세인',
        location: '101',
        SN: 'mmWave-123123',
        dataUsage: '123'
      }
    ]
  },
  {
    id: '3',
    type: '월평균 사용량',
    data: [
      {
        id: '3-1',
        group: '가야여자중학교',
        location: '101',
        SN: 'mmWave-123123',
        dataUsage: '423'
      },
      {
        id: '3-2',
        group: '가야여자중학교',
        location: '101',
        SN: 'mmWave-123123',
        dataUsage: '222'
      }
    ]
  }
]
