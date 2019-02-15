import { mock } from 'mockjs'

export const queryUserList = mock('http://hello.com/queryUserList', {
    statusCode: '20000',
    statusMessage: '',
    responseContent: {
        pageNum: 1,
        pageSize: 10,
        size: 1,
        startRow: 1,
        endRow: 1,
        total: 1,
        pages: 1,
        'list|5-10': [
            {
                userId: '@id',
                username: '@cname',
                'gender|+1': ['男', '女'],
                createTime: '@datetime',
                region: '@region',
                country: '@city',
                email: '@email',
                'userStatus|+1': ['启用', '冻结']
            }
        ],
        prePage: 0,
        nextPage: 0,
        isFirstPage: true,
        isLastPage: true,
        hasPreviousPage: false,
        hasNextPage: false,
        navigatePages: 8,
        navigatepageNums: [1],
        navigateFirstPage: 1,
        navigateLastPage: 1,
        firstPage: 1,
        lastPage: 1
    }
})
