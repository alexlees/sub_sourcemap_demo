import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

import { makeError } from '../../common'
import { makeError2 } from '../common'

export default function Index() {

  useLoad(() => {
    makeError()
    makeError2()
  })

  return (
    <View className='index'>
      <Text>Hello Two!</Text>
    </View>
  )
}
