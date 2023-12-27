# This repository contains concepts from basic to advanced for learning react

#Parcel

- Dev Build
- local server
- Hot module replacement (HMR). Automatically refreshs the browser on save of file
- It uses File watching algorithm which is written in C++
- Reliable Caching - faster builds
- Image optimization
- Minification
- Bundling
- Compression
- Consistent Hashing
- Code splitting
- Differential Bundling -support older browser
- Diagnostic
- HTTPS
- Error handling
- Tree Shaking
- Different Dev and prod builds

#Food Ordering App

- Header
  - logo
  - nav items
- Main
  - search bar
  - restaurant container
  -      restaurantcard
  -        - img
  -        --name of res, star rating, cusine, delivery time
- Footer
  - copyright
  - links
  - contact info

#Type of import/export

- Default Export/import
  - export default component
  - import component from "path"
- Named import/export
  - export const component
  - import {component} from "path"
    When we have to export multiple objects from one file, use named export otherwise use default export

#React Hooks

- (Normal js util functions)
- useState - state variable in react
- useEffect - it is used to create side effects
- useParams - it is used to read the query params from url
- useRouteError - it provides error details occurred during routing

#Redux toolkit(RTK)

- RTK is intented to be the standard way to write redux logic
- redux works in the data layer of the application
- it is useful for big enterprise level applications
- install @reduxjs/toolkit and react-redux
- Build store
- connect store to our app
- create a cartSlice
- dispatch action
- Selector

# Types of testing(developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up testing in our app

- install react testing library
- install jest
- install babel dependencies for jest
- configure babel (https://jestjs.io/docs/getting-started#using-babel)
- configure parcel config file to disable default babel transpilation ( https://parceljs.org/languages/javascript/#usage-with-other-tools )
