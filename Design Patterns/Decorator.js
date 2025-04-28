// Đối tượng gốc: Cà phê cơ bản
function Coffee() {
  // Giá cơ bản của ly cà phê
  this.cost = function () {
    return 5;
  };
  // Mô tả cơ bản của ly cà phê
  this.description = function () {
    return "Cà phê cơ bản";
  };
}

// Decorator: Thêm sữa vào ly cà phê
function MilkDecorator(coffee) {
  this.cost = function () {
    return coffee.cost() + 2; // Cộng thêm 2 USD cho sữa
  };
  this.description = function () {
    return coffee.description() + ", thêm sữa"; // Cập nhật mô tả
  };
}

// Decorator: Thêm đường vào ly cà phê
function SugarDecorator(coffee) {
  this.cost = function () {
    return coffee.cost() + 1; // Cộng thêm 1 USD cho đường
  };
  this.description = function () {
    return coffee.description() + ", thêm đường"; // Cập nhật mô tả
  };
}

// Decorator: Thêm caramel vào ly cà phê
function CaramelDecorator(coffee) {
  this.cost = function () {
    return coffee.cost() + 3; // Cộng thêm 3 USD cho caramel
  };
  this.description = function () {
    return coffee.description() + ", thêm caramel"; // Cập nhật mô tả
  };
}

// Khởi tạo một ly cà phê cơ bản
let myCoffee = new Coffee();

// Thêm topping sữa
myCoffee = new MilkDecorator(myCoffee);

// Thêm topping đường
myCoffee = new SugarDecorator(myCoffee);

// Thêm topping caramel
myCoffee = new CaramelDecorator(myCoffee);

// In ra mô tả ly cà phê cuối cùng
console.log(myCoffee.description());

// In ra tổng giá tiền
console.log("Giá tiền:", myCoffee.cost() + " USD");
