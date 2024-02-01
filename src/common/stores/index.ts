import { atom } from 'recoil'
import FavoriteData from 'src/common/dummyData/locationData/FavoriteData_dummy'
import HiddenData from 'src/common/dummyData/locationData/HiddenData_dummy'
import LocationAddressData from 'src/common/dummyData/locationData/LocationAddressData'
import LocationGroupData from 'src/common/dummyData/locationData/LocationGroupData'
import LocationPlaceData from 'src/common/dummyData/locationData/LocationPlaceData'
import data from 'src/common/dummyData/locationData/renderTreeData_dummy'
import { LocationSensorData, SensorObjectData } from 'src/common/dummyData/realTimeData/location_sensor_data_dummy'
import { ObjectData } from 'src/common/dummyData/realTimeData/object_data_dummy '
import { SensorData } from 'src/common/dummyData/realTimeData/sensor_data_dummy'

export const LocationListDataState = atom({
  key: `LocationListDataState`,
  default: data
})

export const LocationFavoriteDataState = atom({
  key: `LocationFavoriteDataState`,
  default: FavoriteData
})

export const LocationHiddenDataState = atom({
  key: `LocationHiddenDataState`,
  default: HiddenData
})

export const SensorDataState = atom({
  key: `SensorDataState`,
  default: SensorData
})

export const ObjectDataState = atom({
  key: `ObjectDataState`,
  default: ObjectData
})

export const LocationSensorInfoState = atom({
  key: `LocationSensorDataState`,
  default: LocationSensorData
})

export const LocationAddress = atom({
  key: `LocationAddressState`,
  default: LocationAddressData
})

export const LocationGroup = atom({
  key: `LocationGroupState`,
  default: LocationGroupData
})

export const LocationPlace = atom({
  key: `LocationPlaceState`,
  default: LocationPlaceData
})

// 실시간
export const SensorObjectInfo = atom({
  key: `SensorObjectInfoState`,
  default: SensorObjectData
})

export const CheckedObject = atom({
  key: `CheckedObjectState`,
  default: ['자동차', '사람', '소형견']
})
