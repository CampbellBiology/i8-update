import { RenderTree } from '../../interfaces/locationInterfaces/renderTree'

const data: RenderTree = {
  id: 'root',
  name: '장소',
  children: [
    {
      id: '1',
      address: '반월당역',
      detail: '대구광역시 중구 달구별대로 지하2100(덕산동)',
      children: [
        {
          id: '1-1',
          group: '지하 1층',
          children: [
            {
              id: '1-1-1',
              place: '승강장',
              isMain: true,
              isFavorite: true,
              isHidden: false,
              sensor: [
                {
                  name: 'mmWave',
                  number_on: 15,
                  number_whole: 16
                },
                {
                  name: 'I8-Sensor',
                  number_on: 2,
                  number_whole: 2
                }
              ],
              info: [
                {
                  last_writer: '홍길동',
                  last_reg_day: '23.10.31',
                  last_reg_time: '10:12'
                }
              ],
              sensorImage: [
                {
                  sensorId: 'mmwave-1',
                  x: 200,
                  y: 200
                },
                {
                  sensorId: 'mmwave-2',
                  x: 100,
                  y: 100
                },
                {
                  sensorId: 'mmwave-3',
                  x: 100,
                  y: 150
                },
                {
                  sensorId: 'mmwave-4',
                  x: 150,
                  y: 200
                }
              ],
              imagePath: '/images/location_image_sample_2.jpg'
            },
            {
              id: '1-1-2',
              place: '1-1계단',
              isMain: false,
              isFavorite: true,
              isHidden: false,
              sensor: [
                {
                  name: 'mmWave',
                  number_on: 15,
                  number_whole: 16
                },
                {
                  name: 'I8-Sensor',
                  number_on: 2,
                  number_whole: 2
                }
              ],
              info: [
                {
                  last_writer: '홍길동',
                  last_reg_day: '23.10.31',
                  last_reg_time: '10:12'
                }
              ],
              imagePath: '/images/location_image_sample_1.png'
            }
          ]
        },
        {
          id: '1-2',
          group: '화장실',
          children: [
            {
              id: '1-2-1',
              place: '여자화장실',
              isMain: false,
              isFavorite: true,
              isHidden: false,
              sensor: [
                {
                  name: 'mmWave',
                  number_on: 15,
                  number_whole: 16
                },
                {
                  name: 'I8-Sensor',
                  number_on: 2,
                  number_whole: 2
                }
              ],
              info: [
                {
                  last_writer: '홍길동',
                  last_reg_day: '23.10.31',
                  last_reg_time: '10:12'
                }
              ],
              imagePath: 'https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg'
            },
            {
              id: '1-2-2',
              place: '남자화장실',
              isMain: false,
              isFavorite: true,
              isHidden: false,
              sensor: [
                {
                  name: 'mmWave',
                  number_on: 15,
                  number_whole: 16
                },
                {
                  name: 'I8-Sensor',
                  number_on: 2,
                  number_whole: 2
                }
              ],
              info: [
                {
                  last_writer: '홍길동',
                  last_reg_day: '23.10.31',
                  last_reg_time: '10:12'
                }
              ],
              imagePath: 'https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg'
            }
          ]
        }
      ]
    },
    {
      id: '2',
      address: '미진아파트',
      detail: '부산시 중구 일산대로 12-32',
      children: [
        {
          id: '2-1',
          group: '지하 1층',
          children: [
            {
              id: '2-1-1',
              place: 'B1 주차장',
              isMain: false,
              isFavorite: false,
              isHidden: false,
              sensor: [
                {
                  name: 'mmWave',
                  number_on: 15,
                  number_whole: 16
                },
                {
                  name: 'I8-Sensor',
                  number_on: 2,
                  number_whole: 2
                }
              ],
              info: [
                {
                  last_writer: '홍길동',
                  last_reg_day: '23.10.31',
                  last_reg_time: '10:12'
                }
              ],
              imagePath: 'https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg'
            },
            {
              id: '2-1-2',
              place: '2-1계단',
              isMain: false,
              isFavorite: false,
              isHidden: true,
              sensor: [
                {
                  name: 'mmWave',
                  number_on: 15,
                  number_whole: 16
                },
                {
                  name: 'I8-Sensor',
                  number_on: 2,
                  number_whole: 2
                }
              ],
              info: [
                {
                  last_writer: '홍길동',
                  last_reg_day: '23.10.31',
                  last_reg_time: '10:12'
                }
              ],
              imagePath: 'https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg'
            }
          ]
        },
        {
          id: '2-2',
          name: '그룹명2-승강장(지하2층)',
          children: []
        }
      ]
    }
  ]
}

export default data
