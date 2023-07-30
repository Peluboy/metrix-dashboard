import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
  { id: 1, title: "Dashboard", image: iconsImgs.category },
  { id: 2, title: "Orders", image: iconsImgs.bag },
  { id: 3, title: "Customers", image: iconsImgs.user },
  { id: 4, title: "Inventory", image: iconsImgs.folder },
  { id: 5, title: "Conversations", image: iconsImgs.chat },
  { id: 6, title: "Settings", image: iconsImgs.setting },
  { id: 7, title: "Contact Support", image: iconsImgs.headphone },
  { id: 8, title: "Logout", image: iconsImgs.logout },
];

export const contacts = [
  {
    id: 9,
    name: "Jane Doe",
    image: personsImgs.person_one,
    bio: "Hello, I want to make enquiries about your product",
    time: "12:55 am",
  },
  {
    id: 10,
    name: "Janet Adebayo",
    image: personsImgs.person_two,
    bio: "Hello, I want to make enquiries about your product",
    time: "09:10 am",
  },
  {
    id: 11,
    name: "Kunle Adekunle",
    image: personsImgs.person_three,
    bio: "Hello, I want to make enquiries about your product",
    time: "15:00 pm",
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
    value: 90,
  },
  {
    id: 16,
    month: "Sept 11",
    value: 39,
  },
  {
    id: 17,
    month: "Sept 12",
    value: 62,
  },
  {
    id: 18,
    month: "Sept 13",
    value: 22,
  },
  {
    id: 19,
    month: "Sept 14",
    value: 80,
  },
  {
    id: 20,
    month: "Sept 15",
    value: 40,
  },
  {
    id: 21,
    month: "Sept 16",
    value: 80,
  },
];

export const budget = [
  {
    id: 19,
    title: "Subscriptions",
    type: "Automated",
    amount: 22000,
  },
  {
    id: 20,
    title: "Loan Payment",
    type: "Automated",
    amount: 16000,
  },
  {
    id: 21,
    title: "Foodstuff",
    type: "Automated",
    amount: 20000,
  },
  {
    id: 22,
    title: "Subscriptions",
    type: null,
    amount: 10000,
  },
  {
    id: 23,
    title: "Subscriptions",
    type: null,
    amount: 40000,
  },
];

export const subscriptions = [
  {
    id: 24,
    title: "LinkedIn",
    due_date: "23/12/04",
    amount: 20000,
  },
  {
    id: 25,
    title: "Netflix",
    due_date: "23/12/10",
    amount: 5000,
  },
  {
    id: 26,
    title: "DSTV",
    due_date: "23/12/22",
    amount: 2000,
  },
];

export const savings = [
  {
    id: 27,
    image: personsImgs.person_one,
    saving_amount: 250000,
    title: "Pay kid bro’s fees",
    date_taken: "23/12/22",
    amount_left: 40000,
  },
];
