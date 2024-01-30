# Hospital Management Rest API 

## Live -
https://hms-cgh8n084o-bhavna777.vercel.app/ 

## Used Technologies - 
**Node & ExpressJS -**  Node.js and Express.js for their fast, asynchronous nature, enabling scalable handling of concurrent requests. Additionally, the vibrant npm ecosystem streamlines development

**MongoDB -** I chose MongoDB for its flexible JSON-like documents, scalability, and suitability for diverse data models.

**Mongoose -** Mongoose simplifies CRUD operations, providing a structured way to interact with MongoDB in Node.js.

**Cloudinary & express-fileupload** - I used Cloudinary to store images and express-fileupload middleware for handling file uploads in my Express.js application.


## All API End Points - 
**Hospital**
  
- Create Hospital -  /api/v1/hospital/new ( POST )

- Get All Hospitals - /api/v1/hospitals ( GET )

- Get Single Hospital - /api/v1/:id ( GET )

**Psychiatrist**

- Create Psychiatrist - /api/v1/psychiatrist/new ( POST )
- Get All Psychiatrists - /api/v1/psychiatrists ( GET )

**Patient**

- Create Patient - /api/v1/patient/new ( POST )
- Get All Patients - /api/v1/patients ( GET )

#### Note: - You can get database dump inside the database folder


## Run Locally

Clone the project

```bash
  git clone https://github.com/Bhavna777/HospitalManagementAPI.git
```

Go to the project directory

```bash
  cd HospitalManagementAPI
```

Install dependencies

```bash
  npm install
```

- Add config.env file inside /config folder
- Add your credentials as mentioned in /config/demoConfig.env
Start the server

```bash
  npm run dev
```

## Feedback

If you have any feedback, please reach out to us at bhavnawalia1234567@gmail.com
