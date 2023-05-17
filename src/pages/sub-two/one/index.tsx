import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'


import { makeError } from '../../common'

export default function Index() {

  useLoad(() => {
    makeError()
  })

  return (
    <View className='index'>
      <Text>Hello One!</Text>
    </View>
  )
}
