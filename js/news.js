function newsData() {
    return {
        currentPage: 1,
        itemsPerPage: 15,
        isModalOpen: false,
        selectedNews: null,

        openNewsModal(news) {
            this.selectedNews = news;
            this.isModalOpen = true;
            setTimeout(refreshIcons, 50);
        },
        closeNewsModal() {
            this.isModalOpen = false;
            this.selectedNews = null;
        },

        newsItems: [
            {
                id: 1,
                date: '2026-08-19',
                type: '學校',
                title: '【重要公告】因颱風來襲明日全面停課',
                content: '因應強烈颱風將於今晚侵襲，依據市府災害應變中心宣佈，本校明日（8/20）全面停止上班上課。請家長協助提醒學童留在家中切勿外出，確保個人安全。',
                url: 'https://example.com/typhoon-notice'
            },
            {
                id: 2,
                date: '2026-08-15',
                type: '學校',
                title: '112學年度下學期期中考時程表',
                content: '本次期中考試將於下週三至週四舉行，請各位家長留意考試範圍與複習進度。相關科目日程請參閱學校通訊。',
                url: 'https://example.com/exam-schedule'
            },
            {
                id: 3,
                date: '2026-08-10',
                type: '學校',
                title: '校園流感疫苗接種意願書發放通知',
                content: '衛生所預定於下月進行學童流感疫苗接種，今日已將意願書發給各班學生，請家長簽署後於本週五前由學生繳回。',
                url: 'https://example.com/vaccine-form'
            },
            {
                id: 4,
                date: '2026-08-05',
                type: '班級',
                title: '三年2班戶外教學行前準備清單',
                content: '親愛的家長您好，下週二為本班校外教學日，請協助學童準備：便當、水壺、雨具與防蚊液，並穿著學校體育服。',
                url: ''
            },
            {
                id: 5,
                date: '2026-07-28',
                type: '班級',
                title: '班級親師交流會預備事項通知',
                content: '本學期親師交流會預計於本週六上午 09:00 於本班教室舉辦，歡迎各位家長踴躍參與。',
                url: 'https://example.com/pt-meeting'
            },
            { id: 6, date: '2026-07-20', type: '學校', title: '暑期輔導課程異動通知', content: '暑期課程相關調整事項說明。', url: '' },
            { id: 7, date: '2026-07-15', type: '學校', title: '防範腸病毒，請假標準與消毒作業說明', content: '衛生宣導與請假停課規定說明。', url: 'https://example.com/health' },
            { id: 8, date: '2026-07-10', type: '班級', title: '班級讀書會圖書借閱調查', content: '請協助確認學童本月讀書會欲借閱之書單。', url: '' },
            { id: 9, date: '2026-07-05', type: '學校', title: '反詐騙宣導講座線上報名', content: '邀請專家蒞校主講網路安全與反詐騙觀念。', url: 'https://example.com/signup' },
            { id: 10, date: '2026-06-30', type: '學校', title: '結業式時間與下學期註冊時程', content: '本學期結業相關時程安排。', url: '' },
            { id: 11, date: '2026-06-25', type: '班級', title: '期末班級同樂會準備物品提醒', content: '請當日攜帶自行準備之環保餐具與小點心。', url: '' },
            { id: 12, date: '2026-06-18', type: '學校', title: '期末考成績單寄發時間', content: '成績單寄發通知說明。', url: '' },
            { id: 13, date: '2026-06-15', type: '學校', title: '夏季制服換季相關規定', content: '換季日期與服儀規範通知。', url: '' },
            { id: 14, date: '2026-06-10', type: '學校', title: '全校閱讀週活動起跑', content: '歡迎全校師生與家長共同參與線上閱讀闖關活動。', url: 'https://example.com/read' },
            { id: 15, date: '2026-06-05', type: '班級', title: '班級自主學習小組分組名單', content: '自主學習組別公告。', url: '' },
            { id: 16, date: '2026-06-01', type: '學校', title: '端午節連假放假注意事項', content: '祝大家端午佳節愉快。', url: '' },
            { id: 17, date: '2026-05-28', type: '學校', title: '五月份各項繳費單補發說明', content: '請尚未繳費的家長於期限內補繳。', url: '' },
        ],

        get paginatedNews() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.newsItems.slice(start, end);
        },
        get totalPages() {
            return Math.ceil(this.newsItems.length / this.itemsPerPage);
        }
    };
}
