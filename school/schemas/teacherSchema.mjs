export const teacherSchema = {
    "name": {
        "first": "string",
        "last": "string"
    },
    "image": "string",
    "dateOfBirth": "date", // format date
    "emails": [
        {
        "email": "string",
        "primary": "boolean"
        }
    ],
    "phones": [
        {
        "phone": "string",
        "primary": "boolean"
        }
    ],
    "sex": "string", // male or female
    "subjects": [
        {
        "subject": "string"
        }
    ],
    "description": "string",
  };