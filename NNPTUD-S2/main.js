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
