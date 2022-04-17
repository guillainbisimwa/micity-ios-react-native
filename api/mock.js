import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

const clients = {
    name: faker.name.findName(), 
    phone: faker.phone.phoneNumber('+48 ## ### ## ##'),
    email: faker.internet.email(),
    password: faker.internet.password(),
    type: 1,
    city: faker.address.cityName(),
    address: faker.address.streetAddress(true),
    status :1,
    province: sample([
        'Western Cape',
        'Northern Cape',
        'North-West',
        'Mpumalanga',
        'Limpopo',
        'KwaZulu-Natal',
        'Gauteng',
        'Free State',
        'Eastern Cape',
    ])
};

const services = {
    name: faker.company.companyName(),
    desc:  faker.fake(' {{commerce.productDescription}}, {{commerce.productDescription}}, {{commerce.productDescription}}!'),
    status:1,
    cat: sample([
        "6237174bd3f931b463735bf8",
        "62371784d3f931b463735bfa",
        "6237178fd3f931b463735bfc",
        "6237179bd3f931b463735bfe",
        "623717aad3f931b463735c00",
        "623717b6d3f931b463735c02",
        "623717c1d3f931b463735c04",
        "623717ccd3f931b463735c06",
        "623717d8d3f931b463735c08",
        "623717e4d3f931b463735c0a",
        "623717f8d3f931b463735c0c",
        "62371804d3f931b463735c0e",
        "6237180fd3f931b463735c10",
        "62371819d3f931b463735c12",
        "62371822d3f931b463735c14",
    ]),
    id_user: sample([
        "625b52c878821117f621a77f",
        "625b545878821117f621a79b",
        "625b557278821117f621a7a1",
        "625b55db78821117f621a7ae",
    ]),
    phone: faker.phone.phoneNumber('+48 ## ### ## ##'),
    email: faker.internet.email(),
    address: faker.address.streetAddress(true),
    city: faker.address.cityName(),
    province: sample([
        'Western Cape',
        'Northern Cape',
        'North-West',
        'Mpumalanga',
        'Limpopo',
        'KwaZulu-Natal',
        'Gauteng',
        'Free State',
        'Eastern Cape',
    ]),
    website: faker.internet.url(),
    week: sample([
        'Open',
        'Close'
    ]),
    weekend:sample([
        'Open',
        'Close'
    ]),
    public: sample([
        'Open',
        'Close'
    ]),
   services: sample([
        faker.fake(' {{commerce.productDescription}}, {{commerce.productDescription}}, {{commerce.productDescription}}!'),
        faker.fake(' {{commerce.productDescription}}, {{commerce.productDescription}}!'),
        faker.fake(' {{commerce.productDescription}}, {{commerce.productDescription}}, {{commerce.productDescription}}!'),
        faker.fake(' {{commerce.productDescription}}, {{commerce.productDescription}}!'),
    ]),
    images: [
         sample([
            "https://res.cloudinary.com/micity/image/upload/v1647780394/markus-spiske-g5ZIXjzRGds-unsplash_1_wsfwx3.jpg",
           "https://res.cloudinary.com/micity/image/upload/v1647780406/sigmund-CwTfKH5edSk-unsplash_kouyqn.jpg",
            "https://res.cloudinary.com/micity/image/upload/v1647780420/rod-long-2P_ifaetDm0-unsplash_h0wp9z.jpg"
        ]),
        sample([
           "https://res.cloudinary.com/micity/image/upload/v1647780860/toa-heftiba-bnoPZ9aTyWQ-unsplash_nxfpig.jpg",
           "https://res.cloudinary.com/micity/image/upload/v1647781167/westwind-air-service-C0dSvpljHcI-unsplash_z971zm.jpg",
           "https://res.cloudinary.com/micity/image/upload/v1647781176/cynthia-magana-mFPJXEQfb9M-unsplash_iequif.jpg"
        ]),
        sample([
           "https://res.cloudinary.com/micity/image/upload/v1647781191/vaida-tamosauskaite-oJofV8dZd_w-unsplash_rvysux.jpg",
            "https://res.cloudinary.com/micity/image/upload/v1647781258/redd-8n-3h1WkaQk-unsplash_q1hiec.jpg",
            "https://res.cloudinary.com/micity/image/upload/v1647781354/carlos-lindner-53wcYH4IOig-unsplash_zi7pxb.jpg"
        ]),
    ],
};

export {
    clients, services
}
