document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 'B001',
            title: 'Học Giỏi Cách Nào Đây?',
            author: 'Biệt đội Claro',
            image: '/assets/img/product/product1.jpg',
            originalPrice: 145000,
            salePrice: 112000,
            tags: ['Best seller', '-23%'],
            inventory: 18
        },
        {
            id: 'B002',
            title: 'Nghệ Thuật Đàm Phán Thuyết Phục Bất Kỳ Ai',
            author: 'Chris Voss',
            image: '/assets/img/product/product2.jpg',
            originalPrice: 189000,
            salePrice: 142000,
            tags: ['Hot deal'],
            inventory: 9
        },
        {
            id: 'B003',
            title: 'Chân Dung Tội Ác - Nhân Dạng Của Quỷ',
            author: 'Stefan Ahnhem',
            image: '/assets/img/product/product3.jpg',
            originalPrice: 210000,
            salePrice: 168000,
            tags: ['New'],
            inventory: 26
        },
        {
            id: 'B004',
            title: 'Sáng Tạo Không Giới Hạn',
            author: 'Claro Studio',
            image: '/assets/img/product/product4.jpg',
            originalPrice: 175000,
            salePrice: 139000,
            tags: ['Trending'],
            inventory: 12
        },
        {
            id: 'B005',
            title: 'Thiết Kế Tư Duy Cho Người Mới Bắt Đầu',
            author: 'Kim Dung',
            image: '/assets/img/product/product5.jpg',
            originalPrice: 165000,
            salePrice: 129000,
            tags: ['New', 'Digital'],
            inventory: 21
        },
        {
            id: 'B006',
            title: 'Giải Mã Sáng Tạo',
            author: 'Claro Lab',
            image: '/assets/img/product/prudct6.jpg',
            originalPrice: 199000,
            salePrice: 152000,
            tags: ['Best seller'],
            inventory: 6
        },
        {
            id: 'B007',
            title: 'Thấu Hiểu Khách Hàng Trong 5 Bước',
            author: 'Team Insight',
            image: '/assets/img/product/product7.png',
            originalPrice: 185000,
            salePrice: 148000,
            tags: ['Hot deal', 'Limited'],
            inventory: 4
        },
        {
            id: 'B008',
            title: 'Xây Dựng Quy Trình Tinh Gọn',
            author: 'Claro Ops',
            image: '/assets/img/product/product8.png',
            originalPrice: 172000,
            salePrice: 136000,
            tags: ['Trending'],
            inventory: 15
        },
        {
            id: 'B009',
            title: 'Tăng Tốc Học Tập Với AI',
            author: 'Claro Tech',
            image: '/assets/img/product/product9.png',
            originalPrice: 220000,
            salePrice: 176000,
            tags: ['AI', 'New'],
            inventory: 11
        }
    ];

    const formatCurrency = (value) =>
        new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            maximumFractionDigits: 0
        }).format(value);

    const productGrid = document.getElementById('product-grid');

    const renderProducts = (list) => {
        if (!productGrid) {
            return;
        }

        productGrid.innerHTML = '';

        if (!list.length) {
            const emptyState = document.createElement('div');
            emptyState.className = 'col-12';
            emptyState.innerHTML = `
                <div class="product-card text-center py-5">
                    <h3 class="mb-2">Chưa có kết quả phù hợp</h3>
                    <p class="text-muted mb-0">Bạn thử tìm với từ khóa khác nhé!</p>
                </div>
            `;
            productGrid.appendChild(emptyState);
            return;
        }

        const fragment = document.createDocumentFragment();

        list.forEach((product) => {
            const col = document.createElement('div');
            col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 d-flex';

            col.innerHTML = `
                <article class="product-card h-100 w-100" data-product-id="${product.id}">
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
                </article>
            `;

            fragment.appendChild(col);
        });

        productGrid.appendChild(fragment);
    };

    if (productGrid) {
        renderProducts(products);
    }

    const searchForm = document.querySelector('.search-form');

    if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const query = searchForm.querySelector('input[type="search"]')?.value.trim();

            if (!query) {
                renderProducts(products);
                return;
            }

            const filteredProducts = products.filter((product) => {
                const normalizedQuery = query.toLowerCase();
                return (
                    product.title.toLowerCase().includes(normalizedQuery) ||
                    product.author?.toLowerCase().includes(normalizedQuery) ||
                    product.tags?.some((tag) => tag.toLowerCase().includes(normalizedQuery))
                );
            });

            renderProducts(filteredProducts);
        });
    }
});

