import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Category } from '../../@types/interfaces'
import { SafeArea } from '../../components/SafeArea'
import api from '../../services/api'
import { CategoryRow } from './components/CategoryRow'

export const Home = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    async function getData() {
      const { data } = await api.get('categories')
      setCategories(data)
    }
    getData()
  }, [])

  return (
    <SafeArea>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {categories.map((category) => (
          <CategoryRow key={category.id} category={category} />
        ))}
      </ScrollView>
    </SafeArea>
  )
}
