import { MdDashboard, MdCreditCard, MdLoyalty } from "react-icons/md";
import { BiWalletAlt, BiDollar } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
const links = [
  { id: 1, text: "Dashboard", path: "/", icon: <MdDashboard /> },
  { id: 2, text: "Wallet", path: "wallet", icon: <BiWalletAlt /> },
  { id: 3, text: "Card", path: "cards", icon: <MdCreditCard /> },
  { id: 4, text: "Fx Center", path: "fx-center", icon: <BiDollar /> },
  { id: 5, text: "Beneficiaries", path: "beneficiaries", icon: <FiUsers /> },
  { id: 6, text: "perks", path: "perks", icon: <MdLoyalty /> },
  { id: 7, text: "Fx Center", path: "fx-center", icon: <BiDollar /> },
  { id: 8, text: "Beneficiaries", path: "beneficiaries", icon: <FiUsers /> },
  { id: 9, text: "perks", path: "perks", icon: <MdLoyalty /> },
];

export default links;

export const widget = [
  {
    title: "users",
    icon: <FiUsers />,

    price: 100,
    color: "rgb(233, 131, 131)",
    bg: "red",
  },

  {
    title: "orders",
    icon: <MdLoyalty />,
    price: 400,
    color: "yellow",
    bg: "#d1c78f",
  },

  {
    title: "balance",
    icon: <FiUsers />,
    price: 750,
    color: "green",
    bg: "#59cc96",
  },

  {
    title: "earnings",
    icon: <MdDashboard />,
    price: 1200,
    color: "purple",
    bg: "#ecb5ec",
  },
];

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg" style={{ display: "flex", gap: "0.2rem" }}>
          <img className="cellImg img" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];
