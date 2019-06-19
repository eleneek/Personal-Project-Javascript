export const pupilsSchema = {
    "name": {
        "first": "string",
        "last": "string"
    },
    "image": "string",
    "dateOfBirth": "date", // format date
    "phones": [
        {
        "phone": "string",
        "primary": "boolean"
        }
    ],
    "sex": "string", // male OR female
    "description": "string"
}