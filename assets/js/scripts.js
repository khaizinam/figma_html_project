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

const PRODUCTS = [
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
].map((product, index) => ({
    ...product,
    image: productImagePool[index % productImagePool.length]
}));

    const formatCurrency = (value) =>
        new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            maximumFractionDigits: 0
        }).format(value);

const findProductById = (productId) => PRODUCTS.find((product) => product.id === productId);

const PRODUCT_GALLERY_IMAGES = productImagePool.slice(0, 5);

const PRODUCT_DESCRIPTION = [
    'Tội phạm, nhất là những vụ án mạng, luôn là một chủ đề thu hút sự quan tâm của công chúng, khơi gợi sự hiếu kỳ của bất cứ ai. Một khi đã bắt đầu theo dõi vụ án, hẳn bạn không thể không quan tâm tới kết cục, đặc biệt là cách thức và động cơ của kẻ sát nhân, từ những vụ án phạm vi hẹp cho đến những vụ án làm rúng động cả thế giới.',
    'Lấy 36 vụ án có thật kinh điển nhất trong hồ sơ tội phạm của FBI, “Tâm lý học tội phạm - phác họa chân dung kẻ phạm tội” mang đến cái nhìn toàn cảnh của các chuyên gia về chân dung tâm lý tội phạm. Trả lời cho câu hỏi: Làm thế nào phân tích được tâm lý và hành vi tội phạm, từ đó khôi phục sự thật thông qua các manh mối, từ hiện trường vụ án, thời gian, dấu tích,… để tìm ra kẻ sát nhân thực sự.',
    'Đằng sau máu và nước mắt là các câu chuyện rợn tóc gáy về tội ác, góc khuất xã hội và những màn đấu trí đầy gay cấn giữa điều tra viên và kẻ phạm tội. Trong số đó có những con quỷ ăn thịt người; những cô gái xinh đẹp nhưng xảo quyệt; và cả cách trả thù đầy man rợ của các nhà khoa học,… Một số đã sa vào lưới pháp luật ngay khi chúng vừa ra tay, nhưng cũng có những kẻ cứ vậy ngủ yên hơn hai mươi năm.',
    'Bằng giọng văn sắc bén, “Tâm lý học tội phạm - phác họa chân dung kẻ phạm tội” hứa hẹn dẫn dắt người đọc đi qua các cung bậc cảm xúc từ tò mò, ngạc nhiên đến sợ hãi, hoang mang tận cùng. Chúng ta sẽ lần tìm về quá khứ để từng bước gỡ những nút thắt chưa được giải, khiến ta "ngạt thở" đọc tới tận trang cuối cùng.',
    'Hy vọng cuốn sách sẽ giúp bạn có cái nhìn sâu sắc, rõ ràng hơn về bộ môn tâm lý học tội phạm và có thể rèn luyện thêm sự tư duy, nhạy bén.'
];

const PRODUCT_DETAIL_DEFAULTS = {
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

const discountPercent = (product) =>
    Math.max(
        0,
        Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)
    );

document.addEventListener('DOMContentLoaded', () => {
    const productDetailContainer = document.getElementById('product-detail');
    const productDescriptionContent = document.getElementById('product-description-content');
    const productGrid = document.getElementById('product-grid');
    const relatedProductsGrid = document.getElementById('related-products-grid');

    const renderProducts = (list = PRODUCTS, targetGrid = productGrid, options = {}) => {
        if (!targetGrid) {
            return;
        }

        const { showEmptyState = true } = options;
        const layout = targetGrid.dataset?.layout;
        const columnClass =
            layout === 'three'
                ? 'col-12 col-sm-6 col-lg-4 d-flex'
                : 'col-12 col-sm-6 col-md-4 col-lg-3 d-flex';

        targetGrid.innerHTML = '';

        if (!list.length) {
            if (!showEmptyState) {
                return;
            }

            const emptyState = document.createElement('div');
            emptyState.className = 'col-12';
            emptyState.innerHTML = `
                <div class="product-card text-center py-5">
                    <h3 class="mb-2">Chưa có kết quả phù hợp</h3>
                    <p class="text-muted mb-0">Bạn thử tìm với từ khóa khác nhé!</p>
                </div>
            `;
            targetGrid.appendChild(emptyState);
            return;
        }

        const fragment = document.createDocumentFragment();

        list.forEach((product) => {
            const col = document.createElement('div');
            col.className = columnClass;
            col.innerHTML = createProductCardMarkup(product);

            fragment.appendChild(col);
        });

        targetGrid.appendChild(fragment);
    };

    if (productGrid) {
        renderProducts(PRODUCTS, productGrid);
    }

    if (productDetailContainer) {
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');
        const product = productId ? findProductById(productId) : undefined;

        if (!product) {
            window.location.replace('/products.html');
            return;
        }

        document.title = `${product.title} - Claro Shop`;

        const tagMarkup = product.tags
            ?.map((tag) => `<span class="product-detail-tag">${tag}</span>`)
            .join('');

        const galleryImages = PRODUCT_GALLERY_IMAGES;

        const detailMetaItems = [
            { label: 'Mã hàng', value: product.id },
            { label: 'Nhà cung cấp', value: PRODUCT_DETAIL_DEFAULTS.supplier },
            { label: 'Tác giả', value: product.author ?? 'Claro Publishing' },
            { label: 'Người dịch', value: PRODUCT_DETAIL_DEFAULTS.translator },
            { label: 'Nhà xuất bản', value: PRODUCT_DETAIL_DEFAULTS.publisher },
            { label: 'Năm xuất bản', value: PRODUCT_DETAIL_DEFAULTS.publishYear },
            { label: 'Ngôn ngữ', value: PRODUCT_DETAIL_DEFAULTS.language },
            { label: 'Trọng lượng', value: PRODUCT_DETAIL_DEFAULTS.weight },
            { label: 'Kích thước bao bì', value: PRODUCT_DETAIL_DEFAULTS.size },
            { label: 'Số trang', value: PRODUCT_DETAIL_DEFAULTS.pages },
            { label: 'Hình thức', value: PRODUCT_DETAIL_DEFAULTS.coverType }
        ];

        productDetailContainer.innerHTML = `
            <div class="product-detail-card">
                <div class="product-detail-layout">
                    <aside class="product-detail-sidebar">
                        <div class="product-gallery">
                            <div class="swiper product-gallery-main">
                                <div class="swiper-wrapper">
                                    ${galleryImages
                                        .map(
                                            (image) => `
                                                <div class="swiper-slide product-gallery-slide">
                                                    <img src="${image}" alt="${product.title}">
                                                </div>
                                            `
                                        )
                                        .join('')}
                                </div>
                                <div class="swiper-button-prev product-gallery-prev"></div>
                                <div class="swiper-button-next product-gallery-next"></div>
                            </div>
                            <div class="swiper product-gallery-thumbs">
                                <div class="swiper-wrapper">
                                    ${galleryImages
                                        .map(
                                            (image) => `
                                                <div class="swiper-slide product-gallery-thumb">
                                                    <img src="${image}" alt="Xem thêm ${product.title}">
                                                </div>
                                            `
                                        )
                                        .join('')}
                                </div>
                            </div>
                        </div>
                        <div class="product-detail-actions">
                            <button class="btn btn-primary btn-lg w-100">Thêm vào giỏ hàng</button>
                            <button class="btn btn-outline-secondary btn-lg w-100">Mua ngay</button>
                        </div>
                        <div class="product-policy-card product-detail-policy-card">
                            <h3 class="product-policy-title">Chính sách ưu đãi</h3>
                            <ul class="product-policy-list">
                                <li><i class="fa-solid fa-truck"></i> Thời gian giao hàng nhanh chóng</li>
                                <li><i class="fa-solid fa-rotate"></i> Đổi trả trong vòng 7 ngày</li>
                                <li><i class="fa-solid fa-gift"></i> Ưu đãi dành cho khách hàng thân thiết</li>
                            </ul>
                        </div>
                    </aside>
                    <div class="product-detail-content">
                        <div class="product-detail-info">
                            <div class="product-detail-meta-top">
                                <h1 class="product-detail-title">${product.title}</h1>
                                <div class="product-detail-rating">
                                    <span>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </span>
                                    <span>(${PRODUCT_DETAIL_DEFAULTS.ratingCount} đánh giá)</span>
                                </div>
                                <p class="product-detail-author">Nhà cung cấp: ${PRODUCT_DETAIL_DEFAULTS.supplier}</p>
                                <p class="product-detail-author">Nhà xuất bản: ${PRODUCT_DETAIL_DEFAULTS.publisher}</p>
                            </div>
                            <div class="product-detail-summary">
                                <span class="product-price-sale">${formatCurrency(product.salePrice)}</span>
                                <span class="product-price-original">${formatCurrency(product.originalPrice)}</span>
                                <span class="product-detail-badge">-${discountPercent(product)}%</span>
                            </div>
                            ${tagMarkup ? `<div class="product-detail-tags">${tagMarkup}</div>` : ''}
                            <p class="product-detail-inventory">Số lượng còn lại: ${product.inventory}</p>
                        </div>
                        <div class="product-detail-meta">
                            <h2 class="product-detail-meta-title">Thông tin chi tiết</h2>
                            <div class="product-detail-specs">
                                ${detailMetaItems
                                    .map(
                                        (item) => `
                                            <div class="product-detail-spec">
                                                <span class="product-detail-spec-label">${item.label}</span>
                                                <span class="product-detail-spec-value">${item.value}</span>
                                            </div>
                                        `
                                    )
                                    .join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        if (productDescriptionContent) {
            const descriptionFragment = document.createDocumentFragment();

            PRODUCT_DESCRIPTION.forEach((paragraph, index) => {
                const paragraphElement = document.createElement('p');

                if (index === 0) {
                    paragraphElement.innerHTML = '';
                    const highlight = document.createElement('strong');
                    highlight.textContent = product.title.toUpperCase();
                    paragraphElement.appendChild(highlight);
                    paragraphElement.appendChild(document.createElement('br'));
                    paragraphElement.appendChild(document.createTextNode(paragraph));
                } else {
                    paragraphElement.textContent = paragraph;
                }

                descriptionFragment.appendChild(paragraphElement);
            });

            productDescriptionContent.innerHTML = '';
            productDescriptionContent.appendChild(descriptionFragment);
        }

        if (relatedProductsGrid) {
            const relatedProducts = PRODUCTS.filter((item) => item.id !== product.id).slice(0, 6);
            renderProducts(relatedProducts, relatedProductsGrid, { showEmptyState: false });
        }

        if (typeof Swiper !== 'undefined') {
            const thumbsEl = productDetailContainer.querySelector('.product-gallery-thumbs');
            const mainEl = productDetailContainer.querySelector('.product-gallery-main');
            const nextEl = productDetailContainer.querySelector('.product-gallery-next');
            const prevEl = productDetailContainer.querySelector('.product-gallery-prev');

            if (thumbsEl && mainEl && nextEl && prevEl) {
                const thumbsSwiper = new Swiper(thumbsEl, {
                    spaceBetween: 12,
                    slidesPerView: 4,
                    freeMode: true,
                    watchSlidesProgress: true,
                    breakpoints: {
                        0: { slidesPerView: 3 },
                        576: { slidesPerView: 4 }
                    }
                });

                new Swiper(mainEl, {
                    spaceBetween: 16,
                    navigation: {
                        nextEl,
                        prevEl
                    },
                    thumbs: {
                        swiper: thumbsSwiper
                    }
                });
            }
        }
    }

    const searchForm = document.querySelector('.search-form');

    if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const query = searchForm.querySelector('input[type="search"]')?.value.trim();

            if (!productGrid) {
                return;
            }

            if (!query) {
                renderProducts(PRODUCTS, productGrid);
                return;
            }

                const normalizedQuery = query.toLowerCase();
            const filteredProducts = PRODUCTS.filter(
                (product) =>
                    product.title.toLowerCase().includes(normalizedQuery) ||
                    product.author?.toLowerCase().includes(normalizedQuery) ||
                    product.tags?.some((tag) => tag.toLowerCase().includes(normalizedQuery))
                );

            renderProducts(filteredProducts, productGrid);
        });
    }
});

