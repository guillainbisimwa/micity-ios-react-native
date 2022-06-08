  
const images = [
    {
        name: "logo",
        image: require("../assets/icon.png")
    },
    {
        id:1,
        name: "bike",
        image: require("../assets/icons/bike.png")
    },
    {
        id:2,
        name: "camera",
        image: require("../assets/icons/camera.png")
    },
    {
        id:5,
        name: "home",
        image: require("../assets/icons/home.png")
    },
    {
        id:6,
        name: "location",
        image: require("../assets/icons/location.png")
    },
    {
        id:7,
        name: "pic",
        image: require("../assets/icons/pic.png")
    },
    {
        id:9,
        name: "red-thunder",
        image: require("../assets/icons/red-thunder.png")
    },
    {
        id:10,
        name: "thunder",
        image: require("../assets/icons/thunder.png")
    },
    {
        id:11,
        name: "thunder2",
        image: require("../assets/icons/thunder2.png")
    },
    {
        id:12,
        name: "train",
        image: require("../assets/icons/train.png")
    },
    {
        id:14,
        name: "white-train",
        image: require("../assets/icons/white-train.png")
    }
];
  
const profile = {
    username: "guy",
    location: "South Africa",
    email: "guy@micity.com",
    avatar: require("../assets/icon.png"),
    activate: false
};

const appConfig = {
    name: "MiCity",
    label: "Explore your city and its people.",
    logo: require("../assets/icon.png"),
    logo2: require("../assets/images/logo2.png"),
    version: '1.0.0'
}

const address = [
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Banana2', value: 'banana2'},
    {label: 'Banana3', value: 'banana3'},
];

const provinces = [
    { label: 'Western Cape', id: '01', value: 'Western Cape'},
    { label: 'Northern Cape', id: '03', value: 'Northern Cape'},
    { label: 'North-West', id: '06', value: 'North-West'},
    { label: 'Mpumalanga', id: '08', value: 'Mpumalanga'},
    { label: 'Limpopo', id: '09', value: 'Limpopo'},
    { label: 'KwaZulu-Natal', id:'5', value: 'KwaZulu-Natal'},
    { label: 'Gauteng', id: '07', value: 'Gauteng'},
    { label: 'Free State', id: '04', value: 'Free State'},
    { label: 'Eastern Cape', id: '02', value: 'Eastern Cape'},
];

const Menu = [
    {
        id:1,
        name: "Service Provider",
        image: require("../assets/icons/cog.png"),
        status: true
    },
    {
        id:3,
        name: "Report a problem",
        image: require("../assets/icons/Vector.png"),
        status: false
    },
    {
        id:2,
        name: "Map",
        image: require("../assets/icons/pin.png"),
        status: false
    },
    {
        id:4,
        name: "Loadshedding",
        image: require("../assets/icons/thunder.png"),
        status: false
    },
    {
        id:5,
        name: "Find transport",
        image: require("../assets/icons/train.png"),
        status: false
    },
];

const Service_Categories = [
    { label: "Accommodation", value: "1"},
    { label: "Adventure Tours", value: "2"},
    { label: "Air Conditioning", value: "3"},
    { label: "Airport Transfers", value: "4"},
    { label: "Plumbing", value: "5"},
    { label: "Catering", value: "6"},
    { label: "Cleaning Services", value: "7"},
    { label: "Clothing", value: "8"},
    { label: "Clothing Products", value: "9"},
    { label: "Drain Cleaning", value: "10"},
    { label: "Electric Fence", value: "11"},
    { label: "Electrical Installations", value: "12"},
    { label: "Financial Services", value: "13"},
    { label: "Furniture", value: "14"},
    { label: "Graphic Design", value: "15"},
    { label: "Health Care", value: "16"},
    { label: "Interior Design", value: "17"},
    { label: "Interior Design Services", value: "18"},
    { label: "IT Services", value: "19"},
    { label: "Jewellery", value: "1"},
    { label: "Kitchen Cupboards", value: "20"},
    { label: "Landscaping Services", value: "21"},
    { label: "Lighting", value: "22"},
    { label: "Garden services", value: "23"},
    { label: "Lose Weight", value: "24"},
    { label: "Office Cleaning", value: "25"},
    { label: "Painting Services", value: "26"},
    { label: "Personal Development", value: "27"},
    { label: "Photography", value: "28"},
    { label: "Plumbing And Maintenance", value: "29"},
    { label: "Tutor", value: "30"},
    { label: "Real Estate", value: "31"},
    { label: "Recruitment", value: "32"},
    { label: "Restaurants", value: "33"},
    { label: "Security", value: "34"},
    { label: "Skin Care", value: "35"},
    { label: "Surveillance Cameras", value: "36"},
    { label: "House maintenance", value: "37"},
];

const services = [
    {
        images: [
            require("../assets/images/image3.png"),
            require("../assets/images/image4.png"),
            require("../assets/images/image5.png"),
        ],
        logo: require("../assets/icon.png"),
    }
];

const municipalities = [
    
    {
        "_id": "62371888d3f931b463735c16",
        "label": "Western Cape Municipalities",
        "phone": "",
        "email": "",
        "secondEmail": "",
        "value": "Western Cape",
        "created": "2022-03-20T12:05:28.361Z",
        "__v": 0
    },
    {
        "_id": "623718a5d3f931b463735c18",
        "label": "City of Cape Town Metropolitan",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Western Cape",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Cape town",
        "created": "2022-03-20T12:05:57.540Z",
        "__v": 0
    },
    {
        "_id": "623718b5d3f931b463735c1a",
        "label": "North West Municipalities",
        "phone": "",
        "email": "",
        "secondEmail": "",
        "value": "North-West",
        "created": "2022-03-20T12:06:13.539Z",
        "__v": 0
    },
    {
        "_id": "623718c6d3f931b463735c1c",
        "label": "Bojanala Platinum District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "North-West",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Bojanala Platinum District",
        "created": "2022-03-20T12:06:30.451Z",
        "__v": 0
    },
    {
        "_id": "623718d7d3f931b463735c1e",
        "label": "Dr Kenneth Kaunda District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "North-West",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Dr Kenneth Kaunda District",
        "created": "2022-03-20T12:06:47.439Z",
        "__v": 0
    },
    {
        "_id": "623718e3d3f931b463735c20",
        "label": "Dr Ruth Segomotsi Mompati District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "North-West",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Dr Ruth Segomotsi Mompati District",
        "created": "2022-03-20T12:06:59.434Z",
        "__v": 0
    },
    {
        "_id": "623718eed3f931b463735c22",
        "label": "Cape Winelands District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Western Cape",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Cape Winelands District",
        "created": "2022-03-20T12:07:10.057Z",
        "__v": 0
    },
    {
        "_id": "623718fbd3f931b463735c24",
        "label": "Central Karoo District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Western Cape",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Central Karoo District",
        "created": "2022-03-20T12:07:23.430Z",
        "__v": 0
    },
    {
        "_id": "62371912d3f931b463735c26",
        "label": "West Coast District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Western Cape",
        "secondEmail": "micityoffice@gmail.com",
        "value": "West Coast District",
        "created": "2022-03-20T12:07:46.104Z",
        "__v": 0
    },
    {
        "_id": "62371925d3f931b463735c28",
        "label": "Garden Route District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Western Cape",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Garden Route District",
        "created": "2022-03-20T12:08:05.906Z",
        "__v": 0
    },
    {
        "_id": "623740df01d49602dca0e061",
        "label": "Northern Cape Municipalities",
        "phone": "",
        "email": "",
        "secondEmail": "",
        "value": "Northern Cape",
        "created": "2022-03-20T12:05:28.361Z",
        "__v": 0
    },
    {
        "_id": "6237414b01d49602dca0e062",
        "label": "Frances Baard District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Northern Cape",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Frances Baard District",
        "created": "2022-03-20T12:05:57.540Z",
        "__v": 0
    },
    {
        "_id": "623741cc01d49602dca0e063",
        "label": "John Taolo Gaetsewe District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Northern Cape",
        "secondEmail": "micityoffice@gmail.com",
        "value": "John Taolo Gaetsewe District",
        "created": "2022-03-20T12:05:57.540Z",
        "__v": 0
    },
    {
        "_id": "6237421f01d49602dca0e064",
        "label": "Namakwa District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Northern Cape",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Namakwa District",
        "created": "2022-03-20T12:05:57.540Z",
        "__v": 0
    },
    {
        "_id": "623894beaa9f5a3820bfc95f",
        "label": "Mpumalanga Municipalities",
        "phone": "",
        "email": "",
        "secondEmail": "",
        "value": "Mpumalanga",
        "created": "2022-03-21T15:07:42.721Z",
        "__v": 0
    },
    {
        "_id": "623894d4aa9f5a3820bfc961",
        "label": "Limpopo Municipalities",
        "phone": "",
        "email": "",
        "secondEmail": "",
        "value": "Limpopo",
        "created": "2022-03-21T15:08:04.920Z",
        "__v": 0
    },
    {
        "_id": "623894f0aa9f5a3820bfc963",
        "label": "KZN",
        "phone": "",
        "email": "",
        "secondEmail": "",
        "value": "KZN",
        "created": "2022-03-21T15:08:32.568Z",
        "__v": 0
    },
    {
        "_id": "623894fdaa9f5a3820bfc965",
        "label": "Gauteng",
        "phone": "",
        "email": "",
        "secondEmail": "",
        "value": "Gauteng",
        "created": "2022-03-21T15:08:45.919Z",
        "__v": 0
    },
    {
        "_id": "62389511aa9f5a3820bfc967",
        "label": "Free State",
        "phone": "",
        "email": "",
        "secondEmail": "",
        "value": "Free State",
        "created": "2022-03-21T15:09:05.989Z",
        "__v": 0
    },
    {
        "_id": "62389524aa9f5a3820bfc969",
        "label": "Eastern Cape",
        "phone": "",
        "email": "",
        "secondEmail": "",
        "value": "Eastern Cape",
        "created": "2022-03-21T15:09:24.316Z",
        "__v": 0
    },
    {
        "_id": "62389568aa9f5a3820bfc96b",
        "label": "Ehlanzeni District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Mpumalanga",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Ehlanzeni District",
        "created": "2022-03-21T15:10:32.010Z",
        "__v": 0
    },
    {
        "_id": "623897c6aa9f5a3820bfc975",
        "label": "Gert Sibande District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Mpumalanga",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Gert Sibande District",
        "created": "2022-03-21T15:20:38.397Z",
        "__v": 0
    },
    {
        "_id": "623897d8aa9f5a3820bfc977",
        "label": "Nkangala District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Mpumalanga",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Nkangala District",
        "created": "2022-03-21T15:20:56.279Z",
        "__v": 0
    },
    {
        "_id": "62389804aa9f5a3820bfc979",
        "label": "Capricorn District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Limpopo",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Capricorn District",
        "created": "2022-03-21T15:21:40.082Z",
        "__v": 0
    },
    {
        "_id": "62389813aa9f5a3820bfc97b",
        "label": "Mopani District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Limpopo",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Mopani District",
        "created": "2022-03-21T15:21:55.568Z",
        "__v": 0
    },
    {
        "_id": "62389820aa9f5a3820bfc97d",
        "label": "Vhembe District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Limpopo",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Vhembe District",
        "created": "2022-03-21T15:22:08.916Z",
        "__v": 0
    },
    {
        "_id": "6238982eaa9f5a3820bfc97f",
        "label": "Waterberg District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Limpopo",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Waterberg District",
        "created": "2022-03-21T15:22:22.345Z",
        "__v": 0
    },
    {
        "_id": "62389848aa9f5a3820bfc981",
        "label": "eThekwini Metropolitan ",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "KZN",
        "secondEmail": "micityoffice@gmail.com",
        "value": "eThekwini Metropolitan ",
        "created": "2022-03-21T15:22:48.690Z",
        "__v": 0
    },
    {
        "_id": "623898abaa9f5a3820bfc983",
        "label": "Amajuba District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "KZN",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Amajuba District",
        "created": "2022-03-21T15:24:27.347Z",
        "__v": 0
    },
    {
        "_id": "623898bdaa9f5a3820bfc985",
        "label": "Harry Gwala District ",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "KZN",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Harry Gwala District ",
        "created": "2022-03-21T15:24:45.625Z",
        "__v": 0
    },
    {
        "_id": "623898daaa9f5a3820bfc987",
        "label": "Zululand District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "KZN",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Zululand District",
        "created": "2022-03-21T15:25:14.766Z",
        "__v": 0
    },
    {
        "_id": "623898e7aa9f5a3820bfc989",
        "label": "King Cetshwayo District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "KZN",
        "secondEmail": "micityoffice@gmail.com",
        "value": "King Cetshwayo District",
        "created": "2022-03-21T15:25:27.213Z",
        "__v": 0
    },
    {
        "_id": "6238990daa9f5a3820bfc98b",
        "label": "City of Ekurhuleni Metropolitan",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Gauteng",
        "secondEmail": "micityoffice@gmail.com",
        "value": "City of Ekurhuleni Metropolitan",
        "created": "2022-03-21T15:26:05.301Z",
        "__v": 0
    },
    {
        "_id": "62389920aa9f5a3820bfc98d",
        "label": "City of Johannesburg Metropolitan",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Gauteng",
        "secondEmail": "micityoffice@gmail.com",
        "value": "City of Johannesburg Metropolitan",
        "created": "2022-03-21T15:26:24.148Z",
        "__v": 0
    },
    {
        "_id": "62389930aa9f5a3820bfc98f",
        "label": "City of Tshwane Metropolitan",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Gauteng",
        "secondEmail": "micityoffice@gmail.com",
        "value": "City of Tshwane Metropolitan ",
        "created": "2022-03-21T15:26:40.273Z",
        "__v": 0
    },
    {
        "_id": "6238993faa9f5a3820bfc991",
        "label": "Sedibeng District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Gauteng",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Sedibeng District",
        "created": "2022-03-21T15:26:55.441Z",
        "__v": 0
    },
    {
        "_id": "6238994faa9f5a3820bfc993",
        "label": "West Rand District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Gauteng",
        "secondEmail": "micityoffice@gmail.com",
        "value": "West Rand District",
        "created": "2022-03-21T15:27:11.600Z",
        "__v": 0
    },
    {
        "_id": "6238996baa9f5a3820bfc995",
        "label": "Mangaung Metropolitan",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Free State",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Mangaung Metropolitan",
        "created": "2022-03-21T15:27:39.824Z",
        "__v": 0
    },
    {
        "_id": "6238997aaa9f5a3820bfc997",
        "label": "Fezile Dabi District",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Free State",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Fezile Dabi District",
        "created": "2022-03-21T15:27:54.494Z",
        "__v": 0
    },
    {
        "_id": "623899e9aa9f5a3820bfc999",
        "label": "Buffalo City Metropolitan",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Eastern Cape",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Buffalo City Metropolitan",
        "created": "2022-03-21T15:29:45.129Z",
        "__v": 0
    },
    {
        "_id": "62389a26aa9f5a3820bfc99b",
        "label": "Nelson Mandela Bay Metropolitan",
        "phone": "",
        "email": "guillainbisimwa@gmail.com",
        "parent": "Eastern Cape",
        "secondEmail": "micityoffice@gmail.com",
        "value": "Nelson Mandela Bay Metropolitan",
        "created": "2022-03-21T15:30:46.708Z",
        "__v": 0
    }
];

const providers = [
    {
        "_id": "6237174bd3f931b463735bf8",
        "label": "Arts & culture",
        "status": 1,
        "value": 1,
        "created": "2022-03-20T12:00:11.082Z",
        "__v": 0
    },
    {
        "_id": "62371784d3f931b463735bfa",
        "label": "Entertainment",
        "status": 1,
        "value": 2,
        "created": "2022-03-20T12:01:08.283Z",
        "__v": 0
    },
    {
        "_id": "6237178fd3f931b463735bfc",
        "label": "Business and financial",
        "status": 1,
        "value": 3,
        "created": "2022-03-20T12:01:19.027Z",
        "__v": 0
    },
    {
        "_id": "6237179bd3f931b463735bfe",
        "label": "Medical",
        "status": 1,
        "value": 4,
        "created": "2022-03-20T12:01:31.827Z",
        "__v": 0
    },
    {
        "_id": "623717aad3f931b463735c00",
        "label": "Professional services",
        "status": 1,
        "value": 5,
        "created": "2022-03-20T12:01:46.064Z",
        "__v": 0
    },
    {
        "_id": "623717b6d3f931b463735c02",
        "label": "Construction and building",
        "status": 1,
        "value": 6,
        "created": "2022-03-20T12:01:58.524Z",
        "__v": 0
    },
    {
        "_id": "623717ccd3f931b463735c06",
        "label": "Sports and recreation",
        "status": 1,
        "value": 8,
        "created": "2022-03-20T12:02:20.636Z",
        "__v": 0
    },
    {
        "_id": "623717d8d3f931b463735c08",
        "label": "Print, Media and communication",
        "status": 1,
        "value": 9,
        "created": "2022-03-20T12:02:32.496Z",
        "__v": 0
    },
    {
        "_id": "623717e4d3f931b463735c0a",
        "label": "Home and Garden",
        "status": 1,
        "value": 10,
        "created": "2022-03-20T12:02:44.274Z",
        "__v": 0
    },
    {
        "_id": "623717f8d3f931b463735c0c",
        "label": "Health and beauty",
        "status": 1,
        "value": 11,
        "created": "2022-03-20T12:03:04.881Z",
        "__v": 0
    },
    {
        "_id": "62371804d3f931b463735c0e",
        "label": "Pets",
        "status": 1,
        "value": 12,
        "created": "2022-03-20T12:03:16.267Z",
        "__v": 0
    },
    {
        "_id": "6237180fd3f931b463735c10",
        "label": "Retailers",
        "status": 1,
        "value": 13,
        "created": "2022-03-20T12:03:27.544Z",
        "__v": 0
    },
    {
        "_id": "62371819d3f931b463735c12",
        "label": "Real estate",
        "status": 1,
        "value": 14,
        "created": "2022-03-20T12:03:37.465Z",
        "__v": 0
    },
    {
        "_id": "62371822d3f931b463735c14",
        "label": "Automobile",
        "status": 1,
        "value": 15,
        "created": "2022-03-20T12:03:46.438Z",
        "__v": 0
    },
    {
        "_id": "6265c4813fdf5f054237b86b",
        "label": "Manufacturing & industry",
        "value": 7,
        "created": "2022-04-24T21:43:29.588Z",
        "__v": 0
    },
    {
        "_id": "6265c4943fdf5f054237b86d",
        "label": "Events & Conferences",
        "value": 16,
        "created": "2022-04-24T21:43:48.326Z",
        "__v": 0
    },
    {
        "_id": "6265c4a33fdf5f054237b86f",
        "label": "Computers and Internet Services ",
        "value": 17,
        "created": "2022-04-24T21:44:03.616Z",
        "__v": 0
    },
    {
        "_id": "6265c4b13fdf5f054237b871",
        "label": "Logistics",
        "value": 18,
        "created": "2022-04-24T21:44:17.650Z",
        "__v": 0
    },
    {
        "_id": "6265c4c13fdf5f054237b873",
        "label": "Website & Software Development",
        "value": 19,
        "created": "2022-04-24T21:44:33.164Z",
        "__v": 0
    },
    {
        "_id": "6265c4cf3fdf5f054237b875",
        "label": "Public and social services",
        "value": 20,
        "created": "2022-04-24T21:44:47.701Z",
        "__v": 0
    }
];

const reportCat = [
    {
        _id: "620bc030937c13ae027f5331",
        label: "Road",
        status: 1,
        value:1,
        __v:0
    },
    {
        _id: "620bc030937c13ae027f5332",
        label: "Roads",
        status: 1,
        value: 2,
        __v:0
    },
    {
        _id: "620bc030937c13ae027f5333",
        label: "Water",
        status: 1,
        value: 3,
        __v:0
    },
    
    {
        _id: "620bc030937c13ae027f5335",
        label: "Other",
        status: 1,
        value: 5,
        __v:0
    },
];


export { images, profile, appConfig, reportCat,
    address, provinces, Menu, Service_Categories, services, municipalities, providers };
  