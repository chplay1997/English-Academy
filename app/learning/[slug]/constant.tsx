export interface ICourseContent {
  [key: string]: {
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
  'toeic-foundation': [
    {
      title: 'Lesson 1 Giới thiệu',
      progress: '1/2',
      duration: '00:15:40',
      details: [
        {
          title: 'Giới thiệu',
          duration: '05:26',
          vimeoID: '1127909107',
          status: 'completed',
        },
        {
          title: 'Giới thiệu về bài thi và phương pháp học',
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
          title: 'Các loại danh từ',
          duration: '14:10',
          vimeoID: '1127910479',
        },
        {
          title: 'Danh từ đếm được và không đếm được số ít và số nhiều',
          duration: '16:28',
          vimeoID: '1127910579',
        },
        {
          title: 'Sở hữu cách',
          duration: '14:08',
          vimeoID: '1127910666',
        },
        {
          title: 'Hạn định từ',
          duration: '12:37',
          vimeoID: '1127910718',
        },
      ],
    },
    {
      title: 'Lesson 3 Động từ',
      progress: '0/4',
      duration: '02:43:49',
      details: [
        {
          title: '1',
          duration: '15:43',
          vimeoID: '1127911519',
        },
        {
          title: '2',
          duration: '10:49',
          vimeoID: '1127911604',
        },
        {
          title: '3',
          duration: '3:57',
          vimeoID: '1127911645',
        },
        {
          title: '4',
          duration: '13:37',
          vimeoID: '1127911674',
        },
        {
          title: 'Thì quá khứ đơn',
          duration: '10:17',
          vimeoID: '1127911738',
        },
        {
          title: '6',
          duration: '15:23',
          vimeoID: '1127911784',
        },
        {
          title: '7',
          duration: '16:44',
          vimeoID: '1127911839',
        },
      ],
    },
    {
      title: 'Lesson 4 Đại từ',
      progress: '0/4',
      duration: '02:43:49',
      details: [
        {
          title: '1',
          duration: '11:33',
          vimeoID: '1127912112',
        },
        {
          title: '2',
          duration: '13:11',
          vimeoID: '1127912174',
        },
        {
          title: '3',
          duration: '11:43',
          vimeoID: '1127912231',
        },
      ],
    },
    {
      title: 'Lesson 5 Tính từ và trạng từ',
      progress: '0/4',
      duration: '02:43:49',
      details: [
        {
          title: '1',
          duration: '14:16',
          vimeoID: '1127912475',
        },
        {
          title: '2',
          duration: '13:15',
          vimeoID: '1127912543',
        },
        {
          title: '3',
          duration: '17:04',
          vimeoID: '1127912614',
        },
        {
          title: '4',
          duration: '12:06',
          vimeoID: '1127912680',
        },
        {
          title: '5',
          duration: '15:57',
          vimeoID: '1127912732',
        },
      ],
    },
    {
      title: 'Lesson 6 Giới từ',
      progress: '0/4',
      duration: '02:43:49',
      details: [
        {
          title: '1',
          duration: '19:32',
          vimeoID: '1127912985',
        },
        {
          title: '2',
          duration: '14:52',
          vimeoID: '1127913044',
        },
      ],
    },
    {
      title: 'Lesson 7 Các mẫu câu',
      progress: '0/4',
      duration: '02:43:49',
      details: [
        {
          title: '1',
          duration: '13:13',
          vimeoID: '1127913195',
        },
        {
          title: '2',
          duration: '14:26',
          vimeoID: '1127913254',
        },
        {
          title: 'THERE và chủ ngữ giả IT',
          duration: '12:15',
          vimeoID: '1127913323',
        },
      ],
    },
    {
      title: 'Từ vựng cơ bản',
      progress: '0/4',
      duration: '02:43:49',
      details: [
        {
          title: '1. BÀI 1 QUỐC GIA- QUỐC TỊCH',
          duration: '29:33',
          vimeoID: '1127913927',
        },
        {
          title: '2. BÀI 2 SỐ ĐẾM (PHẦN 1)',
          duration: '11:51',
          vimeoID: '1127914011',
        },
        {
          title: '3. BÀI 2 SỐ ĐẾM PHẦN 2',
          duration: '17:48',
          vimeoID: '1127914073',
        },
        {
          title: '4. BÀI 3 CÁC TÍNH TỪ PHỔ BIẾN',
          duration: '11:52',
          vimeoID: '1127914789',
        },
        {
          title: '5. BÀI 4 THỜI TIẾT',
          duration: '10:52',
          vimeoID: '1127914838',
        },
        {
          title: '6. BÀI 5 ĐỘNG VẬT P1',
          duration: '06:11',
          vimeoID: '1127914907',
        },
        {
          title: '7. BÀI 5 ĐỘNG VẬT P2',
          duration: '07:28',
          vimeoID: '1127914512',
        },
        {
          title: '8. BÀI 6 ĐỊA ĐIỂM',
          duration: '15:28',
          vimeoID: '1127914546',
        },
        {
          title: '9. BÀI 7 HOẠT ĐỘNG HẰNG NGÀY 1',
          duration: '13:09',
          vimeoID: '1127914604',
        },
        {
          title: '10. BÀI 7 HOẠT ĐỘNG HẰNG NGÀY 2',
          duration: '12:22',
          vimeoID: '1127914668',
        },
        {
          title: '11. BÀI 7 HOẠT ĐỘNG HÀNG NGÀY 3',
          duration: '12:17',
          vimeoID: '1127914726',
        },
        {
          title: '12. BÀI 8 GIA PHẢ PHẦN 1',
          duration: '09:08',
          vimeoID: '1127915123',
        },
        {
          title: '13. BÀI 8 GIA PHẢ PHẦN 2',
          duration: '06:44',
          vimeoID: '1127915180',
        },
        {
          title: '14. BÀI 9 ĐỒ ĂN VÀ THỨC UỐNG',
          duration: '18:08',
          vimeoID: '1127915723',
        },
        {
          title: '15. BÀI 10 MÔ TẢ CĂN NHÀ',
          duration: '20:05',
          vimeoID: '1127915790',
        },
        {
          title: '16. BÀI 11 MÔ TẢ CĂN PHÒNG',
          duration: '08:49',
          vimeoID: '1127915615',
        },
        {
          title: '17. BÀI 12 CƠ THỂ CON NGƯỜI',
          duration: '17:31',
          vimeoID: '1127915657',
        },
        {
          title: '18. BÀI 13 SỨC KHOẺ CON NGƯỜI',
          duration: '13:41',
          vimeoID: '1127916360',
        },
        {
          title: '19. BÀI 14 HOẠT ĐỘNG GIẢI TRÍ',
          duration: '13:02',
          vimeoID: '1127916096',
        },
        {
          title: '20. BÀI 15 MUA SẮM',
          duration: '10:22',
          vimeoID: '1128910882',
        },
        {
          title: '21. BÀI 16 HỌC TẬP',
          duration: '15:58',
          vimeoID: '1128910950',
        },
        {
          title: '22. BÀI 17 DU LỊCH VÀ CÁC KÌ NGHỈ',
          duration: '11:18',
          vimeoID: '1128911021',
        },
        {
          title: '23. BÀI 18 ÂM NHẠC VÀ PHIM ẢNH',
          duration: '14:55',
          vimeoID: '1128911104',
        },
        {
          title: '24. BÀI 19 THỂ THAO',
          duration: '12:42',
          vimeoID: '1128910511',
        },
        {
          title: '25. BÀI 20 CÔNG VIỆC VÀ ĐỒNG NGHIỆP',
          duration: '10:47',
          vimeoID: '1128910572',
        },
        {
          title: '26. BÀI 21 PHƯƠNG TIỆN GIAO THÔNG',
          duration: '15:32',
          vimeoID: '1128910631',
        },
        {
          title: '27. BÀI 22 TRANG PHỤC',
          duration: '19:33',
          vimeoID: '1128910681',
        },
        {
          title: '28. BÀI 23 TECHNOLOGY AND COMMUNICATIONS',
          duration: '13:04',
          vimeoID: '1128910740',
        },
        {
          title: '29. BÀI 24 EMAIL',
          duration: '14:27',
          vimeoID: '1128910786',
        },
        {
          title: '30. BÀI 25 TELEPHONE',
          duration: '13:09',
          vimeoID: '1128910838',
        },
      ],
    },
  ],
}
