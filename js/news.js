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

        // 把 content 裡的換行變成真正的斷行，並允許插入 <img>
        formatNewsContent(content) {
            if (!content) return '暫無詳細內容。';
            return String(content).replace(/\n/g, '<br>');
        },

        /*
          如何新增一則消息：複製下面整筆，改 id（不可重複）、date、type、title、content、url。
          type 只能填「學校」或「班級」。
          url 沒有外部連結就填 ''。

          內文 content 請用反引號 ` ` 包起來，這樣才能換行。
          換行：直接按 Enter。
          插入圖片：把圖檔放到 images 資料夾，然後寫
            <img src="images/檔名.jpg" alt="圖片說明">
        */
        newsItems: [
            {
                id: 1,
                date: '2026-08-20',
                type: '學校',
                title: '115學年度親師座談：9/19 (六) 8:00-12:00 邀請公告 (無論是否參加，請於 9/30 前填寫完畢)',
                content: `親愛的家長：您好！

為了讓您能夠了解學校的發展與規劃，以及您的子弟在校的生活與學習情形，謹訂於115年9月19日（星期六）上午8:00舉辦家長親師座談會，誠摯的邀請您一起來關心下一代。有您的加入，相信基隆商工及您的子女一定會更好！

國立基隆高級商工職業學校 敬上

＊時間：115年9月19日（星期六）上午08:00～12:00
＊地點：本校活動中心
＊為響應環保，請家長自備環保杯
＊本校停車位有限，請盡量搭乘大眾交通工具
＊請點擊以下連結填寫表單`,
                img: "images/親師座談會.jpg",
                img_alt: "親師座談",
                url: 'https://docs.google.com/forms/d/e/1FAIpQLSfXTJN1qi4NYRoJMgSmqbXGujBXA76A1O26m2cKLxBehabU2Q/viewform'
            },
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
