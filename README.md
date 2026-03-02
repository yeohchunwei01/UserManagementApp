# Project Overview
This repository contains a **React Native** application for user authentication, built using the **React Native CLI** without frameworks.
The application is built with **TypeScript**, **NativeWind**, **React Navigation**, and **React Hook Form**, with validation handled using **Zod**.

## Setup
Before building the application, make sure to install the dependencies and iOS pods::
```
# Install npm dependencies
npm install

# For iOS, install CocoaPods
cd ios && pod install && cd ..
```

## Running the Application
### iOS
To build and run the app on iOS:
```
npm run ios
```
Make sure you have installed dependencies and run pod install in the ios folder first.
### Android
To build and run the app on Android:
```
npm run android
```

## Code Quality
This application is built with **TypeScript** and simple **linting** rules.
### Linting
Check for linting issues:
```
npm run lint
```
Automatically format code according to linting rules:
```
npm run format
```
### Type Checking
Check for TypeScript type errors:
```
npm run tsc
```
