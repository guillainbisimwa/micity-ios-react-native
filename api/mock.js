import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

const services = [...Array(5)].map((_, index) => ({
    name: faker.name.findName(), 
    phone: faker.phone.phoneNumber('+48 91 ### ## ##'),
    email: faker.internet.email(),
    password: faker.internet.password(),
    type :1,
    city :faker.address.cityName(),
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



