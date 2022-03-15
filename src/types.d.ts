type Certificate = {
    id: number,
    uniqueNumber: string,
    status: string, //ENUM MAYBE?
    ownershipStatus: string,
    vintageYear: number[],
    methodologyVersion: string[],
    countryCode: string,
    companyName: string,
    tonnes: number,
    issuanceDate: string | Date,
    deployment: string,
    validity: string,
    replenishment: any | null,
    carbonField: {
        id: number,
        address: {
            "id": number,
            "country": string
        }
    },
    carbonUser: {
        id: number,
        user: {
            id: number
        },
        company: {
            id: number,
            name: string,
            address: {
                id: number,
                country: string
            }
        }
    },
    carbonCertificateOwnerAccount: {
        id: number,
        carbonUser: {
            id: number,
            user: {
                id: number
            },
            company: {
                id: number,
                name: string,
                address: {
                    id: number,
                    country: string
                }
            }
        }
    }
}

type Meta = {
    currentPage: number,
    size: number,
    total: number,
    totalPages: number
}

type Certificates = {
    errors: [],
    result: {
        data: Certificate[],
        meta: Meta
    },
    success: boolean
}