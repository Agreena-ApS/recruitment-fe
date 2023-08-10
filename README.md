![Agreena](https://agreena.com/wp-content/uploads/2021/06/agreena-logo.svg)

# Frontend recruitment test task

### Carbon Certificates app
Create the application displaying the list of available Carbon certificates with a possibility to save them to favourites.

##### Features
###### "Certificates" page - the list of available Carbon certificates 
- Copying the certificate ID to the clipboard
- Saving the certificate as a favourite (client-side only)

###### "Favourites" page - the list of saved Carbon Certificates
- Same page as "Certificates" with a possibility to remove the certificate from favourites

##### Technical informations
For fetching the certificates use our endpoint:
`https://demo.api.agreena.com/api/public/carbon_registry/v1/certificates?includeMeta=true&page=1&limit=10`

(`API-ACCESS-TOKEN` header with value `Commoditrader-React-FE-Farmer` is needed to authenticate the endpoint)

Keep in mind that there could be more than 10 certificates.

Mockup for the certificates table:
![Mockup](https://i.ibb.co/nfYhYZc/Certificates-list.png)

##### Requirements
- Application should be written in the newest React with strong typing (TypeScript)
- Application should be user-friendly (UX/UI)

If you have any other ideas how to make this app working and looking better - feel free to implement it!

### Good luck!
