import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import { useTheme } from 'styled-components'
import utf8 from 'utf8'

import { Post } from '../../@types/interfaces'
import { Footer } from '../../components/Footer'
import { SafeArea } from '../../components/SafeArea'
import { RootStackParamList } from '../../routes'
import api from '../../services/api'
import { stripHTML } from '../../utils'
import { ContentPost, ImagePost, TitlePost, WrapperHeader } from './styles'

type DetailScreenProps = StackScreenProps<RootStackParamList, 'Detail'>

export const Detail = ({ route }: DetailScreenProps) => {
  const theme = useTheme()
  const [post, setPost] = useState<Post>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      setLoading(true)
      const { data } = await api.get(`posts/${route.params.id}`)
      setPost(data)
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <SafeArea>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
      >
        {loading ? (
          <ActivityIndicator color={theme.COLORS.PRIMARY} size='large' />
        ) : (
          <>
            <WrapperHeader>
              <ImagePost source={{ uri: route.params.image }} />
            </WrapperHeader>
            <TitlePost>{post?.title.rendered}</TitlePost>
            <ContentPost>{utf8.encode(stripHTML(post!.content.rendered.toString()))}</ContentPost>
          </>
        )}
        <Footer />
      </ScrollView>
    </SafeArea>
  )
}
