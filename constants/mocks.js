  
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
        id:2,
        name: "Map",
        image: require("../assets/icons/pin.png"),
        status: false
    },
    {
        id:3,
        name: "Report a problem",
        image: require("../assets/icons/Vector.png"),
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
    {"_id":"621513a0890da28ea6030fa4",
        "label":"Western Cape Municipalities",
        "phone":"",
        "email":"",
       // "parent":"",
        "secondEmail":"",
        "value":"wc",
        "created":"2022-02-22T16:47:28.153Z",
        "__v":0
    },
    {"_id":"6215143f890da28ea6030fa6",
        "label":"City of Cape Town Metropolitan",
        "phone":"",
        "email":"guillainbisimwa@gmail.com",
        "parent":"wc",
        "secondEmail":"asifhassam14@gmail.com",
        "value":"capetown",
        "created":"2022-02-22T16:50:07.017Z",
        "__v":0
    },
    {"_id":"6215146a890da28ea6030fa8",
        "label":"North West Municipalities",
        "phone":"",
        "email":"",
       // "parent":"",
        "secondEmail":"",
        "value":"nw",
        "created":"2022-02-22T16:50:50.683Z",
        "__v":0
    },
    {"_id":"621514a6890da28ea6030faa",
        "label":"Bojanala Platinum District",
        "phone":"",
        "email":"guillainbisimwa@gmail.com",
        "parent":"nw",
        "secondEmail":"asifhassam14@gmail.com",
        "value":"bojanalaplatinum",
        "created":"2022-02-22T16:51:50.562Z",
        "__v":0
    }
]

const providers = [
    {
        _id: "620bc030937c13ae027f5337",
        label: "Adventure Tours",
        status: 1,
        value:2,
        __v:0
    },
    {
        _id: "620bc088937c13ae027f5339",
        label: "Accommodation",
        status: 1,
        value:1,
        __v:0
    },
    {
        _id: "620bc09c937c13ae027f533b",
        label: "Air Conditioning",
        status: 1,
        value:3,
        __v:0
    },
    {
        _id: "620bc0aa937c13ae027f533d",
        label: "Airport Transfers",
        status: 1,
        value:4,
        __v:0
    },
    {
        _id: "620bc0cb937c13ae027f533f",
        label: "Plumbing",
        status: 1,
        value:5,
        __v:0
    },
    {
        _id: "620bc0d2937c13ae027f5341",
        label: "Catering",
        status: 1,
        value:6,
        __v:0
    },
    {
        _id: "620bc0e7937c13ae027f5343",
        label: "Cleaning Services",
        status: 1,
        value:7,
        __v:0
    },
    {
        _id: "620bc0f3937c13ae027f5345",
        label: "Clothing",
        status: 1,
        value:8,
        __v:0
    },
    {
        _id: "620bc0ff937c13ae027f5347",
        label: "Clothing Products",
        status: 1,
        value:9,
        __v:0
    },
    {
        _id: "620bc10b937c13ae027f5349",
        label: "Drain Cleaning",
        status: 1,
        value:10,
        __v:0
    },
    {
        _id: "620bc11f937c13ae027f534b",
        label: "Electric Fence",
        status: 1,
        value:11,
        __v:0
    },
    {
        _id: "620bc130937c13ae027f534d",
        label: "Electrical Installations",
        status: 1,
        value:12,
        __v:0
    },
    {
        _id: "620bc13c937c13ae027f534f",
        label: "Financial Services",
        status: 1,
        value:13,
        __v:0
    },
    {
        _id: "620bc147937c13ae027f5351",
        label: "Furniture",
        status: 1,
        value:14,
        __v:0
    },
    {
        _id: "620bc151937c13ae027f5353",
        label: "Graphic Design",
        status: 1,
        value:15,
        __v:0
    }
];


export { images, profile, appConfig, 
    address, provinces, Menu, Service_Categories, services, municipalities, providers };
  