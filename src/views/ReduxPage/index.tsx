import React, { useState, useEffect, useCallback } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import SearchForm from '@components/SearchForm'
import WrappedTable from '@components/WrappedTable'
import { Button, Divider, Spin } from 'antd'
import { IformItem } from '@typings/iform'
import { connect, useSelector, useDispatch } from 'react-redux'
import { getList } from './store/action'
import { DEMO_LIST } from '@redux/store/actionType'
import { promotion_dateSegment_list } from '@config/api'

const columns = [
    { title: '活动ID', dataIndex: 'id', key: 'id' },
    { title: '活动名称', dataIndex: 'title', key: 'title' },
    { title: '创建时间', dataIndex: 'createTime', key: 'createTime' },
    { title: '创建人', dataIndex: 'creator', key: 'creator' },
    { title: '排序', dataIndex: 'sort', key: 'sort' },
    { title: '状态', dataIndex: 'status', key: 'status' }
]

interface ListItem {
    id: string
    title: string
    createTime: string
    creator: string
    sort: number
    status: number
}

interface Page {
    pageNo: number
    total: number
    pageSize: number
}

interface IState {
    reduxpage?: object | {}
}

const Page1 = (props: any & RouteComponentProps) => {
    const [loading, setLoading] = useState<boolean>(false)
    // const [dataSource, setDataSource] = useState<ListItem[]>([])
    const [page, setPage] = useState<Page>({ pageNo: 1, total: 0, pageSize: 20 })
    const [queryData, setQueryData] = useState({})
    let dispatch = useDispatch()

    const queryList = (params: any) => {
        // getList(promotion_dateSegment_list, {
        //     status: 0,
        //     pageNumber: params.pageNo,
        //     pageSize: params.pageSize,
        //     contentType: 1,
        //     cityCode: 'C110100',
        //     tenantId: 2,
        //     operationGroupId: 200000,
        //     itemType: 2,
        //     shopType: 2
        // }).then((data) => {
        //     dispatch({
        //         type: 'DEMO_LIST',
        //         data
        //     })
        // })
    }

    const reduxpage: any = useSelector((state: any) => state.reduxpage)

    useEffect(() => {
        queryList({ ...page, ...queryData })
    }, [page.pageNo, page.pageSize, queryData])

    useEffect(() => {
        setPage({ ...page, pageNo: reduxpage.page, pageSize: reduxpage.size, total: reduxpage.total })
    }, [reduxpage.page, reduxpage.size, reduxpage.total])

    const doSubmit = (values: React.SetStateAction<{}>) => {
        setQueryData(values)
    }

    const handlePage = (params: React.SetStateAction<Page>) => {
        setPage(params)
    }

    const forwardDetail = () => {
        props.history.push({
            pathname: '/promotion/dateSegmentDetail',
            state: { mode: 'add' }
        })
    }

    return (
        <Spin spinning={loading}>
            <WrappedTable
                columns={columns}
                dataSource={reduxpage.list}
                rowKey='id'
                page={{
                    pageNo: reduxpage.page || 1,
                    total: reduxpage.total || 0,
                    pageSize: reduxpage.size || 20
                }}
                handlePage={handlePage}
                add={forwardDetail}
            />
        </Spin>
    )
}

export default withRouter(Page1)
