// Câu 1: Khai báo constructor function Product để tạo đối tượng sản phẩm.
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau.
const products = [
    new Product(1, "Laptop Dell XPS 13", 25000000, 10, "Electronics", true),
    new Product(2, "iPhone 15 Pro", 30000000, 5, "Electronics", true),
    new Product(3, "Samsung Galaxy S24", 28000000, 8, "Electronics", true),
    new Product(4, "Running Shoes Nike", 2000000, 50, "Fashion", true),
    new Product(5, "T-shirt Adidas", 500000, 100, "Fashion", true),
    new Product(6, "Jeans Levi's", 1200000, 30, "Fashion", false)
];

// Câu 3: Tạo mảng mới chỉ chứa: name, price của mỗi sản phẩm.
const productNamesAndPrices = products.map(product => ({
    name: product.name,
    price: product.price
}));

console.log("--- Question 2: Initial Products Array ---");
console.log(products);

console.log("--- Question 3: Name and Price Array ---");
console.log(productNamesAndPrices);

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0).
const availableProducts = products.filter(product => product.quantity > 0);
console.log("--- Question 4: Products with quantity > 0 ---");
console.log(availableProducts);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không.
const hasExpensiveProduct = products.some(product => product.price > 30000000);
console.log("--- Question 5: Has product > 30.000.000? ---");
console.log(hasExpensiveProduct);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục 'Accessories' có đang được bán (isAvailable = true) hay không.
// Note: If there are no 'Accessories', existing logic usually returns true for empty set, or we can assume it only checks if they exist.
// Standard `every` returns true for empty arrays.
const allAccessoriesAvailable = products
    .filter(product => product.category === 'Accessories')
    .every(product => product.isAvailable);
console.log("--- Question 6: All Accessories available? ---");
console.log(allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price * quantity
const totalStockValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);
console.log("--- Question 7: Total Stock Value ---");
console.log(totalStockValue);

// Câu 8: Dùng for...of Duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("--- Question 8: Product Details (for...of) ---");
for (const product of products) {
    console.log(`${product.name} - ${product.category} - ${product.isAvailable ? "Available" : "Unavailable"}`);
}

// Câu 9: dùng for...in để: In ra tên thuộc tính In ra giá trị tương ứng
console.log("--- Question 9: Product Properties (for...in on first product) ---");
if (products.length > 0) {
    const firstProduct = products[0];
    for (const key in firstProduct) {
        console.log(`${key}: ${firstProduct[key]}`);
    }
}
