# TinyApp 

TinyApp is an application that allows users to shorten long URLs. It is a full stack web application built with Node and Express. The application is user-specific, users can register and login with their email address and the application will keep a record of the users URLs. The useres will be able to visit the original sites via the shortened links. 

## Final Product

!["Create new url page: user must be signed in (indicated by the top right sign in status) to create new urls. User will enter the original long url into the input field, click submit to retrieve the generated short url."](https://github.com/Hayder-Suwaed/tinyApp/blob/master/docs/create_url.png?raw=true)
!["Edit url page: user must be logged in to edit urls. User can edit the long url associated with that short url. This page also shows the total number of times / unique visits / and visitor info for those that visited the site using the generated short url."](https://github.com/Hayder-Suwaed/tinyApp/blob/master/docs/edit_url.png?raw=true)
!["Login page: user enter email and password to login. If user have no associated account yet, refer to the top right corner to access the "register" page to register a new account."](https://github.com/Hayder-Suwaed/tinyApp/blob/master/docs/login_page.png?raw=true)
!["URLs page: this page displays the urls the user has saved, along with edit and delete buttons to modify the list."](https://github.com/Hayder-Suwaed/tinyApp/blob/master/docs/urls_page.png?raw=true)

## Dependencies

- Node.js
- Express
- EJS
- bcrypt
- body-parser
- cookie-session

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `node express_server.js` command.
