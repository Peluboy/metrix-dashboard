import { iconsImgs, ordersImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
  { id: 1, title: "Dashboard", image: iconsImgs.category, route: "/" },
  {
    id: 2,
    title: "Orders",
    image: iconsImgs.bag,
    route: "/orders",
    messageCount: 3,
  },
  { id: 3, title: "Customers", image: iconsImgs.user, route: "/customers" },
  { id: 4, title: "Inventory", image: iconsImgs.folder, route: "/inventory" },
  {
    id: 5,
    title: "Conversations",
    image: iconsImgs.chat,
    route: "/conversations",
    messageCount: 5,
  },
  { id: 6, title: "Settings", image: iconsImgs.setting, route: "/settings" },
  {
    id: 7,
    title: "Contact Support",
    image: iconsImgs.headphone,
    route: "/support",
  },
  { id: 8, title: "Logout", image: iconsImgs.logout, route: "/logout" },
];

export const contacts = [
  {
    id: 9,
    name: "Jane Doe",
    image: personsImgs.person_one,
    bio: "Hello, I want to make enquiries about your product",
    time: "12:55 am",
    notification: "New",
  },
  {
    id: 10,
    name: "Janet Adebayo",
    image: personsImgs.person_two,
    bio: "Hello, I want to make enquiries about your product",
    time: "09:10 am",
    notification: "New",
  },
  {
    id: 11,
    name: "Kunle Adekunle",
    image: personsImgs.person_three,
    bio: "Hello, I want to make enquiries about your product",
    time: "15:00 pm",
    notification: "New",
  },
  {
    id: 12,
    name: "Pelumi Moses",
    image: personsImgs.person_four,
    bio: "Hello, I want to make enquiries about your product",
    time: "04:17 am",
  },
  {
    id: 13,
    name: "Irene Doe",
    image: personsImgs.person_five,
    bio: "Hello, I want to make enquiries about your product",
    time: "07:35 am",
  },
  {
    id: 14,
    name: "Irene Doe",
    image: personsImgs.person_six,
    bio: "Hello, I want to make enquiries about your product",
    time: "07:35 am",
  },
];

export const summaryData = [
  {
    id: 15,
    month: "Sept 10",
    value: 55,
  },
  {
    id: 16,
    month: "Sept 11",
    value: 39,
  },
  {
    id: 17,
    month: "Sept 12",
    value: 42,
  },
  {
    id: 18,
    month: "Sept 13",
    value: 22,
  },
  {
    id: 19,
    month: "Sept 14",
    value: 55,
  },
  {
    id: 20,
    month: "Sept 15",
    value: 40,
  },
  {
    id: 21,
    month: "Sept 16",
    value: 52,
  },
];

export const orderData = [
  {
    id: 22,
    name: "iPhone 13",
    image: ordersImgs.iphone_12,
    price: "$730,000 x 1",
    date: "12 Sept 2022",
    status: "Pending",
  },
  {
    id: 23,
    name: "iPhone 13",
    image: ordersImgs.iphone_13,

    price: "$730,000 x 1",
    date: "12 Sept 2022",
    status: "Completed",
  },
  {
    id: 24,
    name: "iPhone 13",
    image: ordersImgs.iphone_12,

    price: "$730,000 x 1",
    date: "12 Sept 2022",
    status: "Completed",
  },
  {
    id: 25,
    name: "iPhone 13",
    image: ordersImgs.iphone_12,

    price: "$730,000 x 1",
    date: "12 Sept 2022",
    status: "Cancelled",
  },
  {
    id: 26,
    name: "iPhone 13",
    image: ordersImgs.iphone_13,

    price: "$730,000 x 1",
    date: "12 Sept 2022",
    status: "Completed",
  },
  {
    id: 27,
    name: "iPhone 13",
    image: ordersImgs.iphone_12,

    price: "$730,000 x 1",
    date: "12 Sept 2022",
    status: "Completed",
  },
  {
    id: 28,
    name: "iPhone 13",
    image: ordersImgs.iphone_12,

    price: "$730,000 x 1",
    date: "12 Sept 2022",
    status: "Pending",
  },
  {
    id: 29,
    name: "iPhone 13",
    image: ordersImgs.iphone_13,

    price: "$730,000 x 1",
    date: "12 Sept 2022",
    status: "Completed",
  },
];
