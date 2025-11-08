(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const data = window.ProductData;

        if (!data) {
            return;
        }

        const {
            products,
            findProductById,
            getGalleryImages,
            productDescription,
            productDetailDefaults,
            formatCurrency,
            discountPercent,
            createProductCardMarkup
        } = data;

        const productDetailContainer = document.getElementById('product-detail');
        const relatedProductsGrid = document.getElementById('related-products-grid');

        if (!productDetailContainer) {
            return;
        }

        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');
        const product = productId ? findProductById(productId) : undefined;

        if (!product) {
            window.location.replace('/products.html');
            return;
        }

        document.title = `${product.title} - Claro Shop`;

        const tagMarkup = (product.tags ?? [])
            .map((tag) => `<span class="product-detail-tag">${tag}</span>`)
            .join('');

        const galleryImages = getGalleryImages();

        const detailMetaItems = [
            { label: 'Mã hàng', value: product.id },
            { label: 'Nhà cung cấp', value: productDetailDefaults.supplier },
            { label: 'Tác giả', value: product.author ?? 'Claro Publishing' },
            { label: 'Người dịch', value: productDetailDefaults.translator },
            { label: 'Nhà xuất bản', value: productDetailDefaults.publisher },
            { label: 'Năm xuất bản', value: productDetailDefaults.publishYear },
            { label: 'Ngôn ngữ', value: productDetailDefaults.language },
            { label: 'Trọng lượng', value: productDetailDefaults.weight },
            { label: 'Kích thước bao bì', value: productDetailDefaults.size },
            { label: 'Số trang', value: productDetailDefaults.pages },
            { label: 'Hình thức', value: productDetailDefaults.coverType }
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
                        <aside class="product-policy-card product-detail-policy-card">
                            <h3 class="product-policy-title">Chính sách ưu đãi</h3>
                            <ul class="product-policy-list">
                                <li><i class="fa-solid fa-truck"></i> Thời gian giao hàng nhanh chóng</li>
                                <li><i class="fa-solid fa-rotate"></i> Đổi trả trong vòng 7 ngày</li>
                                <li><i class="fa-solid fa-gift"></i> Ưu đãi dành cho khách hàng thân thiết</li>
                            </ul>
                        </aside>
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
                                    <span>(${productDetailDefaults.ratingCount} đánh giá)</span>
                                </div>
                                <p class="product-detail-author">Nhà cung cấp: ${productDetailDefaults.supplier}</p>
                                <p class="product-detail-author">Nhà xuất bản: ${productDetailDefaults.publisher}</p>
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
                        <article class="product-description-card">
                            <h2 class="product-description-title">Mô tả sản phẩm</h2>
                            <div class="product-description-content" id="product-description-content">
                                <p>Nội dung mô tả sẽ được cập nhật ngay khi tải dữ liệu sản phẩm.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        `;

        const descriptionContainer =
            productDetailContainer.querySelector('#product-description-content');

        if (descriptionContainer) {
            const descriptionFragment = document.createDocumentFragment();

            productDescription.forEach((paragraph, index) => {
                const paragraphElement = document.createElement('p');

                if (index === 0) {
                    paragraphElement.innerHTML = `<strong>${product.title.toUpperCase()}</strong><br>${paragraph}`;
                } else {
                    paragraphElement.textContent = paragraph;
                }

                descriptionFragment.appendChild(paragraphElement);
            });

            descriptionContainer.innerHTML = '';
            descriptionContainer.appendChild(descriptionFragment);
        }

        if (relatedProductsGrid) {
            const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 6);
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

        function renderProducts(list = [], targetGrid, options = {}) {
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

            list.forEach((item) => {
                const col = document.createElement('div');
                col.className = columnClass;
                col.innerHTML = createProductCardMarkup(item);
                fragment.appendChild(col);
            });

            targetGrid.appendChild(fragment);
        }
    });
})();
(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const data = window.ProductData;

        if (!data) {
            return;
        }

        const {
            products,
            findProductById,
            getGalleryImages,
            productDescription,
            productDetailDefaults,
            formatCurrency,
            discountPercent,
            createProductCardMarkup
        } = data;

        const productDetailContainer = document.getElementById('product-detail');
        const relatedProductsGrid = document.getElementById('related-products-grid');

        if (!productDetailContainer) {
            return;
        }

        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');
        const product = productId ? findProductById(productId) : undefined;

        if (!product) {
            window.location.replace('/products.html');
            return;
        }

        document.title = `${product.title} - Claro Shop`;

        const tagMarkup = (product.tags ?? [])
            .map((tag) => `<span class="product-detail-tag">${tag}</span>`)
            .join('');

        const galleryImages = getGalleryImages();

        const detailMetaItems = [
            { label: 'Mã hàng', value: product.id },
            { label: 'Nhà cung cấp', value: productDetailDefaults.supplier },
            { label: 'Tác giả', value: product.author ?? 'Claro Publishing' },
            { label: 'Người dịch', value: productDetailDefaults.translator },
            { label: 'Nhà xuất bản', value: productDetailDefaults.publisher },
            { label: 'Năm xuất bản', value: productDetailDefaults.publishYear },
            { label: 'Ngôn ngữ', value: productDetailDefaults.language },
            { label: 'Trọng lượng', value: productDetailDefaults.weight },
            { label: 'Kích thước bao bì', value: productDetailDefaults.size },
            { label: 'Số trang', value: productDetailDefaults.pages },
            { label: 'Hình thức', value: productDetailDefaults.coverType }
        ];

        productDetailContainer.innerHTML = `
            <div class="product-detail-card">
                <div class="product-detail-layout">
                    <div class="product-detail-content product-detail-content--wide">
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
                                    <span>(${productDetailDefaults.ratingCount} đánh giá)</span>
                                </div>
                                <p class="product-detail-author">Nhà cung cấp: ${productDetailDefaults.supplier}</p>
                                <p class="product-detail-author">Nhà xuất bản: ${productDetailDefaults.publisher}</p>
                            </div>
                            <div class="product-detail-summary">
                                <span class="product-price-sale">${formatCurrency(product.salePrice)}</span>
                                <span class="product-price-original">${formatCurrency(product.originalPrice)}</span>
                                <span class="product-detail-badge">-${discountPercent(product)}%</span>
                            </div>
                            ${tagMarkup ? `<div class="product-detail-tags">${tagMarkup}</div>` : ''}
                            <p class="product-detail-inventory">Số lượng còn lại: ${product.inventory}</p>
                        </div>
                        <div class="product-detail-extra">
                            <div class="product-detail-gallery">
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
                                <aside class="product-policy-card product-detail-policy-card">
                                    <h3 class="product-policy-title">Chính sách ưu đãi</h3>
                                    <ul class="product-policy-list">
                                        <li><i class="fa-solid fa-truck"></i> Thời gian giao hàng nhanh chóng</li>
                                        <li><i class="fa-solid fa-rotate"></i> Đổi trả trong vòng 7 ngày</li>
                                        <li><i class="fa-solid fa-gift"></i> Ưu đãi dành cho khách hàng thân thiết</li>
                                    </ul>
                                </aside>
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
                            <article class="product-description-card">
                                <h2 class="product-description-title">Mô tả sản phẩm</h2>
                                <div class="product-description-content" id="product-description-content">
                                    <p>Nội dung mô tả sẽ được cập nhật ngay khi tải dữ liệu sản phẩm.</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const descriptionContainer =
            productDetailContainer.querySelector('#product-description-content');

        if (descriptionContainer) {
            const descriptionFragment = document.createDocumentFragment();

            productDescription.forEach((paragraph, index) => {
                const paragraphElement = document.createElement('p');

                if (index === 0) {
                    paragraphElement.innerHTML = `<strong>${product.title.toUpperCase()}</strong><br>${paragraph}`;
                } else {
                    paragraphElement.textContent = paragraph;
                }

                descriptionFragment.appendChild(paragraphElement);
            });

            descriptionContainer.innerHTML = '';
            descriptionContainer.appendChild(descriptionFragment);
        }

        if (relatedProductsGrid) {
            const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 6);
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

        function renderProducts(list = [], targetGrid, options = {}) {
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

            list.forEach((item) => {
                const col = document.createElement('div');
                col.className = columnClass;
                col.innerHTML = createProductCardMarkup(item);
                fragment.appendChild(col);
            });

            targetGrid.appendChild(fragment);
        }
    });
})();

