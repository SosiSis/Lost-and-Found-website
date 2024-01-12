# Web-Group-Asssignment
# Lost and Found Website
## Group members
Admin account email sosinasisay30@gmail.com
| No | Name | ID |Section|
| ------ | ------ | ------ |------ |
|1| Meaza Tadele | UGR/6378/14| 2|
|2| Sosina Sisay| UGR/0131/14| 2|
|3| Rediet Woudma | UGR/4779/14| 2|
|4| Liya Daniel| UGR/5670/14| 2|


# Description
The Student Lost and Found Platform is an impactful solution inspired by instances of lost items encountered within educational environments, with a primary focus on catering to the needs of students. 
This platform serves as a comprehensive system that enables users to effortlessly discover and manage lost items within their school or university environment.
Users of the platform can explore a wide range of found items posted by their fellow students. Each item listing provides essential information such as a picture, title, and relevant details. By selecting an item, users gain access to a comprehensive view that includes a picture, the location where it was discovered, contact information of the owner, and additional descriptive information.
In addition to the item listings, the platform offers a dedicated findings page for each user. Within this section, students can conveniently access their own posts and utilize the platform's intuitive functionality to add details about an item they have found.
Administrators enjoy a comprehensive set of CRUD features designed to efficiently manage the lost and found system. They post items, oversee the found item list, and perform updates or deletions as necessary. These administrative capabilities ensure the smooth operation and organization of the lost and found process within the educational institution.


# Technology for Frontend
#### Tailwind
#### HTML
#### css

# Database Technology
#### Mongo DB

## Why we used Mongo DB
MongoDB is a suitable choice for a lost and found website due to its flexible and scalable data model, document-oriented storage, fast querying capabilities, high availability and easy integration with JavaScript and web technologies, and a supportive community. With MongoDB, you can store and manage diverse lost and found item data easily with schemas, efficiently search and filter items based on various criteria, and benefit from seamless JavaScript integration. Considering your specific requirements will help determine if MongoDB is the right fit for your lost and found website.


```


# Nestjs


## Getting started

You can setup this project using npm 


### Clone repo

```bash
git clone https://github.com/SosiSis/web-assignment.git


### Navigate to cloned repo

```bash
cd backend
```

### Install dependencies

```bash

npm install
```

### Start development server

```bash
npm run dev
```

Open [http://localhost:3000] with your browser to see the result.

### Build for production

```bash
npm run build
```

### Start preview server after build

```bash
npm run start
```

Open [http://localhost:3000] with your browser to see the result.

### Run release

Follow the [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/) in your repository. And when you're ready to release, run below scripts.

```bash

npm run release
```


USER
    user can create an account 
    user can log in 
    user can update their profile
    user without an account can see images of found items 
    user with an account can see the images of found items and their descriptions.

# The CRUD features

1. User, either with or without an account can see the found items on their dashboard.
2. User with an account can post items they have found with descriptions and images.
3. Admin can also see all of the found items on their dashboard
4. Admin can delete items a user has posted after they have been claimed by their owners.
5. Admin can edit descriptions on found items.
6. Admin can also post found items.

## Learn More


# constraints 

- !the only type of images that can be added to the found posts are jpg
- !there is a specified admin with an assigned password and username 
     ADMIN_EMAIL = admin@gmail.com
     ADMIN_PASSWORD = admin123
 

You can learn more about Nest js at the website
* [Nestjs Documentation](https://docs.nestjs.com/) - Learn about Next.js features and API
