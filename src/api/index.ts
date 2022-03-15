import axios from "axios"
import { CERTIFICATES_URL } from "../constants/endpoints"



export const fetchCertificateList = async (pageNumber: number = 1, perPage: number = 10) => {
    const response = await axios.get<Certificates>(`${CERTIFICATES_URL}page=${pageNumber}&perPage=${perPage}`);
    return response.data;
}