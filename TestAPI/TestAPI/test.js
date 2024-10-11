import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const resWorld = http.get('http://host.docker.internal:5028/api/test/Hello?name=World');

    check(resWorld, {
        'status is 200 for World': (r) => r.status === 200,
        'response body contains Hello World': (r) => r.body.includes('Hello World'),
    });
    
    const resStudent = http.get('http://host.docker.internal:5028/api/test/Hello?name=Student');

    check(resStudent, {
        'status is 200 for Student': (r) => r.status === 200,
        'response body does not contain Hello World': (r) => !r.body.includes('Hello World'),
        'response body contains Hello Student': (r) => r.body.includes('Hello Student'),
    });
}
