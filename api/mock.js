import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

const clients = [...Array(5)].map((_, index) => ({
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
    ]),
    created :"2022-04-16T22:00:44.824+00:0"
}));

const services = [...Array(5)].map((_, index) => ({
    name: faker.company.companyName(),
    desc: faker.commerce.productDescription(),
    status:1,
    cat: sample([
        "620bc030937c13ae027f5337",
        "620bc088937c13ae027f5339",
        "620bc09c937c13ae027f533b",
        "620bc0aa937c13ae027f533d",
        "620bc0cb937c13ae027f533f",
        "620bc0d2937c13ae027f5341",
        "620bc0e7937c13ae027f5343",
        "620bc0f3937c13ae027f5345",
        "620bc0ff937c13ae027f5347",
        "620bc10b937c13ae027f5349",
        "620bc11f937c13ae027f534b",
        "620bc130937c13ae027f534d",
        "620bc13c937c13ae027f534f",
        "620bc147937c13ae027f5351",
        "620bc151937c13ae027f5353",
    ]),
    id_user: "*************",
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
        faker.fake(' {{commerce.productDescription}}, {{commerce.productDescription}}!'),
        faker.fake(' {{commerce.productDescription}}, {{commerce.productDescription}}!'),
        faker.fake(' {{commerce.productDescription}}, {{commerce.productDescription}}!'),
        faker.fake(' {{commerce.productDescription}}, {{commerce.productDescription}}!'),
    ]),
    images: [
        sample([
            faker.image.abstract(),
            faker.image.fashion(),
            faker.image.city()
        ]),
        sample([
            faker.image.food(),
            faker.image.transport(),
            faker.image.people()
        ]),
        sample([
            faker.image.sports(),
            faker.image.image(),
            faker.image.nature()
        ]),
    ],
    created: "2022-04-16T22:02:05.704+00:00"
}));
















