export const routers = [
  {
    label: "Đăng nhập",
    path: "/login",
    component: "login",
    private: false,
  },
  {
    label: "Trang chủ",
    path: "/",
    component: "home",
    private: true,
  },
  {
    label: "Loại sản phẩm",
    path: "/type-product",
    component: "type-product",
    private: true,
  },
  {
    label: "Khách hàng",
    path: "/customer",
    component: "account",
    private: true,
  },
  {
    label:"Sản phẩm",
    path:"/product",
    component:"product",
    private:true
  }
];
