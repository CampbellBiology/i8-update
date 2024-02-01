export const LocationSensorData = {
  address: '미진아파트',
  group: 'A동',
  place: 'B1 지하주차장',
  imgPath: '/images/location_image_sample_1.png',
  sensorInfo: [
    {
      name: 'mmWave',
      total: 17,
      on: 16
    },
    {
      name: 'I8-sensor',
      total: 5,
      on: 5
    }
  ]
}

export const SensorObjectData = [
  {
    name: 'mmWave',
    data: [
      { type: '전체 객체', number: 13, icon: 'up' },
      { type: '자동차', number: 10, icon: 'down' },
      { type: '사람', number: 2, icon: 'down' },
      { type: '소형견', number: 1, icon: 'flat' }
    ]
  }
]
