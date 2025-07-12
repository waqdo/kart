import { FlatList, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, Text, View } from 'react-native'
import React, { FC, useRef, useState } from 'react'
import { dynamicDashboardData as fullData} from '@utils/db'

const PAGE_SIZE = 4

const MainList:FC<{scrollYGlobal:any}> = ({scrollYGlobal}) => {
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [data, setData] = useState(fullData.slice(0,PAGE_SIZE))
    const [currentPage, setCurrentPage] = useState(1)
    const [isLoadingMore, setIsLoadingMore] = useState(false)

    const prevScrollY = useRef(0)
    const flatListRef = useRef<FlatList>(null)
    const handelScroll = (event:NativeSyntheticEvent<NativeScrollEvent>)=>{
        const curentScrollY = event.nativeEvent.contentOffset.y
    }

  return (
    <FlatList data={data} />
  )
}

export default MainList

const styles = StyleSheet.create({})