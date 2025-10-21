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
  'toeic-intermediate': [
    {
      title: 'TOEIC 600+',
      progress: '1/2',
      duration: '00:15:40',
      details: [
        {
          title: 'Lesson 1.1 Giới thiệu về khóa học',
          duration: '06:25',
          vimeoID: '1129062043',
        },
        {
          title: 'Lesson 1.2 Giới thiệu về khóa học',
          duration: '04:00',
          vimeoID: '1129062063',
        },
        {
          title: 'Lesson 2 Listening Tranh tả người',
          duration: '17:22',
          vimeoID: '1129062082',
        },
        {
          title: 'Lesson 3 Reading Giới thiệu chung về Part 5',
          duration: '07:17',
          vimeoID: '1129062120',
        },
        {
          title: 'Lesson 4 Listening Giới thiệu chung về câu hỏi WH và câu hỏi How',
          duration: '16:30',
          vimeoID: '1129062135',
        },
        {
          title: 'Lesson 5.1 Reading Danh từ',
          duration: '09:34',
          vimeoID: '1129062167',
        },
        {
          title: 'Lesson 5.2 Reading Danh từ',
          duration: '10:10',
          vimeoID: '1129062189',
        },
        {
          title: 'Lesson 7 Listening Tranh tả vật',
          duration: '12:09',
          vimeoID: '1129062208',
        },
        {
          title: 'Lesson 8.1 Reading Đại từ',
          duration: '20:14',
          vimeoID: '1129062237',
        },
        {
          title: 'Lesson 8.2 Reading Đại từ',
          duration: '11:57',
          vimeoID: '1129062259',
        },
        {
          title: 'Lesson 10 Listening 7 dạng câu hỏi What',
          duration: '09:48',
          vimeoID: '1129062278',
        },
        {
          title: 'Lesson 11.1 Reading Tính từ',
          duration: '08:20',
          vimeoID: '1129062320',
        },
        {
          title: 'Lesson 11.2 Reading Tính từ',
          duration: '11:26',
          vimeoID: '1129062348',
        },
        {
          title: 'Lesson 13 Listening Tổng ôn tập Part 1',
          duration: '14:38',
          vimeoID: '1129062372',
        },
        {
          title: 'Lesson 14.1 Reading Trạng từ',
          duration: '08:07',
          vimeoID: '1129062398',
        },
        {
          title: 'Lesson 14.2 Reading Trạng từ',
          duration: '22:11',
          vimeoID: '1129062422',
        },
        {
          title: 'Lesson 16 Listening Câu hỏi Why và Câu hỏi lựa chọn.mp4',
          duration: '15:47',
          vimeoID: '1129062446',
        },
        {
          title: 'Lesson 17 Reading 6 Giới thiệu chung về Part 6',
          duration: '20:13',
          vimeoID: '1129062474',
        },
        {
          title: 'Lesson 18 Listening Câu hỏi YesNo',
          duration: '23:59',
          vimeoID: '1129062496',
        },
        {
          title: 'Lesson 19 Reading Hòa hợp S - V',
          duration: '15:37',
          vimeoID: '1129062526',
        },
        {
          title: 'Lesson 21 Listening Giới thiệu về Part 3',
          duration: '09:33',
          vimeoID: '1129062562',
        },
        {
          title: 'Lesson 22.1  Reading Bị động',
          duration: '14:42',
          vimeoID: '1129062595',
        },
        {
          title: 'Lesson 22.2 Reading Bị động',
          duration: '14:11',
          vimeoID: '1129062623',
        },
        {
          title: 'Lesson 24 Listening Câu hỏi nội dung',
          duration: '14:24',
          vimeoID: '1129062662',
        },
        {
          title: 'Lesson 25.1 Reading Liên từ',
          duration: '13:29',
          vimeoID: '1129062705',
        },
        {
          title: 'Lesson 25.2 Reading Liên từ',
          duration: '16:02',
          vimeoID: '1129118153',
        },
        {
          title: 'Lesson 27 Listening Câu hỏi trích dẫn',
          duration: '09:14',
          vimeoID: '1129117821',
        },
        {
          title: 'Lesson 28.1 Reading Mệnh đề quan hệ',
          duration: '13:29',
          vimeoID: '1129117878',
        },
        {
          title: 'Lesson 28.2 Reading Mệnh đề quan hệ',
          duration: '16:02',
          vimeoID: '1129117933',
        },
        {
          title: 'Lesson 32 Listening Giới thiệu về Part 4',
          duration: '07:49',
          vimeoID: '1129117983',
        },
        {
          title: 'Lesson 33 Reading Giới thiệu về Part 7',
          duration: '13:07',
          vimeoID: '1129118012',
        },
        {
          title: 'Lesson 34 Listening Câu hỏi bảng biểu',
          duration: '11:50',
          vimeoID: '1129118061',
        },
        {
          title: 'Lesson 35 Reading Kỹ năng Scanning',
          duration: '16:39',
          vimeoID: '1129118107',
        },
      ],
    },
    {
      title: 'Từ vựng trung cấp 600+',
      progress: '1/2',
      duration: '00:15:40',
      details: [
        {
          title: '1. Chủ đề về hợp đồng và tiếp thị',
          duration: '14:06',
          vimeoID: '1129121942',
        },
        {
          title: '2. Chủ đề về bảo hành và kế hoạch kinh doanh',
          duration: '12:08',
          vimeoID: '1129122079',
        },
        {
          title: '3. Chủ đề về hội thảo và máy tính',
          duration: '24:35',
          vimeoID: '1129122170',
        },
        {
          title: '4. Chủ đề về thiết bị văn phòng - thủ tục tại văn phòng',
          duration: '20:58',
          vimeoID: '1129122289',
        },
        {
          title: '5. Chủ đề về điện tử và thư tín',
          duration: '08:40',
          vimeoID: '1129122392',
        },
        {
          title: '6. Chủ đề về quảng cáo việc làm - tuyển dụng, nộp hồ sơ, phỏng vấn',
          duration: '14:08',
          vimeoID: '1129122520',
        },
        {
          title: '7. Chủ đề về tuyển dụng - đào tạo, tiền lương - phúc lợi',
          duration: '18:38',
          vimeoID: '1129122879',
        },
        {
          title: '8. Chủ đề về khuyến mãi, lương hưu, giải thưởng, mua sắm',
          duration: '14:51',
          vimeoID: '1129123051',
        },
        {
          title: '9. Chủ đề về đặt hàng vật tư và vận chuyển Part 1',
          duration: '10:38',
          vimeoID: '1129123246',
        },
        {
          title: '9. Chủ đề về đặt hàng vật tư và vận chuyển Part 2',
          duration: '10:43',
          vimeoID: '1129123205',
        },
        {
          title: '10. Chủ đề về hóa đơn và hàng tồn kho',
          duration: '12:36',
          vimeoID: '1129123357',
        },
      ],
    },
  ],
  'toeic-advanced': [
    {
      title: 'TOEIC 800+',
      progress: '1/2',
      duration: '00:15:40',
      details: [
        {
          title: 'Lesson 1 Introduction',
          duration: '10:59',
          vimeoID: '1129131482',
        },
        {
          title: 'Lesson 2.1 [Listening] Part 1 - Làm quen với dạng bài tả tranh',
          duration: '13:21',
          vimeoID: '1129131542',
        },
        {
          title: 'Lesson 2.2 [Listening] Part 1 - Làm quen với dạng bài tả tranh',
          duration: '07:13',
          vimeoID: '1129131609',
        },
        {
          title: 'Lesson 3 [Reading] Part 5 _ Part 6 - Mẹo ngữ pháp nâng cao tổng hợp',
          duration: '14:12',
          vimeoID: '1129131668',
        },
        {
          title: 'Lesson 4 [Listening] Part 2 - Dạng câu hỏi Who, Where, When',
          duration: '15:21',
          vimeoID: '1129130328',
        },
        {
          title: 'Lesson 5 [Reading] Part 7 - Giới thiệu cấu trúc bài thi và cách xử lý các dạng câu hỏi',
          duration: '12:02',
          vimeoID: '1129130390',
        },
        {
          title: 'Lesson 6.1 [Listening] Part 3 - Làm quen với dạng câu hỏi hội thoại',
          duration: '11:17',
          vimeoID: '1129130439',
        },
        {
          title: 'Lesson 6.2 [Listening] Part 3 - Làm quen với dạng câu hỏi hội thoại',
          duration: '12:25',
          vimeoID: '1129130480',
        },
        {
          title: 'Lesson 7 [Reading] Part 5 _ Part 6 - Vị trí trạng từ',
          duration: '10:47',
          vimeoID: '1129130513',
        },
        {
          title: 'Lesson 8.1 [Listening] Part 4 - Câu hỏi thông tin chung và thông tin chi tiết',
          duration: '14:28',
          vimeoID: '1129130540',
        },
        {
          title: 'Lesson 8.2 [Listening] Part 4 - Câu hỏi thông tin chung và thông tin chi tiết',
          duration: '06:11',
          vimeoID: '1129130578',
        },
        {
          title: 'Lesson 9.1 [Listening] Part 1 _ Part 2 - Các bẫy thường gặp _ Dạng câu hỏi Why',
          duration: '08:00',
          vimeoID: '1129130603',
        },
        {
          title: 'Lesson 9.2 [Listening] Part 1 _ Part 2 - Các bẫy thường gặp _ Dạng câu hỏi Why',
          duration: '06:07',
          vimeoID: '1129130636',
        },
        {
          title: 'Lesson 10 [Reading] Part 7 - Kỹ thuật paraphrasing (1).mp4',
          duration: '12:44',
          vimeoID: '1129130662',
        },
        {
          title: 'Lesson 11 [Reading] Part 6 _ Part 7 - Câu hỏi điền câu vào đoạn văn.mp4',
          duration: '12:32',
          vimeoID: '1129130681',
        },
        {
          title: 'Lesson 12 [Listening] Part 3 - Dạng câu hỏi bảng biểu',
          duration: '17:02',
          vimeoID: '1129130725',
        },
        {
          title: 'Lesson 13.1 [Reading] Part 5 - Mệnh đề quan hệ',
          duration: '05:52',
          vimeoID: '1129130753',
        },
        {
          title: 'Lesson 13.2 [Reading] Part 5 - Mệnh đề quan hệ',
          duration: '10:37',
          vimeoID: '1129130775',
        },
        {
          title: 'Lesson 14 [Listening] Part 4 - Câu hỏi thông tin chi tiết',
          duration: '12:56',
          vimeoID: '1129130813',
        },
        {
          title: 'Lesson 15 [Reading] Part 5 _ Part 6 - Mệnh đề quan hệ rút gọn',
          duration: '11:18',
          vimeoID: '1129130853',
        },
        {
          title: 'Lesson 16 [Listening] Part 2 - 4 bẫy phổ biến của bài thi',
          duration: '15:17',
          vimeoID: '1129130927',
        },
        {
          title: 'Lesson 17 [Listening] Part 3 - 3 bẫy phổ biến của bài thi',
          duration: '15:11',
          vimeoID: '1129130970',
        },
        {
          title:
            'Lesson 18 [Reading] Part 5 _ Part 6 - Thể giả định theo sau là động từ số ít - Hoà hợp chủ vị nâng cao',
          duration: '13:45',
          vimeoID: '1129130997',
        },
        {
          title: 'Lesson 19 [Listening] Part 4 - Câu hỏi cuối bài nói',
          duration: '10:16',
          vimeoID: '1129131042',
        },
        {
          title: 'Lesson 20 [Reading] Part 6 - Câu hỏi từ vựng',
          duration: '10:34',
          vimeoID: '1129131071',
        },
        {
          title: 'Lesson 21.1 [Reading] Part 7 - Kỹ thuật paraphrasing (2)',
          duration: '07:14',
          vimeoID: '1129131109',
        },
        {
          title: 'Lesson 21.2 [Reading] Part 7 - Kỹ thuật paraphrasing (2)',
          duration: '05:30',
          vimeoID: '1129131125',
        },
        {
          title: 'Lesson 22.1 [Listening] Part 4 - Bẫy nhiễu thông tin',
          duration: '09:51',
          vimeoID: '1129131160',
        },
        {
          title: 'Lesson 22.2 [Listening] Part 4 - Bẫy nhiễu thông tin',
          duration: '13:45',
          vimeoID: '1129131183',
        },
        {
          title: 'Lesson 23 - D3',
          duration: '16:20',
          vimeoID: '1129131247',
        },
        {
          title: 'Lesson 24 [Listening] Part 3 - Tổng ôn',
          duration: '12:57',
          vimeoID: '1129131281',
        },
        {
          title: 'Lesson 25 [Reading] Part 7 - Tổng ôn',
          duration: '10:25',
          vimeoID: '1129131308',
        },
        {
          title: 'Lesson 27.1 Chữa đề Thực chiến đề thi TOEIC',
          duration: '10:44',
          vimeoID: '1129131341',
        },
        {
          title: 'Lesson 27.2 Chữa đề Thực chiến đề thi TOEIC',
          duration: '05:21',
          vimeoID: '1129131370',
        },
        {
          title: 'Lesson 27.3 Chữa đề Thực chiến đề thi TOEIC',
          duration: '12:02',
          vimeoID: '1129131405',
        },
        {
          title: 'Lesson 27.4 Chữa đề Thực chiến đề thi TOEIC',
          duration: '09:48',
          vimeoID: '1129131447',
        },
      ],
    },
    {
      title: 'Từ vựng',
      progress: '1/2',
      duration: '00:15:40',
      details: [
        {
          title: '1. Chủ đề về ngân hàng và kế toán',
          duration: '13:04',
          vimeoID: '1129241374',
        },
        {
          title: '2. Chủ đề về đầu tư và thuế part 1',
          duration: '17:16',
          vimeoID: '1129135081',
        },
        {
          title: '2. Chủ đề về đầu tư và thuế part 2',
          duration: '11:58',
          vimeoID: '1129135123',
        },
        {
          title: '3. Chủ đề về báo cáo tài chính_tài sản, phòng ban',
          duration: '17:23',
          vimeoID: '1129135172',
        },
        {
          title: '4. Chủ đề về các cuộc họp HDQT _ ủy ban và kiểm soát chất lượng',
          duration: '11:40',
          vimeoID: '1129135272',
        },
        {
          title: '5. Chủ đề về phát triển sản phẩm và cho thuê',
          duration: '16:59',
          vimeoID: '1129135367',
        },
        {
          title: '6. Chủ đề về chọn nhà hàng và ăn ngoài',
          duration: '17:22',
          vimeoID: '1129135425',
        },
        {
          title: '7. Chủ đề về đặt đồ ăn trưa và nghề nấu ăn',
          duration: '14:33',
          vimeoID: '1129135502',
        },
        {
          title: '8. Chủ đề về sự kiện và du lịch tổng hợp',
          duration: '17:11',
          vimeoID: '1129135593',
        },
        {
          title: '9. Chủ đề về hàng không và tàu',
          duration: '10:11',
          vimeoID: '1129135678',
        },
        {
          title: '10. Chủ đề về khách sạn và cho thuê ô tô',
          duration: '12:27',
          vimeoID: '1129135765',
        },
        {
          title: '11. Chủ đề về rạp chiếu phim và kịch nghệ',
          duration: '17:53',
          vimeoID: '1129135844',
        },
        {
          title: '12. Chủ đề về âm nhạc và bảo tàng',
          duration: '16:20',
          vimeoID: '1129135942',
        },
        {
          title: '13. Chủ đề về truyền thông và phòng khám',
          duration: '13:48',
          vimeoID: '1129136051',
        },
        {
          title: '14. Chủ đề về nha sĩ và bảo hiểm y tê',
          duration: '18:23',
          vimeoID: '1129136161',
        },
        {
          title: '15. Chủ đề về bệnh viện và y dược',
          duration: '13:01',
          vimeoID: '1129136252',
        },
      ],
    },
  ],
}
