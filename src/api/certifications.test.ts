import axios from 'axios'
import MockAdapter from "axios-mock-adapter";
import { fetchCertificateList } from './certifications';
import { CERTIFICATES_URL } from '../constants';
import { mockedCertificationList } from '../fixtures/certifications';

const mock = new MockAdapter(axios);

describe("Certification api tests", () => {
    it("requests and gets a success response from fetchCertificateList api", async () => {
        const pageNumber = 1;
        const perPage = 10;

        const url = `${CERTIFICATES_URL}page=${pageNumber}&perPage=${perPage}`;

        mock
            .onGet(url)
            .reply(200, mockedCertificationList);

        const result = await fetchCertificateList(1, 10);
        expect(result).toEqual(mockedCertificationList);
    });
});
