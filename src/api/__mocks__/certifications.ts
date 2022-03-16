import { mockedCertificationList } from "../../fixtures/certifications";

export const fetchCertificateList = async (pageNumber: number = 1, perPage: number = 10) => Promise.resolve(mockedCertificationList)

