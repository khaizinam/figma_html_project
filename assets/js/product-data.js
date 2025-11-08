(function () {
    const productImagePool = [
        '/assets/img/product/product1.jpg',
        '/assets/img/product/product2.jpg',
        '/assets/img/product/product3.jpg',
        '/assets/img/product/product4.jpg',
        '/assets/img/product/product5.jpg',
        '/assets/img/product/prudct6.jpg',
        '/assets/img/product/product7.png',
        '/assets/img/product/product8.png',
        '/assets/img/product/product9.png'
    ];

    const baseProducts = [
        {
            id: 'B001',
            title: 'Học Giỏi Cách Nào Đây?',
            author: 'Biệt đội Claro',
            originalPrice: 145000,
            salePrice: 112000,
            tags: ['Best seller', '-23%'],
            inventory: 18
        },
        {
            id: 'B002',
            title: 'Nghệ Thuật Đàm Phán Thuyết Phục Bất Kỳ Ai',
            author: 'Chris Voss',
            originalPrice: 189000,
            salePrice: 142000,
            tags: ['Hot deal'],
            inventory: 9
        },
        {
            id: 'B003',
            title: 'Chân Dung Tội Ác - Nhân Dạng Của Quỷ',
            author: 'Stefan Ahnhem',
            originalPrice: 210000,
            salePrice: 168000,
            tags: ['New'],
            inventory: 26
        },
        {
            id: 'B004',
            title: 'Sáng Tạo Không Giới Hạn',
            author: 'Claro Studio',
            originalPrice: 175000,
            salePrice: 139000,
            tags: ['Trending'],
            inventory: 12
        },
        {
            id: 'B005',
            title: 'Thiết Kế Tư Duy Cho Người Mới Bắt Đầu',
            author: 'Kim Dung',
            originalPrice: 165000,
            salePrice: 129000,
            tags: ['New', 'Digital'],
            inventory: 21
        },
        {
            id: 'B006',
            title: 'Giải Mã Sáng Tạo',
            author: 'Claro Lab',
            originalPrice: 199000,
            salePrice: 152000,
            tags: ['Best seller'],
            inventory: 6
        },
        {
            id: 'B007',
            title: 'Thấu Hiểu Khách Hàng Trong 5 Bước',
            author: 'Team Insight',
            originalPrice: 185000,
            salePrice: 148000,
            tags: ['Hot deal', 'Limited'],
            inventory: 4
        },
        {
            id: 'B008',
            title: 'Xây Dựng Quy Trình Tinh Gọn',
            author: 'Claro Ops',
            originalPrice: 172000,
            salePrice: 136000,
            tags: ['Trending'],
            inventory: 15
        },
        {
            id: 'B009',
            title: 'Tăng Tốc Học Tập Với AI',
            author: 'Claro Tech',
            originalPrice: 220000,
            salePrice: 176000,
            tags: ['AI', 'New'],
            inventory: 11
        },
        {
            id: 'B010',
            title: 'Bí Quyết Quản Lý Thời Gian 4.0',
            author: 'Thảo My',
            originalPrice: 158000,
            salePrice: 124000,
            tags: ['Productivity'],
            inventory: 17
        },
        {
            id: 'B011',
            title: 'Khởi Nghiệp Bền Vững',
            author: 'Nguyễn Đức Long',
            originalPrice: 215000,
            salePrice: 169000,
            tags: ['Limited'],
            inventory: 8
        },
        {
            id: 'B012',
            title: 'Marketing Nội Dung Từ A Đến Z',
            author: 'Phương Anh',
            originalPrice: 198000,
            salePrice: 149000,
            tags: ['Hot deal'],
            inventory: 19
        },
        {
            id: 'B013',
            title: '30 Ngày Phát Triển Bản Thân',
            author: 'Linh Chi',
            originalPrice: 142000,
            salePrice: 109000,
            tags: ['New'],
            inventory: 24
        },
        {
            id: 'B014',
            title: 'Phân Tích Dữ Liệu Cho Người Mới',
            author: 'Data School',
            originalPrice: 232000,
            salePrice: 185000,
            tags: ['AI', 'Trending'],
            inventory: 13
        },
        {
            id: 'B015',
            title: 'Thiết Kế UI Hiện Đại',
            author: 'Claro Design',
            originalPrice: 188000,
            salePrice: 142000,
            tags: ['Digital'],
            inventory: 20
        },
        {
            id: 'B016',
            title: 'Đọc Hiểu Tư Duy Người Dùng',
            author: 'UX Lab',
            originalPrice: 205000,
            salePrice: 158000,
            tags: ['Research'],
            inventory: 10
        },
        {
            id: 'B017',
            title: 'Quy Trình Agile Tinh Gọn',
            author: 'Team Sprint',
            originalPrice: 196000,
            salePrice: 147000,
            tags: ['Best seller'],
            inventory: 14
        },
        {
            id: 'B018',
            title: 'Hành Trình Thấu Cảm Khách Hàng',
            author: 'Insight Hub',
            originalPrice: 174000,
            salePrice: 132000,
            tags: ['Customer'],
            inventory: 22
        },
        {
            id: 'B019',
            title: 'Xây Dựng Thương Hiệu Cá Nhân',
            author: 'Phạm Tâm',
            originalPrice: 210000,
            salePrice: 158000,
            tags: ['Branding'],
            inventory: 7
        },
        {
            id: 'B020',
            title: 'Khóa Học Sáng Tạo Nội Dung',
            author: 'Claro Academy',
            originalPrice: 168000,
            salePrice: 126000,
            tags: ['Workshop', 'New'],
            inventory: 16
        }
    ];

    const products = baseProducts.map((product, index) => ({
        ...product,
        image: productImagePool[index % productImagePool.length]
    }));

    const formatCurrency = (value) =>
        new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            maximumFractionDigits: 0
        }).format(value);

    const discountPercent = (product) =>
        Math.max(
            0,
            Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)
        );

    const productDescription = [
        'Tội phạm, nhất là những vụ án mạng, luôn là một chủ đề thu hút sự quan tâm của công chúng, khơi gợi sự hiếu kỳ của bất cứ ai. Một khi đã bắt đầu theo dõi vụ án, hẳn bạn không thể không quan tâm tới kết cục, đặc biệt là cách thức và động cơ của kẻ sát nhân, từ những vụ án phạm vi hẹp cho đến những vụ án làm rúng động cả thế giới.',
        'Lấy 36 vụ án có thật kinh điển nhất trong hồ sơ tội phạm của FBI, “Tâm lý học tội phạm - phác họa chân dung kẻ phạm tội” mang đến cái nhìn toàn cảnh của các chuyên gia về chân dung tâm lý tội phạm. Trả lời cho câu hỏi: Làm thế nào phân tích được tâm lý và hành vi tội phạm, từ đó khôi phục sự thật thông qua các manh mối, từ hiện trường vụ án, thời gian, dấu tích,… để tìm ra kẻ sát nhân thực sự.',
        'Đằng sau máu và nước mắt là các câu chuyện rợn tóc gáy về tội ác, góc khuất xã hội và những màn đấu trí đầy gay cấn giữa điều tra viên và kẻ phạm tội. Trong số đó có những con quỷ ăn thịt người; những cô gái xinh đẹp nhưng xảo quyệt; và cả cách trả thù đầy man rợ của các nhà khoa học,… Một số đã sa vào lưới pháp luật ngay khi chúng vừa ra tay, nhưng cũng có những kẻ cứ vậy ngủ yên hơn hai mươi năm.',
        'Bằng giọng văn sắc bén, “Tâm lý học tội phạm - phác họa chân dung kẻ phạm tội” hứa hẹn dẫn dắt người đọc đi qua các cung bậc cảm xúc từ tò mò, ngạc nhiên đến sợ hãi, hoang mang tận cùng. Chúng ta sẽ lần tìm về quá khứ để từng bước gỡ những nút thắt chưa được giải, khiến ta "ngạt thở" đọc tới tận trang cuối cùng.',
        'Hy vọng cuốn sách sẽ giúp bạn có cái nhìn sâu sắc, rõ ràng hơn về bộ môn tâm lý học tội phạm và có thể rèn luyện thêm sự tư duy, nhạy bén.'
    ];

    const productDetailDefaults = {
        supplier: 'AZ Việt Nam',
        publisher: 'NXB Thanh Niên',
        translator: 'Đỗ Ái Nhi',
        publishYear: '2021',
        language: 'Tiếng Việt',
        weight: '300g',
        size: '24 × 16 cm × 1,4',
        pages: '280',
        coverType: 'Bìa mềm',
        ratingCount: 0
    };

    const createProductCardMarkup = (product) => `
        <article class="product-card h-100 w-100" data-product-id="${product.id}">
            <a class="product-card-link" href="/product.html?id=${encodeURIComponent(product.id)}">
                <figure class="product-thumb mb-0">
                    <img src="${product.image}" alt="${product.title}">
                </figure>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-prices">
                        <span class="product-price-original">${formatCurrency(product.originalPrice)}</span>
                        <span class="product-price-sale">${formatCurrency(product.salePrice)}</span>
                    </div>
                </div>
            </a>
        </article>
    `;

    window.ProductData = {
        productImagePool,
        products,
        productDescription,
        productDetailDefaults,
        formatCurrency,
        discountPercent,
        createProductCardMarkup,
        getGalleryImages: () => productImagePool.slice(0, 5),
        findProductById: (productId) => products.find((product) => product.id === productId)
    };
})();

