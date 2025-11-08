(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const data = window.ProductData;

        if (!data) {
            return;
        }

        const { products, createProductCardMarkup } = data;
        const productGrid = document.getElementById('product-grid');
        const searchForm = document.querySelector('.search-form');

        const renderProducts = (list = products) => {
            if (!productGrid) {
                return;
            }

            const layout = productGrid.dataset?.layout;
            const columnClass =
                layout === 'three'
                    ? 'col-12 col-sm-6 col-lg-4 d-flex'
                    : 'col-12 col-sm-6 col-md-4 col-lg-3 d-flex';

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
                col.className = columnClass;
                col.innerHTML = createProductCardMarkup(product);
                fragment.appendChild(col);
            });

            productGrid.appendChild(fragment);
        };

        if (productGrid) {
            renderProducts();
        }

        if (searchForm) {
            searchForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const query = searchForm.querySelector('input[type="search"]')?.value.trim();

                if (!query) {
                    renderProducts(products);
                    return;
                }

                const normalizedQuery = query.toLowerCase();
                const filteredProducts = products.filter(
                    (product) =>
                        product.title.toLowerCase().includes(normalizedQuery) ||
                        product.author?.toLowerCase().includes(normalizedQuery) ||
                        product.tags?.some((tag) => tag.toLowerCase().includes(normalizedQuery))
                );

                renderProducts(filteredProducts);
            });
        }
    });
})();

