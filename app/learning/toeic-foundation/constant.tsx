export interface ICourseContent {
  titleCourse: string
  data: {
    title: string
    progress: string
    duration: string
    details: {
      title: string
      duration: string
      vimeoID: string
      status?: string
    }[]
  }[]
}

export const courseContent: ICourseContent = {
  titleCourse: 'TOEIC FOUNDATION',
  data: [
    {
      title: 'Lesson 1 Giới thiệu',
      progress: '1/2',
      duration: '00:15:40',
      details: [
        {
          title: '1',
          duration: '05:26',
          vimeoID: '1127909107',
          status: 'completed',
        },
        {
          title: '2',
          duration: '10:14',
          vimeoID: '1127909140',
        },
      ],
    },
    {
      title: 'Lesson 2 Danh từ',
      progress: '0/4',
      duration: '02:43:49',
      details: [
        {
          title: '1',
          duration: '14:10',
          vimeoID: '1127910479',
        },
        {
          title: '2',
          duration: '16:28',
          vimeoID: '1127910579',
        },
        {
          title: '3',
          duration: '14:08',
          vimeoID: '1127910666',
        },
        {
          title: '4',
          duration: '12:37',
          vimeoID: '1127910718',
        },
      ],
    },
  ],
}
