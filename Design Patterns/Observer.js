// Class đại diện cho người quan sát (Observer)
function Observer(name) {
  this.name = name;
}

// Mỗi Observer cần có phương thức nhận thông báo
Observer.prototype.update = function (message) {
  console.log(`${this.name} nhận thông báo: ${message}`);
};

// Class đại diện cho đối tượng được quan sát (Observable/Subject)
function Observable() {
  this.observers = [];
}

// Đăng ký người quan sát
Observable.prototype.subscribe = function (observer) {
  this.observers.push(observer);
};

// Hủy đăng ký
Observable.prototype.unsubscribe = function (observer) {
  this.observers = this.observers.filter((sub) => sub !== observer);
};

// Gửi thông báo tới tất cả người quan sát
Observable.prototype.notify = function (message) {
  this.observers.forEach((observer) => {
    observer.update(message);
  });
};

// --- Thực thi chương trình ---

const publisher = new Observable();

// Tạo các Observer
const user1 = new Observer("User 1");
const user2 = new Observer("User 2");
const user3 = new Observer("User 3");

// Người dùng đăng ký nhận tin
publisher.subscribe(user1);
publisher.subscribe(user2);
publisher.subscribe(user3);

// Một người dùng hủy đăng ký
publisher.unsubscribe(user1);

// Gửi thông báo
publisher.notify("Bài viết mới: Thiết kế mẫu Observer Pattern!");
