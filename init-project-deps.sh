#!/usr/bin/env bash

# Assuming the use of a *blank* expo template. . .

# State management
npm i --save \
  @reduxjs/toolkit \
  react-redux
# Side effect management
npm i --save \
  redux-saga
# Navigation
npm i --save \
  @react-navigation/native \
  @react-navigation/stack \
  react-native-gesture-handler@~2.5.0 \
  react-native-screens@~3.15.0 \
  react-native-safe-area-context@4.3.1
# Persistent Storage
npm i --save \
  @react-native-async-storage/async-storage
# Icons
npm i --save \
  react-native-vector-icons
# Development libraries
npm i --save-dev --legacy-peer-deps \
  jest \
  jest-expo \
  react-test-renderer@18.0.0 \
  @testing-library/user-event