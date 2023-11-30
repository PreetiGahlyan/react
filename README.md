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
