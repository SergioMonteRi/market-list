import { ComponentProps } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

type BaseButtonProps = ComponentProps<typeof TouchableOpacity> & {
  title: string
}

export const BaseButton = (props: BaseButtonProps) => {
  const { title, ...rest } = props

  return (
    <TouchableOpacity {...rest} style={styles.container} activeOpacity={0.7}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
