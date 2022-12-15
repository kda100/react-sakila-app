# React Sakila App

This repository contains frontend code written using React to present the data contained in MySQL's Sakila database.

It is connected to a backend that exposes this data in JSON format.

Bootstrap is used to style components, Redux is used to manage state and React Router is used for navigation.

To prevent unneccessary functional components re-executing code, the useCallback and useMemo hooks are used as well as React.memo.

To reduce code duplication in components; custom react hooks were used and to reduce code duplication in redux stores; custom 'createSlice' functions were created.

Available at: https://main--dulcet-faun-daa7fe.netlify.app
