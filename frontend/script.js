// Sample inventory data (static, so the site works on Netlify without a server)
const products = [
  { name: "Notebook A4",    category: "Stationery", price: 150, stock: 120 },
  { name: "Ball Pen (Blue)", category: "Stationery", price: 30,  stock: 8 },
  { name: "School Bag",     category: "Bags",       price: 1800, stock: 25 },
  { name: "Water Bottle",   category: "Accessories", price: 450, stock: 5 },
  { name: "Calculator",     category: "Electronics", price: 900, stock: 40 }
];

const LOW_LIMIT = 10;
const table = document.getElementById("productTable");

let totalStock = 0;
let lowCount = 0;

products.forEach(p => {
  totalStock += p.stock;
  const isLow = p.stock < LOW_LIMIT;
  if (isLow) lowCount++;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${p.name}</td>
    <td>${p.category}</td>
    <td>${p.price}</td>
    <td class="${isLow ? "low" : ""}">${p.stock}${isLow ? " (low)" : ""}</td>
  `;
  table.appendChild(row);
});

document.getElementById("totalProducts").textContent = products.length;
document.getElementById("totalStock").textContent = totalStock;
document.getElementById("lowStock").textContent = lowCount;
